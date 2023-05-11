import { Link } from "react-router-dom";
import Login from "../page/Login";
import Register from "../page/Register";
import Home from "../page/Home";
import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../Context/UserContext";

function Heading() {
  const { setUserInfo, userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:8080/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, [setUserInfo]);

  function logout() {
    fetch("http://localhost:8080/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <div>
      <header>
        <Link to="/" className="logo">
          My Blog
        </Link>
        <nav>
          {username && (
            <>
              <Link to="/createpost">Create new post</Link>
              <Link onClick={logout}>Logout ({username})</Link>
            </>
          )}
          {!username && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </nav>
      </header>
    </div>
  );
}

export default Heading;
