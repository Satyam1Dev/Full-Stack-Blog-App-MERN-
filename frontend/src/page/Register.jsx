


import React, { useState } from "react";
import Heading from "../component/Heading";
import "./style.css";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  async function register(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:8080/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
  
    if (response.status === 200) {
      alert("registration successful");
    } else {
      alert("registration failed");
    }
    console.log(response);
  }


  return (
    <div>
      <Heading />

      <div className="form_container">
        <div>
          <h1>Register</h1>
          <form action="" className="register" onSubmit={register}>
            <label htmlFor="Name">User Name</label>
            <br />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(ev) => setUsername(ev.target.value)}
            />
            <br />
            <br />
            <label htmlFor="Name">Password</label>
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
            <br />
            <br />
            <input type="submit" value="Register" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
