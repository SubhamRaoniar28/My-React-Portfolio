const express = require("express");
const cors = require("cors");
const { Redis } = require("@upstash/redis");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "5mb" }));

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const PORTFOLIO_KEY = "portfolio_config";

// Middleware to check API Key
const authenticate = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  if (apiKey && apiKey === process.env.PORTFOLIO_API_KEY) {
    next();
  } else {
    res.status(401).json({ error: "Unauthorized: Invalid API Key" });
  }
};

// GET endpoint to fetch portfolio data
app.get("/api/portfolio", async (req, res) => {
  try {
    const data = await redis.get(PORTFOLIO_KEY);
    if (!data) {
      return res.status(404).json({ error: "Portfolio data not found" });
    }
    res.json(data);
  } catch (error) {
    console.error("Error fetching from Redis:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// PUT endpoint to update portfolio data
app.put("/api/portfolio", authenticate, async (req, res) => {
  try {
    const newData = req.body;
    if (!newData || typeof newData !== "object") {
      return res.status(400).json({ error: "Invalid data format" });
    }
    await redis.set(PORTFOLIO_KEY, newData);
    res.json({ message: "Portfolio updated successfully" });
  } catch (error) {
    console.error("Error saving to Redis:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// For local development
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;
