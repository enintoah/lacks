import React from "react";
import { NavLink } from "react-router-dom";

class Homepage extends React.Component {
  constructor(props) {
    super(props)

  }

  render() { 
    return (
    <div>
      <h2>Github</h2>
      <h2>LinkedIn</h2>
      <h1>Slack is your digital HQ</h1>
      <h2>Transform the way you work with one place for everyone and everything you need to get stuff done.</h2>
      <button>Demo</button>
      <NavLink to="/login">Sign in</NavLink>
      <button>Try For Free</button>
    </div>
    )
  }
}

export default Homepage