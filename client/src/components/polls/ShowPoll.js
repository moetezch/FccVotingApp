import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../actions/index'

class ShowPoll extends Component {

  componentDidMount() {
    this.props.fetchPolls()

  }
  onRemove = () => {
    this.props.deletePoll(this.props.poll._id)
    this.props.history.push('/mypolls');
  }


  renderPoll(){
    const options=this.props.poll.options.map((option)=>{
      return (
                       
        

        <a key={option._id} href="#!" className="collection-item" onClick={()=>{console.log(option.votes++)}}>{option.name} </a>
        

      ) 
      
    })

    // <ul>

    // <li  key={vote._id} onClick={()=>{console.log(vote.name)}}>{vote.name}</li>
    // </ul>

    // return this.props.poll.map((poll, index)=>{
     // <a key={vote._id} href="#!" className="collection-item">{vote.name}</a>
    //   return <div className="card blue-grey " key={poll._id}>

    //       <Link to={`/polls/${poll._id}`} className="card-content white-text">
    //         <span className="card-title center">{poll.title}</span>
    //         </Link>
    //       </div>
  // })

        return <div>
                <h3>{this.props.poll.title}</h3>
                <p>I would like to vote for :</p>

                <div className="collection">
                {options }
                </div>
                
                

                <button className="btn-floating btn-large red right" onClick={this.onRemove}>
                <i className="large material-icons">delete</i>
              </button>
                <Link to={`/polls/edit/delete/${this.props.poll._id}`} className="btn-floating btn-large red right" style={{marginRight:20}}>
                <i className="large material-icons">edit</i>
              </Link>

            </div>
    
} 
  render() {
    return (
      
     
      typeof this.props.poll === 'undefined' 
      ?  null :
        
         <div>
         
       
         {this.renderPoll()} 
         

         </div>

        
      
    );
  }
}
const mapStateToProps=(state,props)=> ({
  poll: state.polls.find((poll) => poll._id === props.match.params.id)
})

// const mapDispatchToProps = (dispatch) => ({
//   deletePoll: (poll) => dispatch(deletePoll(poll))
// });

export default connect(mapStateToProps,actions)(ShowPoll)
