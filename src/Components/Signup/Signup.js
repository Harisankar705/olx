import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import Logo from "../../assets/images/olx-logo-vector.png";
import { FireBaseContext } from "../../store/Context";

const Signup = () => {
  const navigate = useNavigate(); // React Router v6
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const { auth, storage } = useContext(FireBaseContext);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await auth.createUserWithEmailAndPassword(email, password);
      await result.user.updateProfile({ displayName: username });
      await storage.collection("users").add({
        id: result.user.uid,
        username: username,
        phone: phonenumber,
      });
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="signupParentDiv">
      <img width="50px" height="50px" src={Logo} alt="OLX Logo" />
      <form onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}
        <label htmlFor="username">Username</label>
        <br />
        <input
          className="input"
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          className="input"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="phone">Phone</label>
        <br />
        <input
          className="input"
          type="text"
          id="phone"
          name="phonenumber"
          value={phonenumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          className="input"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Signup</button>
      </form>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Signup;
