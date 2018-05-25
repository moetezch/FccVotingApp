import axios from 'axios'
import { FETCH_USER,FETCH_POLLS,DELETE_POLL,UPDATE_VOTE,FETCH_ALL_POLLS } from './types'

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user')
  dispatch({ type: FETCH_USER, payload: res.data })
}

export const submitPoll=values=>async dispatch=>{
  const res = await axios.post('/api/mypolls',values)
  dispatch({ type: FETCH_USER, payload: res.data })
}

export const fetchPolls=()=>async dispatch=>{
  const res = await axios.get('/api/mypolls')
  dispatch({ type: FETCH_POLLS, payload: res.data })
}
export const fetchAllPolls=()=>async dispatch=>{
  const res = await axios.get('/api/polls')
  dispatch({ type: FETCH_ALL_POLLS, payload: res.data })
}

export const deletePoll=(id)=>async dispatch =>{
  const res = await axios.delete('/api/polls/delete/'+id)
  dispatch({ type: DELETE_POLL, payload: res.data })
}
export const updateVote=(id)=>async dispatch =>{
  const res = await axios.post('/api/polls/vote/'+id)
  dispatch({ type: UPDATE_VOTE, payload: res.data })
}
