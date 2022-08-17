import React from "react";
import { deleteChannelMessage } from './../../util/channel_util'
import { deleteConversationMessage } from './../../util/conversation_util'

class Message extends React.Component {
  constructor(props) {
    super(props)

    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleDelete(e) {
    e.preventDefault()
    if (this.props.formType === 'channel') {
      deleteChannelMessage(e.target.value);
    } else {
      deleteConversationMessage(e.target.value)
    }
  }

  handleEdit(e) {
    e.preventDefault()
    let textarea = {
      message: this.props.message,
      type: 'edit',
      formType: this.props.formType
    }
    this.props.receiveTextArea(textarea)
  }
  
  editAndDelete(id, messageId) {
    if (id === this.props.currentUserId) {
      return (
        <div className="edit-delete-buttons">
          <button onClick={this.handleEdit}>Edit</button>
          <button onClick={this.handleDelete} value={messageId}>Delete</button>
        </div>
      )
    }
  }

  render() {

    let author_id;
    let name;
    if (this.props.formType === "channel") {
      author_id = this.props.message.user_id
    } else {
      author_id = this.props.message.author_id
    }

    if (author_id === this.props.currentUserId) {
      name = this.props.currentUser.name
    } else {
      name = this.props.workspaceUsers[author_id].name
    }

    if (this.props.workspaceUsers == undefined) {
      return null 
    } else {
      return (
        <li className="workspace-message">
          <div className="profile-pic-container">
            <img className="profile-pic-message" src="https://lacks-aa-dev.s3.us-west-1.amazonaws.com/profile+picture.png"/>
          </div>
          <div className="actual-message">
            <h2>{name}</h2>
            <p>{this.props.message.body}</p>
          </div>
          {this.editAndDelete(author_id, this.props.message.id)}
        </li> 
      )
    }
  }
}

export default Message