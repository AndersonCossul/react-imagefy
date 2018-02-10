import React, { Component } from 'react'
import Nav from './Components/Nav'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Videos from './Containers/Videos'
import Upload from './Containers/Upload'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Nav />
          <hr />
          <Switch>
            <Route path="/" exact component={Videos} />
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
