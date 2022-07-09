import React from "react";
import { Link } from "react-router-dom";

class Greeting extends React.Component {
  constructor(props) {
    super(props) 

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    this.props.logout()
  }

  render() {
    return this.props.currentUser ? (
      <>
        <h2>hello {this.props.currentUser.name}!!!</h2>
        <button onClick={this.handleClick}>Logout...</button>
      </>
    ) : (
      <>
        <Link to="/signup">Signup</Link>
        <br />
        <Link to="/login">Login</Link>
      </>
    )
  }
}

export default Greeting