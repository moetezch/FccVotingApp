import React from 'react'

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>
        Voting App
    </h1>

      <div className="row">

        <div className="col s4">
          <div className="card blue-grey darken-1" style={{height:'200px'}}>
            <div className="card-content white-text">
              <span className="card-title">Vote</span>
              <p>Anyone can vote, add another option and see the poll results</p>
            </div>
          </div>
        </div>

        <div className="col s4">
          <div className="card blue-grey darken-1" style={{height:'200px'}}>
            <div className="card-content white-text">
              <span className="card-title">Create Polls</span>
              <p>Create and delete your Polls as authenticated user</p>
            </div>
          </div>

        </div>
        <div className="col s4" >
          <div className="card blue-grey darken-1" style={{height:'200px'}}>
            <div className="card-content white-text">
              <span className="card-title">Share</span>
              <p>Everyone can share the poll on Twitter</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="page-footer">
      <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h6 className="white-text">A FreeCodeCamp Challenge written by Moetez Chaabene</h6>
        </div>
      </div>
    </div>
        <div className="footer-copyright">
          <div className="container">
          © 2018
      <a className="grey-text text-lighten-4 right" href="https://github.com/moetezch/FccVotingApp">Github</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Landing