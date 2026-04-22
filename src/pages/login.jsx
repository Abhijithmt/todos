import { useNavigate } from "react-router-dom";
import { useState } from "react";

 export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username && password) {
      navigate("/tasks");
    } else {
      alert("Enter username & password");
    }
  };

  return (
    <div>
    <div>
      <h2>Login</h2>
      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
    </div>
  );
}