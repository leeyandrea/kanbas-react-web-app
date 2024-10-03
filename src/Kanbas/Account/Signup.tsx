import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input className="form-control mb-2" placeholder="username" />
      <input
        className="form-control mb-2"
        placeholder="password"
        type="password"
      />
      <input
        placeholder="verify password"
        type="password"
        className="form-control mb-2"
      />
      <Link to="/Kanbas/Dashboard" className="btn btn-primary w-100">
        Sign Up
      </Link>
      <Link to="/Kanbas/Account/Signin">Sign in</Link>
    </div>
  );
}
