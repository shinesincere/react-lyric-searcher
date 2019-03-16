import axios from 'axios'
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Spinner from '../components/Spinner'

const URL = process.env.REACT_APP_URL
const MMK = process.env.REACT_APP_MMK

export default class Lyrics extends Component {
  state = {
    track: {}, 
    lyrics: {}
  }

  componentDidMount() {
    axios.get(`${URL}/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${MMK}`)
    .then(res => {
      this.setState({lyrics: res.data.message.body.lyrics})
      return axios.get(`${URL}/track.get?track_id=${this.props.match.params.id}&apikey=${MMK}`)
    })
    .then(res => {
      this.setState({track: res.data.message.body.track})
    })
    .catch(err => console.log(err))
  }

  render() {
    const {track, lyrics} = this.state
    if(
      track === undefined || lyrics === undefined || Object.keys(track).length === 0 || Object.keys(lyrics).length === 0
    ) {
      return <Spinner/>
    } else {
      const {track_name, artist_name, album_id, primary_genres, explicit, first_release_date} = track
      const {music_genre_name} = primary_genres.music_genre_list[0].music_genre
      return <>
        <Link to='/' className='btn btn-md btn-danger m-4 font-weight-bold'>Go Back</Link>
        <div className='card m-4 font-weight-bold'>
          <h5 className='card-header bg-success text-white'>{track_name} by {' '}{artist_name}</h5>
          <p className='card-body'>{lyrics.lyrics_body}</p>
        </div>
        <ul className='list-group m-4 font-weight-bold'>
          <li className='list-group-item'>Album ID : {album_id}</li>
          <li className='list-group-item'>Song Genre : {music_genre_name}</li>
          <li className='list-group-item'>Explicit Words : {explicit === 0? 'No': 'Yes'}</li>
          <li className='list-group-item'>Release Date : {first_release_date}</li>
        </ul>
      </>
    }
  }
}