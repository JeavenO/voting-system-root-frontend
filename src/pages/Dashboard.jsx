import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const styles = {
    page: {
      minHeight: "100vh",
      background: "#050505",
      color: "white",
      padding: "40px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontFamily: "sans-serif",
    },
    header: {
      width: "100%",
      maxWidth: "800px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "1px solid #ffffff10",
      paddingBottom: "20px",
      marginBottom: "60px",
    },
    card: {
      background: "rgba(255, 255, 255, 0.03)",
      backdropFilter: "blur(20px)",
      padding: "50px",
      borderRadius: "30px",
      border: "1px solid rgba(255, 255, 255, 0.08)",
      textAlign: "center",
      width: "100%",
      maxWidth: "500px",
    },
    actionBtn: (color) => ({
      padding: "20px",
      background: color,
      border: "none",
      borderRadius: "15px",
      color: "white",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "0.3s",
    }),
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1
          style={{ fontSize: "1.5rem", letterSpacing: "4px", fontWeight: 200 }}
        >
          PORTAL
        </h1>
        <button
          onClick={handleLogout}
          style={{
            background: "transparent",
            color: "#94a3b8",
            border: "1px solid #ffffff10",
            padding: "8px 20px",
            borderRadius: "20px",
            cursor: "pointer",
          }}
        >
          Sign Out
        </button>
      </header>
      <div style={styles.card}>
        <div
          style={{
            width: "80px",
            height: "80px",
            background: "linear-gradient(45deg, #4f46e5, #9333ea)",
            borderRadius: "50%",
            margin: "0 auto 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          {username?.charAt(0).toUpperCase()}
        </div>
        <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>
          Welcome, {username}
        </h2>
        <p style={{ color: "#64748b", marginBottom: "40px" }}>
          Secure Election Executive Dashboard
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "15px",
          }}
        >
          <button
            onClick={() => navigate("/vote")}
            style={styles.actionBtn("#4f46e5")}
          >
            CAST VOTE
          </button>
          <button
            onClick={() => navigate("/results")}
            style={styles.actionBtn("rgba(255,255,255,0.05)")}
          >
            RESULTS
          </button>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
