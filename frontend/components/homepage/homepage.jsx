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
          <div className="left-side-homepage">
            <div className="homepage-logo">
              <img src={window.white_logo} />
            </div>
            <div className="homepage-links">
              <a href="https://github.com/enintoah">Github</a>
              <a href="https://www.linkedin.com/in/anthonie-lorsithong-551741232/">LinkedIn</a>
              <a href="https://www.appacademy.io/">App Academy</a>
              <a href="https://slack.com/">Slack</a>
            </div>
          </div>
          <div className="homepage-navbar-user-auth-links">
            <NavLink to="login">Sign in</NavLink>
            <div className="navbar-buttons">
              <button  className="homepage-demo-button" onClick={this.loginDemo}>DEMO USER</button>
              <button className="homepage-try-for-free" onClick={this.signup}>TRY FOR FREE</button>
            </div>
          </div>
        </div>
        <section className="first-homepage-content">
          <div className="first-homepage-content-text">
            <h1>Great teamwork starts with a <strong className="digital-HQ">digital HQ</strong></h1>
            <h2>With all your people, tools, and communication in one place, you can work faster and more flexibly than ever before.</h2>
            <button className="demo-text-homepage-button" onClick={this.loginDemo}>TRY A DEMO</button>
            <button className="text-homepage-button" onClick={this.signup}>SIGN UP WITH EMAIL</button>
            <h3><strong>Slack is free to try for as long as you'd like</strong></h3>
          </div>
          <div className="video-1">
            <video autoPlay muted loop>
              <source src="https://lacks-aa-dev.s3.us-west-1.amazonaws.com/homepage-1-video.webm" type="video/mp4"/>
            </video>
          </div>
            {/* Video is property of Slack */}
        </section>
      </section>
    </div>
    )
  }
}

export default Homepage