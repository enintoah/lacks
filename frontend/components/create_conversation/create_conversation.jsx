import React from "react";

class CreateConversation extends React.Component {
  constructor(props) {
    super(props)

    this.createConversation = this.createConversation.bind(this)
  }

  // async componentDidMount() {
  //   await this.props.requestUserWorkspaces(this.props.currentUser.id);
  //   await this.props.populateWorkspace(this.props.currentWorkspace.id)
  // }

  createConversation(e) {
    e.preventDefault();
    const id = e.target.getAttribute('value');
    if (!this.checkExistingConversations(id)) {
      this.makeNewConversation(id)
    }
  }

  makeNewConversation(id) {
    const conversation = {
      conversation: {
        first_user_id: this.props.currentUser.id, 
        second_user_id: parseInt(id), 
        workspace_id: this.props.currentWorkspace.id, 
        first_user_name: this.props.currentUser.name, 
        second_user_name: this.props.workspaceUsers[id].name, 
      }
    }
    this.props.createNewConversation(conversation).then(res => this.props.history.push(`/workspace/${this.props.currentWorkspace.id}/conversation/${res.conversation.id}`))
  }

  checkExistingConversations(id) {
    const user_id = parseInt(id)
    const conversations = Object.values(this.props.conversations)
    for (let i = 0; i < conversations.length; i++) {
      if (conversations[i].first_user_id === user_id || conversations[i].second_user_id === user_id) {
        this.props.history.push(`/workspace/${this.props.currentWorkspace.id}/conversation/${conversations[i].id}`);
        return true;
      }
    }
    return false 
  }



  render() {
    if (this.props.workspaceUsers === undefined) {
      return null 
    } else {
      console.log(this.props.currentWorkspace)
      let users = this.props.workspaceUsers
      if (users[this.props.currentUser.id]) {
        delete users[this.props.currentUser.id]
      }
      users = Object.values(users)
      return (
        <div className="create-conversation">
          <h2 className="create-conversation-header">Direct Messages</h2>
          <div className="create-conversation-users">
            {
              users.map(el => {
                return (
                  <div onClick={this.createConversation} className="create-conversation-individual-user" value={el.user_id}>
                    <div className="create-conversation-profile-pics">
                      <img value={el.user_id} className="create-conversation-actual-pic" src="https://lacks-aa-dev.s3.us-west-1.amazonaws.com/profile+picture.png"/>
                    </div>
                    <h2 value={el.user_id} >{el.name}</h2>
                  </div>
                )
              })
            }
          </div>
        </div>
      )
    }
  }
}

export default CreateConversation