import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";
import * as chatController from "./gpt-backend/controllers/chat.controller.js";
import * as userChatsController from "./gpt-backend/controllers/userchats.controller.js";
import dotenv from 'dotenv';

import cookieParser from 'cookie-parser';
import path from 'path';

dotenv.config();
app.use(cookieParser());

const port = process.env.PORT || 3000;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());

// MongoDB connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

// Static files for production
app.use(express.static(path.join(__dirname, "/frontend/dist")));

// API routes
app.get("/api/upload", chatController.getUploadParams);
app.post("/api/chats", ClerkExpressRequireAuth(), chatController.createChat);
app.get("/api/userchats", ClerkExpressRequireAuth(), userChatsController.getUserChats);
app.get("/api/chats/:id", ClerkExpressRequireAuth(), chatController.getChatById);
app.put("/api/chats/:id", ClerkExpressRequireAuth(), chatController.updateChat);

// Serve frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(401).send("Unauthenticated!");
});

// Start the server
app.listen(port, () => {
  connect();
  console.log(`Server running on port ${port}`);
});
