import React, { Component } from 'react';
import { BrowserRouter, Route,Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
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
  renderContent() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          this.props.auth ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
    return(
    
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/polls" component={AllPolls} />
        <Route exact path="/polls/:id" component={ShowPoll} />
        <PrivateRoute exact path="/mypolls" component={MyPolls} />
        <PrivateRoute  path="/mypolls/new" component={PollNew} />
        <Route path="/mypolls/edit/:id" component={PollEdit} />
      </div>
    </BrowserRouter>
 

    )
  }
  render() {
    return (
      <div className="container">

        {this.renderContent()}
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}


export default connect(mapStateToProps, actions)(App)