/* eslint-disable no-return-assign */
import React from 'react'

import styles from './styles/_button.module.scss'

function Button (props: {text: string, className: string, href: string}) {
	const { text, className, href } = props

	return (
		<button onClick={() => window.open(href)} className={`${styles.button} ${className}`}>{text}</button>
	)	
}

export default Button
