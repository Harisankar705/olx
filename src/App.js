import React, { useEffect, useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/SignupPage";
import Login from "./Pages/LoginPage";
import { AuthContext, FireBaseContext } from "./store/Context";
import Create from "./Pages/CreatePage";

function App() {
  const { setUser } = useContext(AuthContext);
  const { auth } = useContext(FireBaseContext);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
