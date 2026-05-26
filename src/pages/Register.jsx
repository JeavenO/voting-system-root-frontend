import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axiosConfig";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await api.post("/register", formData);
      alert("Registration successful! Please log in.");
      navigate("/login");
    } catch (e) {
      alert("Registration failed");
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "15px",
    marginBottom: "15px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid #ffffff10",
    borderRadius: "12px",
    color: "white",
    outline: "none",
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
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        position: "relative",
      }}
    >
      <button onClick={() => navigate("/login")} style={backBtn}>
        ← BACK
      </button>

      <div
        style={{
          background: "rgba(255,255,255,0.03)",
          padding: "50px",
          borderRadius: "30px",
          border: "1px solid #ffffff08",
          width: "350px",
        }}
      >
        <h2
          style={{
            color: "white",
            textAlign: "center",
            marginBottom: "30px",
            fontWeight: 200,
          }}
        >
          CREATE{" "}
          <span style={{ fontWeight: "bold", color: "#818cf8" }}>ACCOUNT</span>
        </h2>
        <form onSubmit={handleRegister}>
          <input
            placeholder="Username"
            style={inputStyle}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="Email"
            style={inputStyle}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            style={inputStyle}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <button
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
            REGISTER
          </button>
        </form>
      </div>
    </div>
  );
}
export default Register;
