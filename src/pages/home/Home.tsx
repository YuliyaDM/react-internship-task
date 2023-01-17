import React, { lazy, Suspense, Component, useTransition, startTransition } from 'react'

import { Link } from 'react-router-dom'
import DelayedComponent from '../../utils/delayedComponent'
import wait from '../../utils/wait'

const loadingDelay = 5000

const Loader = lazy(() => {
	wait(loadingDelay)
	return import('../../components/loader/Loader')
})

// const Main = lazy(() => import('./components/main/Main'))
// const Footer = lazy(() => import('./components/footer/Footer'))

const Header = lazy(() => {
	wait(loadingDelay)
	return import('./components/header/Header')
})

import styles from './styles/_home.module.scss'

function Home () {
  document.title = 'Home Page'
	
  const HomePage = <Suspense fallback={<Loader text="Loading the home page . . . " />}> <Header /> </Suspense>

  return (
	<Suspense fallback={<Loader text="Loading the home page . . . " />}> <Header /> </Suspense>
  )
}

export default Home
