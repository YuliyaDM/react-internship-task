import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './App.module.css'
import Home from './pages/home/Home'
import Error from './pages/error/Error'

export default function App () {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="*"><Error /></Route>
      </Switch>
    </Router>
  )
}
