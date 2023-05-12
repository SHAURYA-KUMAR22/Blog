import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  return (
    <div className="Register">
      <span className="RegisterTitle">Register</span>
      <form className="RegisterForm">
      <label>Username</label>
        <input
          className="RegisterInput"
          type="text"
          placeholder="enter your username..."
        />
        <label>Email</label>
        <input
          className="RegisterInput"
          type="email"
          placeholder="enter your email..."
        />
        <label>Password</label>
        <input
          className="RegisterInput"
          type="password"
          placeholder="enter password..."
        />

        <button className="RegisterButton">Register</button>
      </form>
      <button className="RegisterLoginButton">
      <Link className="link" to="/login">Login</Link>

      </button>
    </div>
  );
}
