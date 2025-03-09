import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../../store/useStore";
import useAuth from "../../store/useAuth";
import "./login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(username, password);

    if (result.success) {
      navigate("/profile"); 
    } else {
      alert("Login yoki parol noto‘g‘ri!"); 
    }
  };

  return (
    <div className="login-container">
      <div className="login">

      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Kirish</button>
      </form>
      </div>
    </div>
  );
}

export default Login;







