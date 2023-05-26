const redis = require('redis');
const url = "redis://localhost:6379";

const client = redis.createClient();
//client.on("error", (err) => console.log("Redis Client Error", err));

async function connectRedis() {
    try {
      await client.connect();
      client.del('post');
    } catch (error) {
      console.log("error in redis", error);
    }
}

connectRedis();
module.exports = client;