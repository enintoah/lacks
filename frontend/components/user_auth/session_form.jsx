import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "", 
      password: "",
      name: "" 
    }
    
    this.loginDemo = this.loginDemo.bind(this)
    this.redirectToHome = this.redirectToHome.bind(this)
    this.update = this.update.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillUnmount() {
    this.props.clearErrors()
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    const user = {
      user: {
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      }
    }
    this.props.processForm(user);
    this.setState({
      email: "",
      password: "",
      name: ""
    })
  }

  redirectToHome(e) {
    e.preventDefault()
    this.props.history.push('/')
  }

  loginDemo(e) {
    e.preventDefault()
    this.props.demoLogin()
  }

  render() {
    return (this.props.formType === 'login') ? (
      <section className="login">
        <header className="user-auth-header">
          <div className="user-auth-top-right">
          </div>
          <span className="user-auth-logo">
            <div></div>
            <div>
              <img className="user-auth-photo" src={window.logo_name} onClick={this.redirectToHome}/>
            </div>
            <div className="user-auth-links">
              <p>New to Lacks?</p>
              <Link to="/signup">Create an account</Link> 
            </div> 
          </span>
        </header>
        <div className="session">
          <h1>Sign in to Lacks</h1>
          <p>We suggest using the&nbsp;<strong className="email-at-work">email address you use at work.</strong></p>
          <p className="login-errors">{this.props.errors}</p>
          <form className="user-auth-form">
            <div className="user-auth-input">
              <input type="text" onChange={this.update('email')} value={this.state.email} placeholder="name@work-email.com"/>
            </div>
              <br />
            <div className="user-auth-input">
              <input type="password" onChange={this.update('password')} value={this.state.password} placeholder="password"/>
            </div>
              <br />
          </form>
          <div className="user-auth-buttons-container">
            <div className="user-auth-buttons">
              <button onClick={this.handleSubmit}>Sign In with Email</button>
            </div>
            <br />
            <div>
              <strong className="user-auth-or">OR</strong>
            </div>
            <br />
            <div className="user-auth-buttons">
              <button onClick={this.loginDemo}>Try a Demo</button>
            </div>
          </div>
        </div>
      </section>
    ) : (
      <section className="signup">
        <div className="session">
          <div className="signup-photo-container">
            <img src={window.logo_name}  onClick={this.redirectToHome}/>
          </div>
          <h1>Sign Up for Lacks</h1>
          <p>We suggest using the&nbsp;<label className="email-at-work">email address you use at work.</label></p>
          <p>{this.props.errors}</p>
          <form className="user-auth-form">
            <div className="user-auth-input">
              <input type="text" onChange={this.update('email')} value={this.state.email} placeholder="name@work-email.com"/>
            </div>
              <br />
            <div className="user-auth-input">
              <input type="password" onChange={this.update('password')} value={this.state.password} placeholder="password"/>
            </div>
              <br />
            <div className="user-auth-input">
              <input type="text" onChange={this.update('name')} value={this.state.name} placeholder="display name"/>
            </div>
              <br />
          </form>
          <div className="user-auth-buttons-container">
            <div className="user-auth-buttons">
              <button onClick={this.handleSubmit}>Sign Up with Email</button> 
            </div>
            <br />
            <div>
              <strong className="user-auth-or">OR</strong>
            </div>
            <br />
            <div className="user-auth-buttons">
              <button onClick={this.loginDemo}>Try a Demo</button>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default SessionForm