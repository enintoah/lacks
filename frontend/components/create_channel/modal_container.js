import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import Modal from "./modal";
import { createNewChannel } from "../../actions/channel_actions";


const matchStateToProps = (state, ownProps) => {
  return {
    modal: state.modal,
    currentWorkspace: state.entities.currentWorkspace,
  }
}

const matchDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    createNewChannel: (channel) => dispatch(createNewChannel(channel))
  }
}

export default connect(matchStateToProps, matchDispatchToProps)(Modal)