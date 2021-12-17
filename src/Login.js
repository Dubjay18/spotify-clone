import React from "react";
import "./Login.css";
import sp from "./images/Spotify.jpg";
import { loginUrl } from "./spotify";
const Login = () => {
  return (
    <div className="login">
      {/* Spotify Logo  */}
      {/* Login with spotify button  */}
      <img src={sp} alt="" />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
};

export default Login;
