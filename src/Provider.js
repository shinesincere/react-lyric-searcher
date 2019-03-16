import React, {Component} from 'react'
import axios from 'axios'

export const Context = React.createContext()

const reducer = (state, action) => {
  switch(action.type) {
    case 'SEARCH_TRACKS': return {...state, heading: 'Search Results', track_list: action.load}
    default: return state
  }
}

const URL = process.env.REACT_APP_URL
const MMK = process.env.REACT_APP_MMK

export default class Provider extends Component {
  state = {
    heading: 'Top 10 Tracks',
    track_list: [],
    dispatch: action => this.setState(state => reducer(state, action))
  }

  componentDidMount() {
    axios.get(`${URL}/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${MMK}`)
    .then(res => {
      this.setState({track_list: res.data.message.body.track_list})
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}