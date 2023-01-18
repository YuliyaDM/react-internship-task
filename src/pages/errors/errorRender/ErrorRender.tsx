/* eslint-disable n/handle-callback-err */
import React from 'react'

import styles from './styles/_errorRender.module.scss'

class ErrorBoundary extends React.Component<{children: React.ReactNode}, { isError: boolean }> {
	constructor (props: {children: any}) {
		super(props)
		this.state = { isError: false }
	}

	static getDerivedStateFromError (error: ErrorBoundary) {
		document.title = 'Error rendering page'
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
					<div className={styles['error-boundary']}>
						<div className={styles['error-boundary__container']}>
							<div className={styles['error-boundary__inner']}>
								<div className={styles['error-boundary__text']}>
									<h1>We are sorry! It seems some errors during rendering have happened.</h1>
									<br />
									<p>Try to reload the page.</p>
								</div>
							</div>
						</div>
					</div>
				)
			}
			return this.props.children
		}
	}
}

export default ErrorBoundary
