import React, { Component } from 'react';
import {Link} from 'react-router-dom'
export default class MyPolls extends Component {
  render() {
    return (
      <div>My Polls

      <div className="fixed-action-btn">
          <Link to="/mypolls/new" className="btn-floating btn-large red">
            <i className="large material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}