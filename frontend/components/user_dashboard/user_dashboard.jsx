import React from "react";


class UserDashboard extends React.Component {
  constructor(props) {
    super(props) 


    this.handleRedirect = this.handleRedirect.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleRedirectLinkedIn = this.handleRedirect.bind(this)
  }

  componentDidMount() {
    this.props.requestUserWorkspaces(this.props.currentUser.id)
  }

  handleClick(e) {
    e.preventDefault()
    this.props.logout()
  }

  handleRedirect(id) {
    return () => { 
      this.props.history.push(`/workspace/${id}`);
    }
  }

  handleRedirectLinkedIn(e) {
    e.preventDefault()
    // window.location.href = ("https://www.linkedin.com/in/anthonie-lorsithong-551741232/");
    this.props.history.push('https://www.linkedin.com/in/anthonie-lorsithong-551741232/')
  }

  render() {
    const workspaces = Object.values(this.props.workspaces)
    return (
      <section className="user-dashboard">
        <div className="homepage-navbar">
          <div className="left-side-homepage">
            <div className="homepage-logo">
              <img src={window.white_logo} />
            </div>
            <div className="homepage-links">
              <a target="_blank" href="https://github.com/enintoah">Github</a>
              <a target="_blank" href="https://www.linkedin.com/in/anthonie-lorsithong-551741232/">LinkedIn</a>
              <a target="_blank" href="https://www.appacademy.io/">App Academy</a>
              <a target="_blank" href="https://slack.com/">Slack</a>
            </div>
          </div>
          <div className="homepage-navbar-user-auth-links">
            <div className="navbar-buttons">
              <button className="homepage-try-for-free" onClick={this.handleClick}>LOGOUT</button>
            </div>
          </div>
        </div>
        <div className="user-dashboard-body">
          <div className="user-dashboard-welcome-back">
            <div className="user-dashboard-waving-hand">
              <img src="https://lacks-aa-dev.s3.us-west-1.amazonaws.com/waving-hand.gif" />
            </div>
            <h1>Welcome back</h1>
          </div>
          <div className="user-dashboard-workspaces">
            <h2>Workspaces for {this.props.currentUser.email}</h2>
            <ul>
              {workspaces.map(el => {
                return (
                  
                  <li key={el.id}>
                    <div className="user-dashboard-workspace">
                      <div className="user-dashboard-inner-workspace">
                        <h2>{el.name} </h2>
                        <strong>{el.current_size} members</strong>
                      </div>
                      <button onClick={this.handleRedirect(el.id)}>LAUNCH LACKS</button> 
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="user-dashboard-bottom">
            <div className="user-dashboard-bottom-part">
              <img src="https://lacks-aa-dev.s3.us-west-1.amazonaws.com/woman_with_laptop.png"/>
              <h2>Start fresh and hire a new member for your team</h2>
            </div>
            <a target="_blank" href="https://www.linkedin.com/in/anthonie-lorsithong-551741232/"><button className="user-dashboard-find-engineer">FIND&nbsp;A&nbsp;NEW&nbsp;ENGINEER</button></a>
          </div>
          <div className="user-dashboard-footer-top">
            <p className="user-dashboard-footer">Not seeing performance improvements? &nbsp;&nbsp;<a target="_blank" href="https://www.linkedin.com/in/anthonie-lorsithong-551741232/">Try a new hire&nbsp;&nbsp;<i className="fa-solid fa-arrow-right"></i></a></p>
          </div>
        </div>
      </section>
    )
  }
}

export default UserDashboard