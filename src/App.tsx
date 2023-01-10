import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Error from './pages/error/Error'
import Home from './pages/home/Home'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='*' element={<Error />}></Route>
          </Routes>
      </BrowserRouter>
    )
  }
}

export default App
