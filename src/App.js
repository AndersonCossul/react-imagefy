import React, { Component } from 'react'
import NavBar from './Components/Navigation/NavBar/NavBar'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Gallery from './Containers/Gallery/Gallery'
import Upload from './Containers/Upload/Upload'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <NavBar />
          <hr />
          <Switch>
            <Route path="/" exact component={Gallery} />
            <Redirect from="/videos" to="/" />
            <Redirect from="/all-videos" to="/" />

            <Route path="/upload" component={Upload} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
