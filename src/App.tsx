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
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='*' element={<Error></Error>}></Route>
          </Routes>
      </BrowserRouter>
    )
  }
}

export default App
