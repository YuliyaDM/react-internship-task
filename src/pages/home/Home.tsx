import React, { lazy, Suspense } from 'react'

import DelayingComponent from '../../components/delayingComponent/DelayingComponent'
import LOADING_DELAY from '../../constants/loadingDelay'
import ThemeContext from '../../utils/themes/themeContext'
import wait from '../../utils/wait'
import ErrorBoundary from '../errors/errorRender/ErrorRender'

const Loader = lazy(() => {
	wait(LOADING_DELAY)
	return import('../../components/loader/Loader')
})

const Main = lazy(() => {
	wait(LOADING_DELAY)
	return import('./components/main/Main')
})
const Footer = lazy(() => {
	wait(LOADING_DELAY)
	return import('./components/footer/Footer')
})

const Header = lazy(() => {
	wait(LOADING_DELAY)
	return import('./components/header/Header')
})

import styles from './styles/_home.module.scss'

function Home () {
  document.title = 'Home Page'

  return (
	<Suspense>
		<ThemeContext.Provider value='dark'>
			<ErrorBoundary>
				<DelayingComponent renderDelay={LOADING_DELAY} text='Redirecting to the home page . . .'>
					<Suspense fallback={<Loader text="Loading home page . . ." />}>
						  <div className='home'>
							  	<Header />
						  		<Main />
						  		<Footer/>
							</div>
					</Suspense>
				</DelayingComponent>
			</ErrorBoundary>
		</ThemeContext.Provider>
	</Suspense>
  )
}

export default Home
