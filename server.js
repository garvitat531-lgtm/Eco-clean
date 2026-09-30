const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Backend test
app.get("/", (req, res) => {
    res.json({
        message: "Waste Management Backend is running"
    });
});

// Test API
// Test API
app.get("/api/test", (req, res) => {
    res.json({
        success: true,
        message: "Frontend and Backend connection is working!"
    });
});
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
