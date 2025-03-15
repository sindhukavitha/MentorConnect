import React, { useEffect, useState } from "react";

const MenteeDashboard = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    // Fetch mentors from localStorage
    const storedMentors = JSON.parse(localStorage.getItem("mentors")) || [];
    setMentors(storedMentors);
  }, []);

  // Function to handle connection request
  const handleConnect = (mentor) => {
    alert(`You have connected with ${mentor.name}`);
    console.log("Connected with:", mentor);
    // You can also send a request to the backend here
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Available Mentors</h2>

      {mentors.length === 0 ? (
        <p className="text-gray-600">No mentors available yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center w-80">
              <h3 className="text-xl font-semibold text-gray-800">{mentor.name}</h3>
              <p className="text-gray-600">{mentor.specification}</p>
              <p className="text-gray-500">Experience: {mentor.experience} years</p>
              <p className="text-gray-500">Email: {mentor.email}</p>
              <p className="text-gray-500">Time: {mentor.availableTime}</p>

              {mentor.calendlyUrl && (
                <a
                  href={mentor.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 inline-block"
                >
                  Schedule a Meeting
                </a>
              )}

              {/* Connect Button */}
              <button
                onClick={() => handleConnect(mentor)}
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 inline-block"
              >
                Connect
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenteeDashboard;
