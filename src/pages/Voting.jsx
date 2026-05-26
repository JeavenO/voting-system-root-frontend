import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axiosConfig";

function Voting() {
  const navigate = useNavigate();
  const [candidates] = useState(["Candidate A", "Candidate B", "Candidate C"]);
  const [showModal, setShowModal] = useState(false);
  const [votedCandidate, setVotedCandidate] = useState("");
  const [error, setError] = useState("");

  const castVote = async (name) => {
    try {
      await api.post("/vote", {
        username: localStorage.getItem("username"),
        password: localStorage.getItem("password"),
        candidate: name,
      });
      setVotedCandidate(name);
      setShowModal(true);
      setError("");
    } catch (e) {
      setError(e.response?.data?.error || "Failed to cast vote.");
    }
  };

  const backBtn = {
    position: "absolute",
    top: "40px",
    left: "40px",
    background: "transparent",
    border: "1px solid #ffffff10",
    color: "#94a3b8",
    padding: "8px 16px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "0.8rem",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "white",
        padding: "60px",
        textAlign: "center",
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      <button onClick={() => navigate(-1)} style={backBtn}>
        ← BACK
      </button>
      <h2
        style={{
          marginBottom: "10px",
          fontWeight: 200,
          fontSize: "2.5rem",
          letterSpacing: "2px",
        }}
      >
        ELECTION BOOTH
      </h2>
      <p style={{ color: "#64748b", marginBottom: "50px" }}>
        Securely cast your executive preference.
      </p>

      {error && (
        <p
          style={{ color: "#ef4444", marginBottom: "30px", fontWeight: "bold" }}
        >
          {error}
        </p>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {candidates.map((name) => (
          <div
            key={name}
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              padding: "40px",
              borderRadius: "25px",
              border: "1px solid #ffffff10",
              width: "280px",
              transition: "0.4s",
              cursor: "default",
            }}
          >
            <h3 style={{ marginBottom: "25px", letterSpacing: "1px" }}>
              {name}
            </h3>
            <button
              onClick={() => castVote(name)}
              style={{
                width: "100%",
                padding: "15px",
                background: "#4f46e5",
                border: "none",
                borderRadius: "12px",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              CONFIRM VOTE
            </button>
          </div>
        ))}
      </div>

      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "rgba(20, 20, 20, 0.95)",
              border: "1px solid #4f46e5",
              padding: "50px",
              borderRadius: "30px",
              textAlign: "center",
              maxWidth: "400px",
            }}
          >
            <div style={{ fontSize: "50px", marginBottom: "20px" }}>✅</div>
            <h2>Vote Verified</h2>
            <p style={{ color: "#94a3b8", marginBottom: "30px" }}>
              Preference for <strong>{votedCandidate}</strong> encrypted.
            </p>
            <button
              onClick={() => {
                setShowModal(false);
                navigate("/dashboard");
              }}
              style={{
                padding: "12px 40px",
                background: "white",
                border: "none",
                borderRadius: "10px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              DONE
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Voting;
