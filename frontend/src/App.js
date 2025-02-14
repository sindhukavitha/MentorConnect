import React from "react";
import LandingPage from "./components/LandingPage"; // Ensure correct path
import Front from "./components/front"; // Correct import case
import MentorForm from "./components/MentorForm"; // Ensure this file exists
import MentorList from "./components/MentorList"; // Ensure this file exists
import { CalendarDemo } from "./components/CalendarDemo"; // Ensure this file exists
import "bootstrap/dist/css/bootstrap.min.css";
import "react-day-picker/dist/style.css";
import "./styles.css"; // Import custom CSS

const App = () => {
  return (
    <div>
      <LandingPage />
      <Front />
      <h1 className="text-center mt-4">Mentor Availability System</h1>
      <MentorForm />
      <MentorList />
      <CalendarDemo /> {/* Included Calendar Component */}
    </div>
  );
};

export default App;

