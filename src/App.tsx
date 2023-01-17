import React from 'react'
import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom'
import ROUTES from './routes/routes'

// @ts-ignore
import styles from './styles/_app.module.scss'

class App extends React.Component {
  render () {
	const router = createBrowserRouter(ROUTES)

	return (
		<RouterProvider router={router} />
	)
  }
}

export default App
