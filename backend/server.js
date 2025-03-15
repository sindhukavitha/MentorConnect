require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/mentor";

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Mentor Schema
const mentorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  specification: { type: String, required: true },
  experience: { type: Number, required: true },
  calendlyUrl: { type: String },
  availableTime: { type: String },
});

const Mentor = mongoose.model("Mentor", mentorSchema);

// Route to add mentor availability
app.post("/addMentor", async (req, res) => {
  try {
    const newMentor = new Mentor(req.body);
    await newMentor.save();
    res.json({ message: "Mentor availability added successfully", mentor: newMentor });
  } catch (err) {
    res.status(500).json({ message: "Error saving mentor", error: err.message });
  }
});

// Route to fetch all mentors
app.get("/mentors", async (req, res) => {
  try {
    const mentors = await Mentor.find();
    res.json(mentors);
  } catch (err) {
    res.status(500).json({ message: "Error fetching mentors", error: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));