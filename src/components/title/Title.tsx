import React from 'react'

import styles from './styles/_title.module.scss'

function Title (props: {text: string, className?: string}) {
	const { text, className } = props
	
	let classes: string = `${styles.title}`

	if (className) {
		classes += ` ${className}`
	}
	
	return (
		<h1 className={classes}>{text}</h1>
	)
}

export default Title
