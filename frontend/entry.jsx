import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client"
import {
  signup,
  logout,
  login
} from './util/session_api_util'

document.addEventListener("DOMContentLoaded", () => {
  const root = ReactDOM.createRoot(
    document.getElementById('root')
  );
  root.render(<h1>Lacks!!!</h1>)
  window.logout = logout
  window.signup = signup
  window.login = login
});