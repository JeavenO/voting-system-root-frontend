import React, { useState } from "react";
import api from "../api/axiosConfig"; // Importing the configured Axios instance

function Register() {
  // useState manages the input values for username and password
  const [formData, setFormData] = useState({ username: "", password: "" });

  // Function to handle form submission
  const handleRegister = async (e) => {
    e.preventDefault(); // Stop the page from refreshing

    try {
      // Send the user data to the backend '/register' endpoint
      const response = await api.post("/register", formData);

      // Notify the user of a successful registration
      alert("Registration successful! Please log in.");
    } catch (error) {
      // Handle and display error messages if registration fails
      alert(
        "Registration failed: " +
          (error.response?.data?.message || "Try again"),
      );
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Create an Account</h2>

      {/* Username input */}
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />

      {/* Password input */}
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />

      {/* Submit button */}
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
