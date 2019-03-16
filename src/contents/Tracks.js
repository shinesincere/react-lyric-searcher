import React from 'react'
import {Context} from '../Provider'
import Spinner from '../components/Spinner'
import Track from './Track'

export default () => 
  <Context.Consumer>
    {value => {
      const {heading, track_list} = value
      if(track_list === undefined || track_list.length === 0) {
        return <Spinner/>
      } else {
        return <>
          <h1 className='text-center mb-4'>{heading}</h1>
          <div className='row mx-auto'>
            {track_list.map((e, i) => <Track track={e.track} key={i}/>)}
          </div>
        </>
      }
    }}
  </Context.Consumer>