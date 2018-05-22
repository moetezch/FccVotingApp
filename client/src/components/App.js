import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../actions'

import Header from './Header'
import Landing from './Landing'
import MyPolls from './polls/MyPolls'
import PollNew from './polls/PollNew'
import Polls from './polls/Polls'




class App extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route path="/polls" component={Polls} />
            <Route exact path="/mypolls" component={MyPolls} />
            <Route path="/mypolls/new" component={PollNew} />
          </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default connect(null,actions) (App)