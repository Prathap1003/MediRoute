const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test API
app.get("/", (req, res) => {
    res.send("Welcome to MediRoute Backend!");
});

// Health Check API
app.get("/api/health", (req, res) => {
    res.json({
        status: "success",
        message: "MediRoute API is working!"
    });
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`MediRoute server running on port ${PORT}`);
});