import React from 'react'

import styles from './styles/_button.module.scss'

function Button (props: {text: string, className: any}) {
	const { text, className } = props

	return (
		<button className={`${styles.button} ${className}`}>{text}</button>
	)	
}

export default Button
