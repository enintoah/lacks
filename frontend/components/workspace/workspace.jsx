import React from "react";
import ChannelContainer from "../chat_box/channel_container";
import ConversationContainer from "../chat_box/conversation_container";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import consumer from '../../consumer'


class Workspace extends React.Component {
  constructor(props) {
    super(props)

    this.subscriptions = []
  }

  async componentDidMount() {
    await this.props.requestUserWorkspaces(this.props.currentUser.id);
    await this.props.populateWorkspace(this.props.currentWorkspace.id)
    this.enterRoom()
    this.enterFirstChannel()
    // this.props.history.push(`/workspace/${this.props.match.params.workspace_id}/channel/${this.props.firstChannel}`);
  }

  componentWillUnmount() {
    this.props.clearWorkspace();
    this.unsubscribe();  
  }

  enterRoom() {
    this.props.channels.forEach(el => {
      this.subscriptions.push(this.createChannelSubs(el.id))
    });
    this.props.conversations.forEach(el => {
      this.subscriptions.push(this.createConversationSubs(el.id))
    });
  }

  createChannelSubs(id) {
    return consumer.subscriptions.create(
      {channel: 'ChannelsChannel', id: id},
      {
        received: ({message, type}) => {
          console.log(type)
          switch (type) {
            case 'RECEIVE_MESSAGE':
              this.props.receiveChannelMessage(message);
              return; 
            case 'DESTROY_MESSAGE':
              this.props.clearChannelMessage(message)
              return;
            default:
              break;
          }
        }
      }
    )
  }

  createConversationSubs(id) {
    return consumer.subscriptions.create(
      {channel: 'ConversationsChannel', id: id},
      {
        received: ({message, type}) => {

          switch (type) {
            case 'RECEIVE_MESSAGE':
              this.props.receiveConversationMessage(message);
              return 
            case 'DESTROY_MESSAGE':
              this.props.clearConversationMessage(message);
            default:
              break;
          }
        }
      }
    )
  }

  unsubscribe() {
    this.subscriptions.forEach(el => {
      el.unsubscribe();
    })
  }

  check_conversation_name(name1, name2) {
    if (this.props.currentUser.name === name1) {
      return name2
    } else {
      return name1 
    }
  }

  enterFirstChannel() {
    this.props.history.push(`/workspace/${this.props.currentWorkspace.id}/channel/${this.props.firstChannel}`);
  }

  render() {
    if (!this.props.firstChannel) {
      return null
    } else {
    return (
      <div className="workspace">
        <div className="workspace-topbar">
          <input type="text" placeholder="Search"/>
        </div>
        <div className="workspace-body">
          <div className="workspace-sidebar">
            <h1>{this.props.currentWorkspace.name}</h1>
            <h2>Channels</h2>
            <ul>
              {this.props.channels.map((el) => {
                return (
                  <li key={el.id}>
                  <NavLink className="navlinks" to={`/workspace/${this.props.match.params.workspace_id}/channel/${el.id}`}>
                    <p className="workspace-channels-conversations">{el.name}</p>
                  </NavLink>
                </li>
                )
              })}
            </ul>
            <h2>Direct Messages</h2>
            <ul>  
              {this.props.conversations.map((el) => {
                return (
                  <li key={el.id}>
                    <NavLink className="navlinks" to={`/workspace/${this.props.match.params.workspace_id}/conversation/${el.id}`}>
                      <p className="workspace-channels-conversations">{this.check_conversation_name(el.first_user_name, el.second_user_name)}</p>
                    </NavLink>
                  </li>
                )
              })}
            </ul>
          </div>
          <Route path="/workspace/:workspace_id/channel/:channel_id" component={ChannelContainer} />
          <Route path="/workspace/:workspace_id/conversation/:conversation_id" component={ConversationContainer} />
        </div>


      </div>
    )
        }
  }
}

export default Workspace