import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MenteeLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to store error message
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Entered:", email, password);
    console.log("Expected:", "sowmikaa.22cse@kongu.edu", "11-Apr-05");
  
    if (email.trim() === "sowmikaa.22cse@kongu.edu" && password.trim() === "11-Apr-05") {
      alert("Logged in successfully!");
      navigate("/mentee-dashboard");
    } else {
      setError("Invalid email or password!");
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="p-6 bg-white shadow-lg rounded-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Mentee Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded mt-1"
              required
            />
          </div>

          {error && <p className="text-red-500 text-center mb-3">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
