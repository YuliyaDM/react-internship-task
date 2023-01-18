import React from 'react'

import styles from './styles/_title.module.scss'

function Title (props: {text: string, className: string}) {
	const { text, className } = props
	
	return (
		<h1 className={`${styles.title} ${className}`}>{text}</h1>
	)
}

export default Title
