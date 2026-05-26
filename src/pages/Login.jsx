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

  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#050505",
      padding: "20px",
    },
    card: {
      background: "rgba(255, 255, 255, 0.03)",
      backdropFilter: "blur(20px)",
      padding: "40px",
      borderRadius: "30px",
      border: "1px solid rgba(255, 255, 255, 0.08)",
      width: "100%",
      maxWidth: "400px",
    },
    input: {
      width: "100%",
      padding: "16px",
      background: "rgba(255, 255, 255, 0.03)",
      border: "1px solid #ffffff10",
      borderRadius: "12px",
      color: "white",
      marginBottom: "15px",
      outline: "none",
    },
    button: {
      width: "100%",
      padding: "16px",
      background: "#4f46e5",
      color: "white",
      border: "none",
      borderRadius: "12px",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "0.3s",
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
            fontWeight: 200,
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
          <button type="submit" style={styles.button}>
            SIGN IN
          </button>
        </form>

        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              style={{
                color: "#818cf8",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Create one
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Login;
