/* eslint-disable react/jsx-key */
import React, { useState, useEffect, lazy, Suspense } from 'react'
import wait from '../../utils/wait'

const Loader = lazy(() => import('../loader/Loader'))

const DelayingComponent = ({ children, text, renderDelay = 500 }: {children: React.ReactNode, text: string, renderDelay: number}) => {
	const [uploadState, setUploadState] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setUploadState(true)
		}, renderDelay)
	}, [])

	return <>{uploadState ? children : <Suspense><Loader text={text} /></Suspense>}</>
}

export default DelayingComponent
