import React from 'react'
import {Link} from 'react-router-dom'

export default ({track}) => {
  const Field = ({a, b, c}) => <>
    <strong><i className={a} style={{fontSize: 12}}></i> {b}</strong>: {track[c]}<br/>
  </>

  return (
    <div className='col-sm-6'>
      <div className='card mb-4 shadow-sm'>
        <div className='card-body'>
          <h5>{track.artist_name}</h5>
          <p className='card-text'>
            <Field a='fas fa-play' b='Track' c='track_name'/>
            <Field a='fas fa-compact-disc' b='Album' c='album_name'/>
          </p>
          <Link to={`/lyrics/track/${track.track_id}`} className='btn btn-dark float-right'>
            <i className='fas fa-chevron-right'></i> View Lyrics
          </Link>
        </div>
      </div>
    </div>
  )
}

