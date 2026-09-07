/**
 * Minimal Chrome DevTools Protocol client for Sandustry renderer scraping.
 */

export const DEFAULT_CDP_PORT = "9222";

/**
 * @param {string} port
 */
export async function isCdpAvailable(port = DEFAULT_CDP_PORT) {
  try {
    const response = await fetch(`http://127.0.0.1:${port}/json/version`, {
      signal: AbortSignal.timeout(1500),
    });
    return response.ok;
  } catch {
    return false;
  }
}

/**
 * @param {string} port
 */
async function pageWebSocketUrl(port) {
  const response = await fetch(`http://127.0.0.1:${port}/json/list`, {
    signal: AbortSignal.timeout(2000),
  });
  if (!response.ok) throw new Error(`CDP /json/list failed: HTTP ${response.status}`);

  const targets = await response.json();
  if (!Array.isArray(targets)) throw new Error("CDP /json/list did not return an array");

  const page = targets.find(
    (entry) =>
      entry &&
      typeof entry === "object" &&
      entry.type === "page" &&
      typeof entry.webSocketDebuggerUrl === "string" &&
      typeof entry.url === "string" &&
      (/Sandustry/i.test(String(entry.title ?? "")) ||
        entry.url.includes("index.html") ||
        entry.url.includes("127.0.0.1")),
  );
  if (!page) {
    throw new Error(
      "No Sandustry renderer page on CDP. Start the game with debug port open (F5 or npm run sandustry).",
    );
  }
  return {
    webSocketDebuggerUrl: page.webSocketDebuggerUrl,
    title: String(page.title ?? ""),
    url: page.url,
  };
}

/**
 * @typedef {{ resolve: (value: unknown) => void, reject: (error: Error) => void, timer: ReturnType<typeof setTimeout> }} Pending
 */

export class CdpConnection {
  /** @param {WebSocket} ws @param {number} timeoutMs */
  constructor(ws, timeoutMs) {
    this.ws = ws;
    this.timeoutMs = timeoutMs;
    this.nextId = 1;
    this.tail = Promise.resolve();
    /** @type {Map<number, Pending>} */
    this.pending = new Map();
    ws.addEventListener("message", (event) => this.onMessage(event));
    ws.addEventListener("close", () => this.rejectAll(new Error("CDP connection closed")));
  }

  /**
   * @param {{ port?: string, timeoutMs?: number }} [options]
   */
  static async connect(options = {}) {
    const port = options.port ?? DEFAULT_CDP_PORT;
    const timeoutMs = options.timeoutMs ?? 8000;
    const target = await pageWebSocketUrl(port);
    const ws = new WebSocket(target.webSocketDebuggerUrl);
    await new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error("CDP websocket open timeout")), timeoutMs);
      ws.addEventListener("open", () => {
        clearTimeout(timer);
        resolve(undefined);
      });
      ws.addEventListener("error", () => {
        clearTimeout(timer);
        reject(new Error("CDP websocket error"));
      });
    });
    const connection = new CdpConnection(ws, timeoutMs);
    connection.pageTitle = target.title;
    connection.pageUrl = target.url;
    return connection;
  }

  /**
   * @param {string} expression
   */
  async evaluate(expression) {
    const details = await this.sendQueued("Runtime.evaluate", {
      expression,
      returnByValue: true,
      awaitPromise: true,
    });
    const exception = details.exceptionDetails;
    if (exception) {
      throw new Error(exception.exception?.description || exception.text || "CDP evaluate failed");
    }
    return details.result?.value;
  }

  close() {
    this.ws.close();
  }

  /**
   * @param {string} method
   * @param {Record<string, unknown>} params
   */
  sendQueued(method, params) {
    const run = this.tail.then(() => this.send(method, params));
    this.tail = run.then(
      () => undefined,
      () => undefined,
    );
    return run;
  }

  /**
   * @param {string} method
   * @param {Record<string, unknown>} params
   */
  send(method, params) {
    const id = this.nextId++;
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        this.pending.delete(id);
        reject(new Error(`CDP timeout waiting for ${method}`));
      }, this.timeoutMs);
      this.pending.set(id, { resolve, reject, timer });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  /** @param {MessageEvent} event */
  onMessage(event) {
    let msg;
    try {
      msg = JSON.parse(String(event.data));
    } catch {
      return;
    }
    if (typeof msg.id !== "number") return;
    const pending = this.pending.get(msg.id);
    if (!pending) return;
    this.pending.delete(msg.id);
    clearTimeout(pending.timer);
    if (msg.error) {
      pending.reject(new Error(msg.error.message || "CDP error"));
      return;
    }
    pending.resolve(msg.result);
  }

  /** @param {Error} error */
  rejectAll(error) {
    for (const pending of this.pending.values()) {
      clearTimeout(pending.timer);
      pending.reject(error);
    }
    this.pending.clear();
  }
}
