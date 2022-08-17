import React from "react";
import { withRouter } from "react-router-dom";

class Modal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "", 
    }

    this.update = this.update.bind(this)
    this.createChannel = this.createChannel.bind(this)
  }

  update(e) {
    e.preventDefault();
    this.setState({name: e.currentTarget.value})
  }

  createChannel(e) {
    e.preventDefault()
    const workspace = Object.values(this.props.currentWorkspace)[0]
    const channel = {
      channel: {
        name: this.state.name, 
        workspace_id: workspace.id, 
      }
    }
    this.props.createNewChannel(channel)
      .then(res => {
        this.props.closeModal();
        this.props.history.push(`/workspace/${workspace.id}/channel/${res.channel.id}`)
      })
  }

  render() {
    if (!this.props.modal) {
      return null
    } else {
      return (
      <div className="modal-background" onClick={this.props.closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          <div className="create-channel-overall">
            <div className="create-channel-inner">
              <h1>Create a channel</h1>
              <h2>Channels are where your team communicates. They're best when organized around a topic — #marketing, for example.</h2>
              <h3>Name</h3>
              <input className="channel-name-input" onChange={this.update} type="text" placeholder="e.g. plan-budget"/>
              <br />
              <h3>Description <strong className="create-channel-optional">(optional)</strong></h3>
              <input type="text" />
              <br />
              <div className="span-create-channel">
                <span>What's this channel about?</span>
              </div>
              <br />
              <div className="create-channel-button">
                <button onClick={this.createChannel}>Create</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    }
  }
}

export default withRouter(Modal)