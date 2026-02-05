const { Redis } = require("@upstash/redis");
require("dotenv").config();

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

async function seed() {
  console.log("Seeding portfolio data to Redis...");
  try {
    // Using dynamic import because portfolio.js is now ESM
    const portfolioModule = await import("../src/portfolio.js");
    const portfolio = portfolioModule.default;

    await redis.set("portfolio_config", portfolio);
    console.log("✅ Successfully seeded portfolio data!");
  } catch (error) {
    console.error("❌ Error seeding data:", error);
  }
}

seed();
