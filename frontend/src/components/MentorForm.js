import { useState } from "react";
import axios from "axios";


const MentorForm = () => {
  const [mentor, setMentor] = useState({
    name: "",
    email: "",
    specification: "",
    availableDays: [],
    availableTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMentor({ ...mentor, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setMentor((prevState) => ({
      ...prevState,
      availableDays: checked
        ? [...prevState.availableDays, value]
        : prevState.availableDays.filter((day) => day !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/addMentor", mentor);
      alert("Mentor availability submitted successfully!");
      setMentor({ name: "", email: "", specification: "", availableDays: [], availableTime: "" });
    } catch (error) {
      alert("Error submitting mentor availability");
    }
  };

  return (
    <div className="mentor-form-container">
      <h2>Mentor Availability Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Mentor Name"
          value={mentor.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={mentor.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="specification"
          placeholder="Specification (e.g., Web Development, AI, Data Science)"
          value={mentor.specification}
          onChange={handleChange}
          required
        />
        <label>Available Days:</label>
        <div className="checkbox-group">
          {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(
            (day) => (
              <label key={day}>
                <input
                  type="checkbox"
                  value={day}
                  onChange={handleCheckboxChange}
                  checked={mentor.availableDays.includes(day)}
                />
                {day}
              </label>
            )
          )}
        </div>
        <input
          type="text"
          name="availableTime"
          placeholder="Available Time (e.g., 10:00 AM - 4:00 PM)"
          value={mentor.availableTime}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MentorForm;
