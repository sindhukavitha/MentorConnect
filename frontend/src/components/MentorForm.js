import React, { useState } from "react";
import axios from "axios";

const MentorForm = () => {
  const [mentor, setMentor] = useState({
    name: "",
    email: "",
    specification: "",
    experience: "",
    calendlyUrl: "",
    availableTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMentor({ ...mentor, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/addMentor", mentor);
      alert(response.data.message);
      setMentor({ name: "", email: "", specification: "", experience: "", calendlyUrl: "", availableTime: "" });
    } catch (error) {
      alert("Error adding mentor: " + error.response.data.message);
    }
  };

  return (
    <div className="mentor-form-container">
      <h2>Mentor Availability Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={mentor.name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={mentor.email} onChange={handleChange} required />

        <label>Specification:</label>
        <input type="text" name="specification" value={mentor.specification} onChange={handleChange} required />

        <label>Experience (Years):</label>
        <input type="number" name="experience" value={mentor.experience} onChange={handleChange} required />

        <label>Calendly URL:</label>
        <input type="url" name="calendlyUrl" value={mentor.calendlyUrl} onChange={handleChange} required />

        <label>Available Time:</label>
        <input type="text" name="availableTime" value={mentor.availableTime} onChange={handleChange} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MentorForm;