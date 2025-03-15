import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const MentorSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Mentor Signup Successful! You can now log in.");
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="signup-container">
      <h2>Mentor Signup</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div>
          <label>Confirm Password</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
      </form>

      {/* Fix: Use Link instead of <a href=""> */}
      <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
};

export default MentorSignup;
