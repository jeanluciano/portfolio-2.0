import React from 'react'
import { Router } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'
import NavBar from './containers/components/Navbar'
import Navbar from './containers/components/Navbar'

injectGlobal`
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
    height:100vh;
  }
`

const App = () => (
  <Router>
    <div className="content">
      <Routes />
      <Navbar />
    </div>
    
  </Router>
)

export default hot(module)(App)
