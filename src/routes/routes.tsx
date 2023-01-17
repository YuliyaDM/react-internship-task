import React, { lazy, Suspense } from 'react'

const HomeComponent = lazy(() => import('../pages/home/Home'))
const ErrorLinkComponent = lazy(() => import('../pages/errors/errorLink/ErrorLink'))
const DelayedComponent = lazy(() => import('../utils/delayedComponent'))

const ErrorBoundary = lazy(() => import('../pages/errors/errorRender/ErrorRender'))

const Loader = lazy(() => import('../components/loader/Loader'))

const HomePage = () => {
	return (
	<Suspense>
		<ErrorBoundary>
			<DelayedComponent renderDelay={1000} text='Redirecting to the correct page . . .'>
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
			<DelayedComponent renderDelay={1000} text='Redirecting to the correct page . . . '>
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
			},
			{
				path: 'HOME',
				element: <HomePage />
			},
			{
				path: 'home',
				element: <HomePage />
			}
		]
	},
	{
		path: '*',
		element: <ErrorLinkPage />
	}
]

export default ROUTES
