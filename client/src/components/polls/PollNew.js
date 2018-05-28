import React, { Component } from 'react'
import PollForm from './PollForm'
import { connect } from 'react-redux'
import { submitPoll } from '../../actions/index'


class PollNew extends Component {
  onSubmit = (poll) => {

    this.props.submitPoll(poll);
    this.props.history.push('/mypolls');

  };
  render() {
    return (
      <div>
        <PollForm onSubmit={this.onSubmit} />
      </div>

    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  submitPoll: (poll) => dispatch(submitPoll(poll))
});

export default connect(undefined, mapDispatchToProps)(PollNew);