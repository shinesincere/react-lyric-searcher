import React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Provider from './Provider'
import Navbar from './components/Navbar'
import Lyrics from './contents/Lyrics'
import Index from './contents/Index'

export default () => 
  <Provider>
    <Router>
      <>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Index}/>
          <Route exact path='/lyrics/track/:id' component={Lyrics}/>
        </Switch>
      </>
    </Router>
  </Provider>
