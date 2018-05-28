import React, { Component } from 'react'
import AddOptionForm from './AddOptionForm'
import { connect } from 'react-redux'
import { updatePoll } from '../../actions'
let pollID
class PollEdit extends Component {
  componentDidMount() {
    pollID = this.props.match.params.id

  }
  onSubmit = (poll) => {
    this.props.updatePoll(poll)
    this.props.history.push('/polls')
  
  };
  render() {
    return (
      <AddOptionForm onSubmit={this.onSubmit} {...this.props} />
    );
  }
}

function mapStateToProps(state, props) {
  return { poll: state.polls.find((poll) => poll._id === props.match.params.id) }
}

const mapDispatchToProps = (dispatch) => ({
  updatePoll: (poll) => dispatch(updatePoll(pollID, poll)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PollEdit)