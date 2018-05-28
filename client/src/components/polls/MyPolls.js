import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PollList from './PollList'
export default class MyPolls extends Component {

  render() {
    return (
      <div>
        <PollList />
        <div className="fixed-action-btn">
          <Link to="/mypolls/new" className="btn-floating btn-large red" title="Add a new Poll">
            <i className="large material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}