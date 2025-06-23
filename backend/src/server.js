const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("./config/env");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const thoughtRoutes = require("./routes/thoughtRoutes");
const reportRoutes = require("./routes/reportRoutes");
const errorHandler = require("./middleware/errorHandler");
const affirmationRoutes = require("./routes/affirmationRoutes");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/thoughts", thoughtRoutes);
app.use("/api/report", reportRoutes);
app.use("/api/affirmations", affirmationRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
