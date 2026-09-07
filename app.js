import express from "express";
import dotenv from "dotenv";
import mysql from "mysql2/promise";
import { sequelize } from "./database/dbconnections.js";

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 5000;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
    } catch (error) {
      console.error("Error starting server:", error);
    }
};

startServer();
