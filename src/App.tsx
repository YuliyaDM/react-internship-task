import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import './App.module.css'
import Home from './pages/home/Home'
import Error from './pages/error/Error'

export default function App () {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="*" element={ <Error />}></Route>
      </Routes>
    </Router>
  )
}
