import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <button>
        <Link to={`/home`}>Home</Link>
      </button>
    </div>
  );
};

export default Login;
