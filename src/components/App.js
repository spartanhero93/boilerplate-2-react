import React, { Component } from 'react'

import Logo from '../static/React-icon.svg'

class App extends Component {
  render () {
    return (
      <div className='container'>
        <header>
          <img className='logo' src={Logo} alt='logo' />
          <h1>Welcome to React</h1>
        </header>
        <p>To get started, edit src/App.js and save to reload.</p>
      </div>
    )
  }
}

export default App
