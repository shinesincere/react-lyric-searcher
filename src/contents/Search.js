import axios from 'axios'
import React, {Component} from 'react'
import {Context} from '../Provider'

const URL = process.env.REACT_APP_URL
const MMK = process.env.REACT_APP_MMK

export default class Search extends Component {
  state = {
    trackTitle: ''
  }

  onChange = e => {
    this.setState({trackTitle: e.target.value})
  }

  onSubmit = (dispatch, e) => {
    e.preventDefault()
    axios.get(`${URL}/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${MMK}`)
    .then(res => {
      dispatch({type: 'SEARCH_TRACKS', load: res.data.message.body.track_list})
      this.setState({trackTitle: ''})
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <Context.Consumer>
        {value => {
          const {dispatch} = value
          return(
            <div className='card card-body m-3 p-4 text-center'>
              <h1><i className='fas fa-music'/> Search for a Song</h1>
              <p>Get the lyrics for any Song</p>
              <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                <input
                  placeholder='Song title...'
                  onChange={this.onChange}
                  value={this.state.trackTitle}
                  name='trackTitle'
                  type='text' className='form-control font-weight-bold'/>
                <button type='submit' className='btn btn-primary btn-lg btn-block mt-3'>Search Now</button>
              </form>
            </div>
          )
        }}
      </Context.Consumer>
    )
  }
}