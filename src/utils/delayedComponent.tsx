/* eslint-disable react/jsx-key */
import React, { useState, useEffect, lazy, Suspense } from 'react'
import wait from './wait'

const Loader = lazy(() => import('../components/loader/Loader'))

const DelayedComponent = ({ children, text, renderDelay = 500 }: {children: React.ReactNode, text: string, renderDelay: number}) => {
	const [uploadState, setUploadState] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setUploadState(true)
		}, renderDelay)
	}, [])

	return <>{uploadState ? children : <Suspense><Loader text={text} /></Suspense>}</>
}

export default DelayedComponent
