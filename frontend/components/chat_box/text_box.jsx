import React from "react";

class TextBox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      body: "",
    }

    this.update = this.update.bind(this)
    this.handleClick = this.handleClick.bind(this)
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

  handleClick(e) {
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
  }

  render() {
    return (
      <form>
        <textarea className="text-box" id="" cols="30" rows="10" placeholder="Message" onChange={this.update} value={this.state.body}></textarea>
        <button onClick={this.handleClick}>Submit Message</button>
      </form>
    )
  }
}

export default TextBox