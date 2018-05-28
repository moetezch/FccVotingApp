import React, { Component } from 'react'
import FlipMove from 'react-flip-move'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPolls } from '../../actions'

class PollList extends Component {
  componentDidMount() {
    this.props.fetchPolls()
  }

  renderPolls() {
    return this.props.polls.reverse().map((poll, index) => {

      return <div className="card cyan darken-1" key={poll._id}>

        <Link to={`/polls/${poll._id}`} className="card-content white-text">
          <span className="card-title center">{poll.title}</span>
        </Link>
      </div>
    })
  }
  render() {
    return (

      <div>
        <FlipMove maintainContainerHeight={true} duration={750} easing="ease-out">
          {this.renderPolls()}
        </FlipMove>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { polls: state.polls }
}

export default connect(mapStateToProps, { fetchPolls })(PollList)