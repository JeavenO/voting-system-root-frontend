import React, { useState, useEffect } from "react";
import api from "../api/axiosConfig";

function Results() {
  const [results, setResults] = useState({});

  useEffect(() => {
    api.get("/results").then((res) => setResults(res.data));
  }, []);

  // Calculate total votes for percentage logic
  const totalVotes = Object.values(results).reduce((a, b) => a + b, 0);

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
      }}
    >
      {/* Live Pulse Header */}
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
            boxShadow: "0 0 8px #22c55e",
            animation: "pulse 2s infinite",
          }}
        ></span>
      </div>

      {/* Results with Progress Bars */}
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
            {/* Progress Bar Track */}
            <div
              style={{
                width: "100%",
                height: "8px",
                background: "#1e293b",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              {/* Progress Bar Fill */}
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

      {/* Pulse Animation Definition */}
      <style>{`
        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(34, 197, 94, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
        }
      `}</style>
    </div>
  );
}

export default Results;
