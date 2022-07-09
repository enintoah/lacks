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
    

    this.handleEmail = this.handleEmail.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleName = this.handleName.bind(this)
  }

  componentWillUnmount() {
    this.props.clearErrors()
  }

  handleEmail(e) {
    e.preventDefault()
    this.setState({email: e.target.value})
  }

  handlePassword(e){
    e.preventDefault()
    this.setState({password: e.target.value})
  }

  handleName(e) {
    e.preventDefault()
    this.setState({name: e.target.value})
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


  render() {
    return (this.props.formType === 'login') ? (
      <section className="login">
        <p>{this.props.errors}</p>
        <form>
          <label>Email: 
            <input type="text" onChange={this.handleEmail} value={this.state.email} />
          </label>
          <label>Password: 
            <input type="password" onChange={this.handlePassword} value={this.state.password} />
          </label>
          <button onClick={this.handleSubmit}>Login</button>
        </form>
        <Link to="/signup">Create a new account</Link> 
      </section>
    ) : (
      <section className="signup">
        <p>{this.props.errors}</p>
        <form>
          <label>Display Name: 
            <input type="text" onChange={this.handleName} value={this.state.name} />
          </label>
          <label>Email: 
            <input type="text" onChange={this.handleEmail} value={this.state.email} />
          </label>
          <label>Password: 
            <input type="password" onChange={this.handlePassword} value={this.state.password} />
          </label>
          <button onClick={this.handleSubmit}>Create New Account</button> 
        </form>
        <Link to="/login">Login</Link>
      </section>
    )
  }
}
// also need to add some redirects ... 
export default SessionForm