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
      <section className="first-homepage">
        <div className="homepage-navbar">
          <div className="homepage-logo">
            <img src={window.white_logo} />
          </div>
          <div className="homepage-links">
            <a href="https://github.com/enintoah">Github</a>
            <a href="https://www.linkedin.com/in/anthonie-lorsithong-551741232/">LinkedIn</a>
          </div>
          <div className="homepage-navbar-user-auth-links">
            <NavLink to="login">Sign in</NavLink>
            <button onClick={this.loginDemo}>DEMO</button>
            <button onClick={this.signup}>TRY FOR FREE</button>
          </div>
        </div>
        <section>
          <h1>Great teamwork starts with a digital HQ</h1>
          <h2>With all your people, tools, and communication in one place, you can work faster and more flexibly than ever before.</h2>
          <NavLink to="/signup">SIGN UP WITH EMAIL</NavLink>
          <button onClick={this.loginDemo}>TRY A DEMO</button>
          <h2><strong>Slack is free to try for as long as you'd like</strong></h2>
          <video autoPlay muted loop>
            <source src="https://lacks-aa-dev.s3.us-west-1.amazonaws.com/homepage_1.mp4" type="video/mp4"/>
          </video>
            {/* Video is property of Slack */}
        </section>
      </section>
    </div>
    )
  }
}

export default Homepage