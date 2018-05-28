import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return
      case false:
        return [
          <li key="1">
            <Link to="/polls">Polls</Link>
          </li>,
          <li key="2">
            <a href="/auth/google">Login with Google</a>
          </li>,
          <li key="3">
            <a href="/auth/twitter">Login with Twitter</a>
          </li>,
          <li key="4">
            <a href="/auth/github">Login with Github</a>
          </li>
        ]
      default:
        return [
          <li key="1">
            <Link to="/mypolls">My polls</Link>
          </li>,
          <li key="2">
            <Link to="/polls">Polls</Link>
          </li>,
          <li key="3">
            <a href="/api/logout">Logout</a>
          </li>
        ]
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper blue darken-1">
          <Link
            to={this.props.auth ? "/mypolls" : "/"}
            className="left brand-logo"
          >
            Voting App
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header)
