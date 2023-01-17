import React from 'react'

import styles from './styles/_title.module.scss'

function Title (props: {text: string}) {
	const { text } = props
	
	return (
		<h1 className={styles.title}>{text}</h1>
	)
}

export default Title
