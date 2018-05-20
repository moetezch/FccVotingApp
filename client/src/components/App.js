import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../actions'

import Header from './Header'
import Landing from './Landing'
const Polls = () => <h2>Polls</h2>
const MyPolls = () => <h2>MyPolls</h2>
const PollNew = () => <h2>PollNew</h2>


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