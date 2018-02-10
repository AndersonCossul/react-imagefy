import React, { Component } from 'react'
import Nav from './Components/Nav'
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Nav />
          <hr />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
