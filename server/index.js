// import { config } from "dotenv";
// config();
// import { app } from "./src/app.js";
// import redis from "./src/config/redis.js";

// const port = process.env.PORT;
// app.listen(port, () => {
//   console.log(`Server listening on port, ${port}`);
// });

// // pass it to front_end later
// const complaintCategories = {
//   "Roads & Transport": [
//     "potholes",
//     "illegal parking",
//     "accident"
//   ],
//   "Sanitation": [
//     "garbage",
//     "open drains",
//     "bad smell"
//   ],
//   "Water Supply": [
//     "no water",
//     "contaminated water"
//   ],
//   "Power": [
//     "streetlight out",
//     "power cuts"
//   ],
//   "Health": [
//     "dead animals"
//   ],
//   "Environment": [
//     "pollution",
//     "noise complaints"
//   ]
// };

// // Civic-Desk
import { config } from "dotenv";
// import express from "express";

config();

import { app } from "./src/app.js"; // your Express app
import redis from "./src/config/redis.js"; // your redis setup
import cors from "cors";

// ===== CORS CONFIG =====
// Allow local dev + production frontend
const allowedOrigins = [
  "http://localhost:5173", // Vite dev server
  "https://civic-desk.vercel.app" // your Vercel frontend
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true, // required because your axios uses withCredentials
}));

// ===== EXPRESS JSON =====
// app.use(express.json());

// ===== PORT =====
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// ===== COMPLAINT CATEGORIES =====
export const complaintCategories = {
  "Roads & Transport": ["potholes", "illegal parking", "accident"],
  "Sanitation": ["garbage", "open drains", "bad smell"],
  "Water Supply": ["no water", "contaminated water"],
  "Power": ["streetlight out", "power cuts"],
  "Health": ["dead animals"],
  "Environment": ["pollution", "noise complaints"]
};
