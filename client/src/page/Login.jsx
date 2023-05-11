import React, { useContext, useState } from "react";
import Heading from "../component/Heading";
import { Navigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContext)


async function login(ev){
  ev.preventDefault()
  const response = await fetch('http://localhost:8080/login',{
    method:"POST",
    body:JSON.stringify({username,password}),
    headers:{"Content-Type":"application/json"},
     credentials:'include'
  })
  if(response.ok){
    response.json().then(userInfo =>{
      setUserInfo(userInfo)
       setRedirect(true)
    })
   
  }else{
    alert('wrong credentials')    
  }  
}
if(redirect){
  return<Navigate to ={'/'}/>
}
  return (
    <div>
      <Heading />
      <div className="form_container">
        <div>
          <h1>Login</h1>
          <form action="" className="login" onSubmit={login} >
            <label htmlFor="name"> Name</label>
            <br />
            <input
              type="text"
              placeholder="Enter User Name"
              value={username}
              onChange={(ev) => setUsername(ev.target.value)}
            />
            <br />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
            <br />
            <br />
            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
