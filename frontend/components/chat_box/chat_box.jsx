import React from "react";
import TextBox from "./text_box";
import Message from "./message";


class ChatBox extends React.Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    await this.props.requestUserWorkspaces(this.props.currentUser.id)
    await this.props.populateWorkspace(this.props.match.params.workspace_id).then(() => {}, err => (this.props.history.push('/user-dashboard')))
    this.highlightCurrent()
  }

  componentDidUpdate() {
    this.highlightCurrent()
  }

  componentWillUnmount() {
    this.unhighlightChat()
  }

  highlightCurrent() {
    let oldEle = document.getElementsByClassName('selected-chat')[0];
    let newEle;
    if (this.props.chatBoxType === 'channel') {
      newEle = document.getElementsByClassName(`channel${this.props.match.params.channel_id}`)[0]
    } else if (this.props.chatBoxType === 'conversation') {
      newEle = document.getElementsByClassName(`conversation${this.props.match.params.conversation_id}`)[0]
    }
    
    if (oldEle !== undefined) {
      oldEle.classList.toggle('chats');
      oldEle.classList.toggle('selected-chat')
    }

    if (newEle !== undefined) {
      newEle.classList.toggle('chats')
      newEle.classList.toggle('selected-chat')
    }
  }

  unhighlightChat() {
      let ele = document.getElementsByClassName('selected-chat')[0]
      if (ele !== undefined) {
        ele.classList.toggle('chats')
        ele.classList.toggle('selected-chat')
      }
  }

  // highlightChat() {
  //   if (this.props.chatBoxType === undefined) {
  //     return 
  //   } else if (this.props.chatBoxType === 'channel') {
  //     let ele = document.getElementsByClassName(`channel${this.props.match.params.channel_id}`)[0]
  //     ele.classList.toggle('chats')
  //     ele.classList.toggle('selected-chat')
  //     return 
  //   } else if (this.props.chatBoxType === 'conversation') {
  //     let ele = document.getElementsByClassName(`conversation${this.props.match.params.conversation_id}`)[0]
  //     ele.classList.toggle('chats')
  //     ele.classList.toggle('selected-chat')
  //     return 
  //   }
  // }

  check_conversation_name(name1, name2) {
    if (this.props.currentUser.name === name1) {
      return name2
    } else {
      return name1 
    }
  }

  render() {   
    if (this.props.currentChat === undefined || this.props.workspaceUsers === undefined) {
      return null 
    } else if (this.props.currentMessages === undefined && this.props.chatBoxType === "channel") {
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
                    <Message currentUser={this.props.currentUser} receiveTextArea={this.props.receiveTextArea} key={el.id} formType="channel" message={el} workspaceUsers={this.props.workspaceUsers} currentUserId={this.props.currentUser.id}/> 
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
                  <Message currentUser={this.props.currentUser} receiveTextArea={this.props.receiveTextArea} key={el.id} message={el} formType="conversation" workspaceUsers={this.props.workspaceUsers} currentUserId={this.props.currentUser.id}/> 
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