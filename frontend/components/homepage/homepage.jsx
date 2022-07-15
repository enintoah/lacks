import React from "react";
import { NavLink } from "react-router-dom";

class Homepage extends React.Component {
  constructor(props) {
    super(props)
    this.loginDemo = this.loginDemo.bind(this)
    this.signup = this.signup.bind(this)
  }

  loginDemo(e) {
    e.preventDefault()
    this.props.demoLogin()
  }

  signup(e) {
    e.preventDefault()
    this.props.history.push('/signup')
  }

  render() { 
    return (
    <div>
       <nav>
        <img src={window.logo_name} />
        <a href="https://github.com/enintoah">Github</a>
        <a href="https://www.linkedin.com/in/anthonie-lorsithong-551741232/">LinkedIn</a>
        <NavLink to="login">Sign in</NavLink>
        <button onClick={this.loginDemo}>DEMO</button>
        <button onClick={this.signup}>TRY FOR FREE</button>
      </nav>
      <section>
        <h1>Great teamwork starts with a digital HQ</h1>
        <h2>With all your people, tools, and communication in one place, you can work faster and more flexibly than ever before.</h2>
        <NavLink to="/signup">SIGN UP WITH EMAIL</NavLink>
        <button onClick={this.loginDemo}>TRY A DEMO</button>
        <h2><strong>Slack is free to try for as long as you'd like</strong></h2>
      </section>
    </div>
    )
  }
}

export default Homepage