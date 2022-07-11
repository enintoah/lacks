import React from "react";


class Workspace extends React.Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    await this.props.requestUserWorkspaces(this.props.currentUser.id) 
    this.authenticate()
    this.props.populateWorkspace(this.props.match.params.workspace_id)
  }
  
  componentWillUnmount() {
    this.props.clearWorkspace()
  }

  authenticate() {
    if (!this.props.usersWorkspaces.includes(this.props.match.params.workspace_id)) {
      this.props.history.push('/user-dashboard')
    }
  }

  render() {
    return (
      <>
        <h2>IT WORKSSSSSS!!!</h2>
      </>
    )
  }
}

export default Workspace