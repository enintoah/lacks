import React from "react";


class ChatBox extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.requestUserWorkspaces(this.props.currentUser.id)
    this.props.populateWorkspace(this.props.match.params.workspace_id).then(() => {}, err => (this.props.history.push('/user-dashboard')))
  }

  check_conversation_name(name1, name2) {
    if (this.props.currentUser.name === name1) {
      return name2
    } else {
      return name1 
    }
  }

  render() {   
    console.log(this.props.currentChat)
    if (!this.props.currentWorkspace) {
      return null
    } else if (this.props.chatBoxType === "channel") {
      return (
        <section>
          <h2># {this.props.currentChat.name}</h2>
          <ul>
            {
            this.props.currentMessages.map(el => {
              return ( 
                <li key={el.id}>
                  <h2>{this.props.workspaceUsers[el.user_id].name}</h2>
                  <p>{el.body}</p>
                </li> 
              )
            })
            }      
          </ul>

          <textarea name="" id="" cols="30" rows="10"></textarea>
        </section>
      )
    } else {
      return (
        <section>
          <h2>{this.check_conversation_name(this.props.currentChat.first_user_name, this.props.currentChat.second_user_name)}</h2>
          <ul>
            {
            this.props.currentMessages.map(el => {
              return ( 
                <li key={el.id}>
                  <h2>{this.props.workspaceUsers[el.author_id].name}</h2>
                  <p>{el.body}</p>
                </li> 
              )
            })
            }      
          </ul>

          <textarea name="" id="" cols="30" rows="10"></textarea>
        </section>
      )
    }
  }
}

export default ChatBox