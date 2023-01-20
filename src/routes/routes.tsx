import React, { lazy, Suspense } from 'react'
import LOADING_DELAY from '../constants/loadingDelay'

const HomeComponent = lazy(() => import('../pages/home/Home'))
const ErrorLinkComponent = lazy(() => import('../pages/errors/errorLink/ErrorLink'))
const DelayedComponent = lazy(() => import('../components/delayingComponent/DelayingComponent'))

const ErrorBoundary = lazy(() => import('../pages/errors/errorRender/ErrorRender'))

const Loader = lazy(() => import('../components/loader/Loader'))

const HomePage = () => {
	return (
	<Suspense>
		<ErrorBoundary>
			<DelayedComponent renderDelay={LOADING_DELAY} text='Redirecting to the correct page . . .'>
				<Suspense fallback={<Loader text="Loading home page . . ." />}>
					<HomeComponent />
				</Suspense>
			</DelayedComponent>
		</ErrorBoundary>
	</Suspense>
	)
}

const ErrorLinkPage = () => {
	return (
	<Suspense>
		<ErrorBoundary>
			<DelayedComponent renderDelay={LOADING_DELAY} text='Redirecting to the correct page . . . '>
				<Suspense fallback={<Loader text="Loading error page . . ." />}>
					<ErrorLinkComponent />
				</Suspense>
			</DelayedComponent>
		</ErrorBoundary>
	</Suspense>
	)
}

const ROUTES = [
	{
		path: '/',
		element: <HomePage />,
		children: [
			{
				path: 'Home',
				element: <HomePage />
			}
		]
	},
	{
		path: '/registration',
		element: <div>Registration will be on this site soon . . . 🤫</div>
	},
	{
		path: '*',
		element: <ErrorLinkPage />
	}
]

export default ROUTES
