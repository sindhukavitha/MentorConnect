import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MentorPage from "./components/MentorPage";
import CalendarPage from "./components/CalendarPage";
import Login from "./components/Login";
import Signup from "./components/Signup";  // Import Signup Page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentor" element={<MentorPage />} />
        <Route path="/booking" element={<CalendarPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> {/* Signup Route */}
      </Routes>
    </Router>
  );
}

export default App;
