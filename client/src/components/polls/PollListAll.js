import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {fetchAllPolls} from '../../actions'

 class PollListAll extends Component {
   componentDidMount() {
     this.props.fetchAllPolls()
   }
  
   renderPolls(){
    return this.props.polls.reverse().map((poll, index)=>{
 
        return <div className="card blue-grey " key={poll._id}>

            <Link to={`/polls/${poll._id}`} className="card-content white-text">
              <span className="card-title center">{poll.title}</span>
              </Link>
            </div>
    })
} 
  render() {
    return (
      <div>{this.renderPolls()} </div>
    );
  }
}
function mapStateToProps(state) {
  return {polls:state.polls} 
}

export default connect(mapStateToProps,{fetchAllPolls})(PollListAll)