const express = require("express");
const mongoose = require("mongoose");
const gymRoutes = require("./gymRoutes");

const app = express();

app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/gymDB")
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

// Routes
app.use("/api/members", gymRoutes);

app.get("/", (req, res) => {
    res.send("Gym Management System API Running");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});