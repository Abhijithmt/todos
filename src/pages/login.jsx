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
  <section className="h-screen flex">

  {/* LEFT SIDE */}
  <div className="w-1/2 bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center flex-col">
    <h1 className="text-white text-4xl font-bold">
      TOdo APP
    </h1>
    <p className="text-white font-bold">check your task is completed</p>
  </div>

  {/* RIGHT SIDE */}
  <div className="w-1/2 flex items-center justify-center bg-gray-100">
    
    <div className="flex flex-col gap-3 text-center border rounded-xl py-6 px-6 bg-white shadow-lg">
      <h2 className="text-3xl font-bold">Login</h2>

      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        className="border px-3 py-2 rounded font-mono"
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className="border px-3 py-2 rounded font-mono"
      />

      <button
        className="px-4 py-2 rounded font-bold bg-green-500 text-white hover:bg-green-700"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>

  </div>
</section>
  );
}