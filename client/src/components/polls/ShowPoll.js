import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../actions/index'
import { TwitterShareButton, TwitterIcon } from 'react-share'
import { Doughnut } from 'react-chartjs-2';

class ShowPoll extends Component {
  componentDidMount() {
    this.props.fetchAllPolls()
  }

  onRemove = () => {
    this.props.deletePoll(this.props.poll._id)
    this.props.history.push('/mypolls');
  }
  renderPoll() {
    let UserAuthButtons

    if (this.props.auth && this.props.auth._id === this.props.poll._user) {
      UserAuthButtons = (

        <button className="btn-floating btn-large red right"
          onClick={() => { if (window.confirm('Are you sure you wish to delete this poll?')) this.onRemove() }}
          title="Delete Poll">
          <i className="large material-icons">delete</i>
        </button>

      )
    }

    const backgroundColor = []
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    for (let i = 0; i < this.props.poll.options.length; i++) {
      backgroundColor.push(getRandomColor())
    }

    const optionName = this.props.poll.options.map((option) => option.name)
    const optionVotes = this.props.poll.options.map((option) => option.votes)

    const data = {
      labels: optionName,
      datasets: [{
        data: optionVotes,
        backgroundColor
      }]
    };

    const options = this.props.poll.options.map((option) => {
      return (

        <li key={option._id} style={{ padding: "30px 20px" }} className="collection-item" >{option.name}  votes:{option.votes}<button title="Vote" className="btn right" onClick={
          () => {
            this.props.updateVote(option._id)
            this.props.fetchAllPolls()
            alert("Your vote has been submitted")
          }
        }><i className="material-icons small">done</i></button></li>
      )
    })

    return <div>
      <h3>{this.props.poll.title}</h3>

      <div className="row">
        <div className="col s6">
          <p>I would like to vote for :</p>
          <div >
            <ul className="collection">
              {options}
            </ul>
          </div>
        </div>
        <div className="col s6">
          <Doughnut data={data} width={450}
            height={450}
            options={{
              maintainAspectRatio: false
            }} />
        </div>
      </div>
      <div>

        <TwitterShareButton
          url={window.location.href}
          quote="Poll"
          className="btn-floating btn-large left">
          <TwitterIcon
            size={56}
            round />
        </TwitterShareButton>
        <div>
          {UserAuthButtons}
          <Link to={`/mypolls/edit/${this.props.poll._id}`} title="Add another Option" className="btn-floating btn-large blue right" style={{ marginRight: 20 }}>
            <i className="large material-icons">playlist_add</i>
          </Link>
        </div>
      </div>
    </div>

  }
  render() {
    return (
      typeof this.props.poll === 'undefined'
        ? null :
        <div>{this.renderPoll()}</div>
    );
  }
}
const mapStateToProps = (state, props) => ({
  poll: state.polls.find((poll) => poll._id === props.match.params.id),
  auth: state.auth
})

export default connect(mapStateToProps, actions)(ShowPoll)