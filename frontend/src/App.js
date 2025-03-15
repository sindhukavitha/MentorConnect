import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MentorForm from "./components/MentorForm"; // ✅ Import MentorForm
import CalendarPage from "./components/CalendarPage";
import Signup from "./components/Signup";  
import MentorSignup from "./components/MentorSignup";
import StudentSignup from "./components/StudentSignup";
import LoginPage from "./components/LoginPage";
import LoginMentee from "./components/LoginMentee";
import MentorMenteeCard from "./components/MentorMenteeCard";
import MenteeDashboard from "./components/MenteeDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentor" element={<MentorForm />} /> 
        <Route path="/booking" element={<CalendarPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mentor-signup" element={<MentorSignup />} />
        <Route path="/student-signup" element={<StudentSignup />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/MentorMenteeCard" element={<MentorMenteeCard />} />
        <Route path="/mentee-login" element={<LoginMentee />} /> 
        <Route path="/mentee-dashboard" element={<MenteeDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
