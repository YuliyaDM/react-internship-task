/* eslint-disable n/handle-callback-err */
import React from 'react'

import styles from './styles/_errorRender.module.scss'

class ErrorBoundary extends React.Component<{children: React.ReactNode}, { isError: boolean }> {
	constructor (props: {children: any}) {
		super(props)
		this.state = { isError: false }
	}

	static getDerivedStateFromError (error: ErrorBoundary) {
		return { isError: true }
	}

	componentDidCatch (error: Error, errorInfo: React.ErrorInfo): void {
		console.log(error, errorInfo)
	}

	render () {
		// eslint-disable-next-line no-lone-blocks
		{
			if (this.state.isError) {
				return (
					<h1>Oops! Some error in rendering has happened.</h1>
				)
			}
			return this.props.children
		}
	}
}

export default ErrorBoundary
