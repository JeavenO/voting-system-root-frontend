import React from "react";
// BrowserRouter acts as the parent container for all routing logic
// Routes and Route handle the mapping of URLs to specific UI components
// Link enables navigation without reloading the entire page
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Importing your individual page components
import Login from "./pages/Login";
import Register from "./pages/Register";
import Voting from "./pages/Voting";
import Results from "./pages/Results"; // Now imported to display election outcomes

function App() {
  return (
    // Router wraps the entire app to enable navigation capabilities
    <Router>
      <div className="App">
        {/* Navigation bar: Using <Link> to change URL without a full browser refresh */}
        {/* Tailwind classes (e.g., p-4, bg-gray-800) will work here once you set them up */}
        <nav style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
          <Link to="/login" style={{ marginRight: "10px" }}>
            Login
          </Link>
          <Link to="/register" style={{ marginRight: "10px" }}>
            Register
          </Link>
          <Link to="/vote" style={{ marginRight: "10px" }}>
            Vote
          </Link>
          <Link to="/results">Results</Link>
        </nav>

        {/* The <main> tag holds the content that changes based on the selected route */}
        <main style={{ padding: "20px" }}>
          <Routes>
            {/* The Routes component looks for a match between the URL and the path */}

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/vote" element={<Voting />} />
            <Route path="/results" element={<Results />} />

            {/* Default Route: Redirects the user to the Login page when visiting the root '/' */}
            <Route path="/" element={<Login />} />

            {/* Optional: You can add a 404 Not Found route here if needed */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
