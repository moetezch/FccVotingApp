import React, { Component } from 'react';
import PollForm from './PollForm'
import { connect } from 'react-redux'
import {submitPoll} from '../../actions/index'
import {fetchPolls} from '../../actions'
class PollEdit extends Component {
  onSubmit = (poll) => {
    console.log(this.props);
    
    
  };
  render() {
    return (
     
      <PollForm onSubmit={this.onSubmit}/>
    );
  }
}

function mapStateToProps(state,props) {
  //return {polls:state.polls} 
 return {poll: state.polls.find((poll) => poll.id === props.match.params.id)} 
}

export default connect(mapStateToProps,{fetchPolls})(PollEdit)