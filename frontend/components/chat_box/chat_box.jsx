import React from "react";
import TextBox from "./text_box";


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
    if (!this.props.currentMessages) {
      return null
    } else if (this.props.chatBoxType === "channel") {
      let messages = Object.values(this.props.currentMessages)
      return (
        <section>
          <h2># {this.props.currentChat.name}</h2>
          <ul>
            {
            messages.map(el => {
              return ( 
                <li key={el.id}>
                  <h2>{this.props.workspaceUsers[el.user_id].name}</h2>
                  <p>{el.body}</p>
                </li> 
              )
            })
            }      
          </ul>

          <TextBox currentUserId={this.props.currentUser.id} currentChat={this.props.currentChat} sendMessage={this.props.sendMessage} formType="channel"/> 
        </section>
      )
    } else {
      let messages = Object.values(this.props.currentMessages)
      return (
        <section>
          <h2>{this.check_conversation_name(this.props.currentChat.first_user_name, this.props.currentChat.second_user_name)}</h2>
          <ul>
            {
            messages.map(el => {
              return ( 
                <li key={el.id}>
                  <h2>{this.props.workspaceUsers[el.author_id].name}</h2>
                  <p>{el.body}</p>
                </li> 
              )
            })
            }      
          </ul>

          <TextBox currentUserId={this.props.currentUser.id} currentChat={this.props.currentChat} sendMessage={this.props.sendMessage} formType="conversation"/> 
        </section>
      )
    }
  }
}

export default ChatBox