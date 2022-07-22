import React from "react";
import { updateChannelMessage } from './../../util/channel_util'
import { updateConversationMessage } from './../../util/conversation_util'

class TextBox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        body: "",
    }
    
    this.editing = false
    
    this.check_chat = this.check_chat.bind(this)
    this.update = this.update.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)

  } 

  componentDidUpdate(prevProps) {
    if (prevProps.textarea !== this.props.textarea) {
      this.editing = false 
    }
    if (this.props.textarea.type === 'edit' && this.editing === false) {
      this.setState({body: this.props.textarea.message.body})
      this.editing = true 
    }
  }

  check_chat() {
    if (this.props.formType === 'channel') {
      return ` #${this.props.currentChat.name}`
    } else {
      if (this.props.currentChat.first_user_id === this.props.currentUserId) {
        return this.props.currentChat.second_user_name
      } else {
        return this.props.currentChat.first_user_name
      }
    }
  }

  check_recipient() {
    if (this.props.currentChat.first_user_id === this.props.currentUserId) {
      return this.props.currentChat.second_user_id
    } else {
      return this.props.currentChat.first_user_id
    }
  }

  update(e) {
    e.preventDefault()
    this.setState({body: e.currentTarget.value})
  }

  handleCreate(e) {
    e.preventDefault()
    const message = (this.props.formType === "channel") ? { message: {
      channel_id: this.props.currentChat.id,
      user_id: this.props.currentUserId,
      body: this.state.body
    }} : { message: {
      author_id: this.props.currentUserId,
      conversation_id: this.props.currentChat.id,
      body: this.state.body, 
      recipient_id: this.check_recipient()
    }}

    this.props.sendMessage(message)
    this.setState({body: ""})
    this.editing = false 
  }

  handleUpdate(e) {
    e.preventDefault()
    if (this.props.textarea.formType === 'channel') {
      updateChannelMessage(this.props.textarea.message.id, {message: {body: this.state.body}})
    } else {
      updateConversationMessage(this.props.textarea.message.id, {message: {body: this.state.body}})
    }
    this.setState({body: ""})
    this.props.clearTextArea()
    this.editing = false
  } 

  render() {
    if (!this.props.textarea.type) {
      return null
    } else if (this.props.textarea.type === 'create') {
      return (
        <div className="textarea-container">
          <textarea className="text-box" cols="30" rows="10" placeholder={`Message ${this.check_chat()}`} onChange={this.update} value={this.state.body}></textarea>
          <button className="text-area-button" onClick={this.handleCreate}>Send</button>
        </div>
      )
    } else if (this.props.textarea.type === 'edit') {
      return (
        <div className="textarea-container">
          <textarea className="text-box" cols="30" rows="10" onChange={this.update} value={this.state.body}></textarea>
          <button className="text-area-button" onClick={this.handleUpdate}>Send</button>
        </div>
      )
    }
  }
}

export default TextBox