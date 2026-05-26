import React, { useState, useEffect } from "react";
import api from "../api/axiosConfig";

function Results() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Fetch results from backend when component mounts
    const fetchResults = async () => {
      try {
        const response = await api.get("/results");
        setResults(response.data);
      } catch (error) {
        console.error("Failed to fetch results", error);
      }
    };
    fetchResults();
  }, []);

  return (
    <div className="results-container">
      <h2>Live Election Results</h2>
      <ul>
        {results.map((c) => (
          <li key={c.id}>
            {c.name}: <strong>{c.vote_count} votes</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Results;
