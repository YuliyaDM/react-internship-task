/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from 'react'

import { useNavigate, Link } from 'react-router-dom'
import wait from '../../../utils/wait'

import './styles/_errorLink.module.scss'

function Error () {
	document.title = 'Error page'
	
	const navigation = useNavigate()
	const delayToRedirecting = 10000
	const [delay, setDelay] = useState(delayToRedirecting)

	function homePageRedirecting () {
		wait(delayToRedirecting)
		navigation('/home')
	}

	useEffect(() => {
		const timeOut = delayToRedirecting / (delayToRedirecting / 1000)
		const delayingUpdate = setInterval(() => setDelay(delay - 1000), timeOut)

		if (!delay) {
			return homePageRedirecting()
		}

		console.log(delay)
	}, [delay])
	
	return (
		<>
			<h1>Oops! You are on the error page.</h1>
			<p>You will be redirecting to home page in { delay / 1000 } seconds</p>
		</>
	)
}

export default Error
