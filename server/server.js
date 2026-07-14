const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const projectRoutes = require("./routes/projectRoutes");

const app = express();

// Connect MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/projects", projectRoutes);

app.get("/", (req, res) => {
  res.send("Server is running...");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});