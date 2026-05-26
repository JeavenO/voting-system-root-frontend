import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axiosConfig";

function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await api.post("/login", credentials);
      localStorage.setItem("username", credentials.username);
      localStorage.setItem("password", credentials.password);
      navigate("/dashboard");
    } catch (error) {
      alert(
        "Login failed: " +
          (error.response?.data?.error || "Check your credentials"),
      );
    }
  };

  // Styles defined as objects for "Expensive" feel
  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
      padding: "20px",
    },
    card: {
      background: "rgba(255, 255, 255, 0.05)",
      backdropFilter: "blur(20px)",
      padding: "40px",
      borderRadius: "30px",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      width: "100%",
      maxWidth: "400px",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
    },
    input: {
      width: "100%",
      padding: "16px",
      background: "rgba(255, 255, 255, 0.05)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      borderRadius: "12px",
      color: "white",
      marginBottom: "15px",
      outline: "none",
      fontSize: "16px",
    },
    button: {
      width: "100%",
      padding: "16px",
      background: "#4f46e5",
      color: "white",
      border: "none",
      borderRadius: "12px",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2
          style={{
            color: "white",
            fontSize: "2rem",
            textAlign: "center",
            marginBottom: "30px",
            fontWeight: "300",
            letterSpacing: "2px",
          }}
        >
          VOTE<span style={{ fontWeight: "bold", color: "#818cf8" }}>PRO</span>
        </h2>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            style={styles.input}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            style={styles.input}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => (e.target.style.background = "#6366f1")}
            onMouseOut={(e) => (e.target.style.background = "#4f46e5")}
          >
            SIGN IN
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
