import arcjet, { tokenBucket } from "@arcjet/next";

const aj = arcjet({
  key: process.env.ARCJET_KEY,
  characteristics: ["userId"], // Track based on Clerk userId
  rules: [
    // Rate limiting specifically for collection creation
    tokenBucket({
      mode: "LIVE",
      refillRate: 15, // 15 collections user can create 10 number of transactions daily basis only....
      interval: 3600, // per hour
      capacity: 15, // maximum burst capacity
    }),
  ],
});

export default aj;
