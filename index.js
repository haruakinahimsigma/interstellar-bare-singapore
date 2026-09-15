import express from "express";
import { createBareServer } from "@tomphttp/bare-server-node";

const app = express();

// Optimized Bare server for streaming + low latency
const bare = createBareServer("/bare/", {
  logErrors: false,
  maxBuffer: 0 // unlimited buffer for YouTube streaming
});

// Disable Express overhead
app.disable("x-powered-by");

// Bare handles everything
app.use((req, res) => bare.handleRequest(req, res));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Bare server running on port " + PORT);
});
