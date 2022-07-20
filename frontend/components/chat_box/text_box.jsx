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

    this.update = this.update.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)

  } 

  componentDidUpdate(prevProps) {
    if (prevProps.textarea !== this.props.textarea) {
      this.editing = false 
    }
    console.log(this.props.textarea.type)
    if (this.props.textarea.type === 'edit' && this.editing === false) {
      this.setState({body: this.props.textarea.message.body})
      this.editing = true 
    }
  }

  setEditState() {
    this.setState({body: this.props.textarea.message.body})
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
        <form>
          <textarea className="text-box" cols="30" rows="10" placeholder="Message" onChange={this.update} value={this.state.body}></textarea>
          <button onClick={this.handleCreate}>Submit Message</button>
        </form>
      )
    } else if (this.props.textarea.type === 'edit') {
      return (
        <form>
          <textarea className="text-box" cols="30" rows="10" onChange={this.update} value={this.state.body}></textarea>
          <button onClick={this.handleUpdate}>Update Message</button>
        </form>
      )
    }
  }
}

export default TextBox