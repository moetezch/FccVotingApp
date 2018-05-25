import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import PollListAll from './PollListAll'
export default class AllPolls extends Component {

  render() {
    return (
      <div>
      <PollListAll/>
      </div>
    );
  }
}