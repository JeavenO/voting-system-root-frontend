import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axiosConfig";

function Results() {
  const navigate = useNavigate();
  const [results, setResults] = useState({});
  useEffect(() => {
    api.get("/results").then((res) => setResults(res.data));
  }, []);
  const totalVotes = Object.values(results).reduce((a, b) => a + b, 0);

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
        maxWidth: "600px",
        margin: "auto",
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      <button onClick={() => navigate(-1)} style={backBtn}>
        ← BACK
      </button>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2 style={{ fontWeight: 200, display: "inline-block" }}>LIVE TALLY</h2>
        <span
          style={{
            display: "inline-block",
            width: "10px",
            height: "10px",
            background: "#22c55e",
            borderRadius: "50%",
            marginLeft: "10px",
            animation: "pulse 2s infinite",
          }}
        ></span>
      </div>

      {Object.entries(results).map(([name, count]) => {
        const percentage = totalVotes > 0 ? (count / totalVotes) * 100 : 0;
        return (
          <div key={name} style={{ marginBottom: "30px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px",
              }}
            >
              <span>{name}</span>
              <span style={{ color: "#818cf8", fontWeight: "bold" }}>
                {count} Votes ({percentage.toFixed(1)}%)
              </span>
            </div>
            <div
              style={{
                width: "100%",
                height: "8px",
                background: "#1e293b",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${percentage}%`,
                  height: "100%",
                  background: "#4f46e5",
                  borderRadius: "10px",
                  transition: "width 1.5s ease-in-out",
                }}
              ></div>
            </div>
          </div>
        );
      })}
      <style>{`@keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); } 70% { box-shadow: 0 0 0 6px rgba(34, 197, 94, 0); } 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); } }`}</style>
    </div>
  );
}
export default Results;
