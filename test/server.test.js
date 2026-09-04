const assert = require("node:assert/strict");
const http = require("node:http");
const test = require("node:test");

const app = require("../server");

test("GET / retourne un statut ok", async () => {
  const server = http.createServer(app);
  await new Promise((resolve) => server.listen(0, resolve));

  try {
    const port = server.address().port;
    const response = await fetch(`http://127.0.0.1:${port}/`);
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { status: "ok" });
  } finally {
    await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
  }
});
