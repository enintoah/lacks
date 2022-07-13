import React from "react";
import { Link } from "react-router-dom";
import logo from './logo_with_name.png'

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

  redirectToHome() {
    this.props.history.push('/')
  }

  loginDemo() {
    this.props.demoLogin()
  }

  render() {
    return (this.props.formType === 'login') ? (
      <section className="login">
        <img src={logo} onClick={this.redirectToHome}/>
        <h1>Sign in to Lacks</h1>
        <p>We suggest using the <strong>email address you use at work.</strong></p>
        <p>{this.props.errors}</p>
        <form>
            <input type="text" onChange={this.update('email')} value={this.state.email} placeholder="name@work-email.com"/>
            <input type="password" onChange={this.update('password')} value={this.state.password} placeholder="password"/>
          <button onClick={this.handleSubmit}>Sign In with Email</button>
        </form>
        <button onClick={this.loginDemo}>Try a Demo</button>
        <p>New to Lacks?</p>
        <Link to="/signup">Create a new account</Link> 
      </section>
    ) : (
      <section className="signup">
        <img src={logo}  onClick={this.redirectToHome}/>
        <h1>Sign Up for Lacks</h1>
        <p>We suggest using the <strong>email address you use at work.</strong></p>
        <p>{this.props.errors}</p>
        <form>
            <input type="text" onChange={this.update('email')} value={this.state.email} placeholder="name@work-email.com"/>
            <input type="password" onChange={this.update('password')} value={this.state.password} placeholder="password"/>
            <input type="text" onChange={this.update('name')} value={this.state.name} placeholder="display name"/>
          <button onClick={this.handleSubmit}>Sign Up with Email</button> 
        </form>
        <button onClick={this.loginDemo}>Try a Demo</button>
      </section>
    )
  }
}

export default SessionForm