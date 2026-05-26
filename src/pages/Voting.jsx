import React, { useState } from "react";
import api from "../api/axiosConfig";

function Voting() {
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

  const styles = {
    page: {
      minHeight: "100vh",
      background: "#050505",
      color: "white",
      padding: "60px",
      textAlign: "center",
      fontFamily: "sans-serif",
    },
    card: {
      background: "rgba(255, 255, 255, 0.03)",
      padding: "40px",
      borderRadius: "25px",
      border: "1px solid #ffffff10",
      width: "280px",
      transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      cursor: "default",
    },
    modalOverlay: {
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
    },
    modalCard: {
      background: "rgba(20, 20, 20, 0.95)",
      border: "1px solid #4f46e5",
      padding: "50px",
      borderRadius: "30px",
      textAlign: "center",
      maxWidth: "400px",
      width: "90%",
    },
  };

  return (
    <div style={styles.page}>
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
            style={styles.card}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-15px)";
              e.currentTarget.style.borderColor = "#4f46e5";
              e.currentTarget.style.background = "rgba(255,255,255,0.06)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "#ffffff10";
              e.currentTarget.style.background = "rgba(255,255,255,0.03)";
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                background: "#ffffff05",
                borderRadius: "50%",
                margin: "0 auto 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: "24px" }}>👤</span>
            </div>
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
                transition: "0.3s",
              }}
            >
              CONFIRM VOTE
            </button>
          </div>
        ))}
      </div>

      {/* Success Modal */}
      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalCard}>
            <div style={{ fontSize: "50px", marginBottom: "20px" }}>✅</div>
            <h2 style={{ marginBottom: "10px" }}>Vote Verified</h2>
            <p
              style={{
                color: "#94a3b8",
                lineHeight: "1.6",
                marginBottom: "30px",
              }}
            >
              Your preference for{" "}
              <strong style={{ color: "white" }}>{votedCandidate}</strong> has
              been securely encrypted and added to the ledger.
            </p>
            <button
              onClick={() => setShowModal(false)}
              style={{
                padding: "12px 40px",
                background: "white",
                color: "black",
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
