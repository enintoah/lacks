import React from "react";
import { Link } from "react-router-dom";

class UserDashboard extends React.Component {
  constructor(props) {
    super(props) 


    this.handleRedirect = this.handleRedirect.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.requestUserWorkspaces(this.props.currentUser.id)
  }

  handleClick(e) {
    e.preventDefault()
    this.props.logout()
  }

  handleRedirect(id) {
    return () => this.props.history.push(`/workspace/${id}`)
  }

  render() {
    const workspaces = Object.values(this.props.workspaces)
    return (
      <>
        <h2>Github</h2>
        <h2>LinkedIn</h2>
        <h1>Welcome back</h1>
        <h2>Workspaces for {this.props.currentUser.email}</h2>
        <ul>
          {workspaces.map(el => {
            return (<li key={el.id} onClick={this.handleRedirect(el.id)}>{el.name}</li>)
          })}
        </ul>
        <button onClick={this.handleClick}>Logout...</button>
      </>
    )
  }
}

export default UserDashboard