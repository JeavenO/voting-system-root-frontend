import React, { useState } from "react";
import api from "../api/axiosConfig"; // Importing our pre-configured Axios instance

function Login() {
  // useState manages the input values for username and password
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  // This function handles the form submission when the user clicks 'Sign In'
  const handleLogin = async (e) => {
    // Prevent the default browser refresh behavior on form submit
    e.preventDefault();

    try {
      // Send the username and password to the backend '/login' endpoint
      const response = await api.post("/login", credentials);

      // Notify the user of a successful login
      alert("Login successful!");

      // Future step: Here we would store a JWT token or user info in state/localStorage
    } catch (error) {
      // Handle and display error messages if the login fails (e.g., incorrect password)
      alert(
        "Login failed: " +
          (error.response?.data?.message || "Check your credentials"),
      );
    }
  };

  return (
    // The form triggers handleLogin when the 'Sign In' button is clicked
    <form onSubmit={handleLogin}>
      <h2>Login</h2>

      {/* Input field for username; updates state on every keystroke */}
      <input
        type="text"
        placeholder="Username"
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />

      {/* Input field for password; hides characters for security */}
      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />

      {/* Submit button to trigger the API request */}
      <button type="submit">Sign In</button>
    </form>
  );
}

export default Login;
