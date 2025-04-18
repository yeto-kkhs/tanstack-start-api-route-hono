import { Hono } from "hono";
import { hc } from "hono/client";

export const app = new Hono()
  .basePath("/api")
  .get("/hello", (c) => c.json({ message: "Hello Hono!" }))
  .get("/hello/:name", async (c) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const { name } = c.req.param();
    return c.json({ message: `Hello ${name}!` });
  });

export const client = hc<typeof app>("http://localhost:3000")