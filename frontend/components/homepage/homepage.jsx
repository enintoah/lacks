import React from "react";
import { NavLink } from "react-router-dom";

class Homepage extends React.Component {
  constructor(props) {
    super(props)

  }

  render() { 
    return (
    <div>
      <h1>Hello World</h1>
      <NavLink to="/login">Sign in</NavLink>
    </div>
    )
  }
}

export default Homepage