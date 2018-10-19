import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Logo from './static/React-icon.svg'
import './index.scss'

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
/** Check env */
// console.log('process.env.VERSION', process.env.VERSION)
// console.log('process.env.PLATFORM', process.env.PLATFORM)
// console.log('process.env.NODE_ENV', process.env.NODE_ENV)

ReactDOM.render(<App />, document.getElementById('root'))
