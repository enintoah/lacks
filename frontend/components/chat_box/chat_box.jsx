import React from "react";
import TextBox from "./text_box";
import Message from "./message";


class ChatBox extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestUserWorkspaces(this.props.currentUser.id)
    this.props.populateWorkspace(this.props.match.params.workspace_id).then(() => {}, err => (this.props.history.push('/user-dashboard')))
    this.highlightChat()
  }

  componentDidUpdate() {
    this.unhighlightChat()
    this.highlightChat()
  }

  componentWillUnmount() {
    this.unhighlightChat()
  }

  unhighlightChat() {
    let ele = document.getElementsByClassName('selected-chat')[0]
    ele.classList.toggle('chats')
    ele.classList.toggle('selected-chat')
  }

  highlightChat() {
    if (this.props.chatBoxType === 'channel') {
      // console.log('channel', this.props.match.params.channel_id)
      let ele = document.getElementsByClassName(`channel${this.props.match.params.channel_id}`)[0]
      ele.classList.toggle('chats')
      ele.classList.toggle('selected-chat')
      return 
    } else {
      let ele = document.getElementsByClassName(`conversation${this.props.match.params.conversation_id}`)[0]
      // console.log(ele)
      ele.classList.toggle('chats')
      ele.classList.toggle('selected-chat')
      return 
    }
  }

  check_conversation_name(name1, name2) {
    if (this.props.currentUser.name === name1) {
      return name2
    } else {
      return name1 
    }
  }

  render() {   
    if (this.props.currentMessages === undefined && this.props.chatBoxType === "channel") {
      return (
        <section className="workspace-chat-box">
          <h2 className="workspace-chat-box-title"># {this.props.currentChat.name}</h2>
          <div>
            <ul className="workspace-messages"> 
            </ul>
              <TextBox clearTextArea={this.props.clearTextArea} textarea={this.props.textarea} currentUserId={this.props.currentUser.id} currentChat={this.props.currentChat} sendMessage={this.props.sendMessage} formType="channel"/> 
          </div>
        </section>
      )
      } else if (this.props.chatBoxType === "conversation" && this.props.currentMessages === undefined) {
        let messages = Object.values(this.props.currentMessages).reverse()
        return (
          <section className="workspace-chat-box">
            <div className="chat-box-header">
              <img className ="heading-profile-pic" src="https://lacks-aa-dev.s3.us-west-1.amazonaws.com/profile+picture.png" />
              <h2 className="workspace-chat-box-title-conversations">{this.check_conversation_name(this.props.currentChat.first_user_name, this.props.currentChat.second_user_name)}</h2>
            </div>
              <ul className="workspace-messages">  
              </ul>
              <TextBox clearTextArea={this.props.clearTextArea} textarea={this.props.textarea} currentUserId={this.props.currentUser.id} currentChat={this.props.currentChat} sendMessage={this.props.sendMessage} formType="conversation"/> 
          </section>
        )
      } else if (this.props.chatBoxType === "channel") {
      let messages = Object.values(this.props.currentMessages).reverse()
      return (
        <section className="workspace-chat-box">
          <h2 className="workspace-chat-box-title"># {this.props.currentChat.name}</h2>
          <div>
            <ul className="workspace-messages">
              {
                messages.map(el => {
                  return ( 
                    <Message receiveTextArea={this.props.receiveTextArea} key={el.id} formType="channel" message={el} workspaceUsers={this.props.workspaceUsers} currentUserId={this.props.currentUser.id}/> 
                  )
                })
              }      
            </ul>
              <TextBox clearTextArea={this.props.clearTextArea} textarea={this.props.textarea} currentUserId={this.props.currentUser.id} currentChat={this.props.currentChat} sendMessage={this.props.sendMessage} formType="channel"/> 
          </div>
        </section>
      )
    } else {
      let messages = Object.values(this.props.currentMessages).reverse()
      return (
        <section className="workspace-chat-box">
          <div className="chat-box-header">
            <img className ="heading-profile-pic" src="https://lacks-aa-dev.s3.us-west-1.amazonaws.com/profile+picture.png" />
            <h2 className="workspace-chat-box-title-conversations">{this.check_conversation_name(this.props.currentChat.first_user_name, this.props.currentChat.second_user_name)}</h2>
          </div>
            <ul className="workspace-messages">
              {
              messages.map(el => {
                return ( 
                  <Message receiveTextArea={this.props.receiveTextArea} key={el.id} message={el} formType="conversation" workspaceUsers={this.props.workspaceUsers} currentUserId={this.props.currentUser.id}/> 
                )
              })
              }      
            </ul>
            <TextBox clearTextArea={this.props.clearTextArea} textarea={this.props.textarea} currentUserId={this.props.currentUser.id} currentChat={this.props.currentChat} sendMessage={this.props.sendMessage} formType="conversation"/> 
        </section>
      )
    }
  }
}

export default ChatBox