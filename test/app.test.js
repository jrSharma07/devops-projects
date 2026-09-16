const test = require("node:test");
const assert = require("node:assert/strict");
const request = require("supertest");

const app = require("../app");

test("GET /health should return status UP", async () => {
    const response = await request(app).get("/health");

    assert.equal(response.statusCode, 200);
    assert.equal(response.body.status, "UP");
});