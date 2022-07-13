import React from "react";
import ChannelContainer from "../chat_box/channel_container";
import ConversationContainer from "../chat_box/conversation_container";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";


class Workspace extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.requestUserWorkspaces(this.props.currentUser.id)
    this.props.populateWorkspace(this.props.match.params.workspace_id).then(() => {}, err => (this.props.history.push('/user-dashboard')))
  }
  
  componentWillUnmount() {
    this.props.clearWorkspace()
  }

  check_conversation_name(name1, name2) {
    if (this.props.currentUser.name === name1) {
      return name2
    } else {
      return name1 
    }
  }

  render() {
    if (!this.props.currentWorkspace) {
      return null
    } else {
    return (
      <div>
        <h2>{this.props.currentWorkspace.name}</h2>
        <h2>Channels</h2>
        <ul>
          {this.props.channels.map((el) => {
            return (
              <li key={el.id}>
              <Link to={`/workspace/${this.props.match.params.workspace_id}/channel/${el.id}`}>
                <p>{el.name}</p>
              </Link>
            </li>
            )
          })}
        </ul>
        <h2>Direct Messages</h2>
        <ul>  
          {this.props.conversations.map((el) => {
            return (
              <li key={el.id}>
                <Link to={`/workspace/${this.props.match.params.workspace_id}/conversation/${el.id}`}>
                  <p>{this.check_conversation_name(el.first_user_name, el.second_user_name)}</p>
                </Link>
              </li>
            )
          })}
        </ul>


        <Route path="/workspace/:workspace_id/channel/:channel_id" component={ChannelContainer} />
        <Route path="/workspace/:workspace_id/conversation/:conversation_id" component={ConversationContainer} />


      </div>
    )
        }
  }
}

export default Workspace