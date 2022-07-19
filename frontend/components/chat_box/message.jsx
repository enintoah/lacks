import React from "react";
import { deleteChannelMessage } from './../../util/channel_util'
import { deleteConversationMessage } from './../../util/conversation_util'

class Message extends React.Component {
  constructor(props) {
    super(props)

    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(e) {
    e.preventDefault()
    if (this.props.formType === 'channel') {
      deleteChannelMessage(e.target.value);
    } else {
      deleteConversationMessage(e.target.value)
    }
  }
  
  editAndDelete(id, messageId) {
    if (id === this.props.currentUserId) {
      return (
        <div>
          <button value={messageId}>Edit</button>
          <button onClick={this.handleDelete} value={messageId}>Delete</button>
        </div>
      )
    }
  }

  render() {
    let author_id;
    if (this.props.formType === "channel") {
      author_id = this.props.message.user_id
    } else {
      author_id = this.props.message.author_id
    }
    return (
      <li className="workspace-message">
        <h2>{this.props.workspaceUsers[author_id].name}</h2>
        <p>{this.props.message.body}</p>
        {this.editAndDelete(author_id, this.props.message.id)}
      </li> 
    )
  }
}

export default Message