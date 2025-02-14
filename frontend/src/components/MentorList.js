import { useState, useEffect } from "react";
import axios from "axios";

const MentorList = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/mentors").then((response) => {
      setMentors(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Available Mentors</h2>
      <ul>
        {mentors.map((mentor) => (
          <li key={mentor.email}>
            <strong>{mentor.name}</strong> - {mentor.specification} - {mentor.availableTime} on {mentor.availableDays.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MentorList;
