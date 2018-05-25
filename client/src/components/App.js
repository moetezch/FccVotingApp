import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../actions'

import Header from './Header'
import Landing from './Landing'
import MyPolls from './polls/MyPolls'
import PollNew from './polls/PollNew'
import PollEdit from './polls/PollEdit'
import AllPolls from './polls/AllPolls'
import ShowPoll from './polls/ShowPoll'



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
            <Route exact path="/polls" component={AllPolls} />
            <Route exact path="/polls/:id" component={ShowPoll} />
            <Route exact path="/mypolls" component={MyPolls} />
            <Route path="/mypolls/new" component={PollNew} />
            <Route path="/mypolls/edit/:id" component={PollEdit} />
          </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default connect(null,actions) (App)