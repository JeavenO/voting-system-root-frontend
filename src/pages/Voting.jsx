import React, { useState, useEffect } from "react";
import api from "../api/axiosConfig";

function Voting() {
  const [candidates, setCandidates] = useState([]);

  // Fetch candidate list when the page loads
  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await api.get("/candidates");
        setCandidates(response.data);
      } catch (error) {
        console.error("Failed to fetch candidates", error);
      }
    };
    fetchCandidates();
  }, []);

  // Handle the actual voting action
  const castVote = async (candidateId) => {
    try {
      await api.post("/vote", { candidate_id: candidateId });
      alert("Vote cast successfully!");
    } catch (error) {
      alert("Failed to vote: " + (error.response?.data?.message || "Error"));
    }
  };

  return (
    <div>
      <h2>Cast Your Vote</h2>
      {candidates.map((c) => (
        <div
          key={c.id}
          style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}
        >
          <h3>{c.name}</h3>
          <button onClick={() => castVote(c.id)}>Vote for {c.name}</button>
        </div>
      ))}
    </div>
  );
}

export default Voting;
