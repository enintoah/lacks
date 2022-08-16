import React from "react";

class CreateConversation extends React.Component {
  constructor(props) {

  }

  createConversation(e) {
    e.preventDefault()

  }

  render() {
    users = this.props.workspaceUsers
    return (
      <div>
        <h2 className="workspace-chat-box-title">Direct Messages</h2>
        <input type="text" />
          {
            users.map(el => {
              return (
                <div>
                  
                </div>
              )
            })
          }
      </div>
    )
  }
}

export default CreateConversation