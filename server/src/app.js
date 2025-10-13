import express from "express";
import { query } from "./config/db.js";
import authRoutes from "./routes/auth_routes.js";
import cookieParser from "cookie-parser";
import complaintRoutes from "./routes/complaint_routes.js";
import averageRatingRoutes from "./routes/avg_ward_rating_routes.js";
import cors from "cors"; // Add this import
import wardRoutes from './routes/ward_routes.js';
import testRoutes from './routes/test.js';

const app = express();

// CORS configuration
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
  ? 'https://civic-desk.vercel.app' 
  : ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true, // Allow cookies to be sent
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/complaint", complaintRoutes);
app.use("/api/rating", averageRatingRoutes);
app.use('/api/ward', wardRoutes);
app.use('/api', testRoutes);


export { app };