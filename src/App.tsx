import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Error from './pages/error/Error'
import Home from './pages/home/Home'

class App extends React.Component {
  render () {
    return (
    <Router>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="*"><Error /></Route>
      </Switch>
    </Router>
    )
  }
}

export default App
