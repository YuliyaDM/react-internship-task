import React from 'react'
import Title from '../title/Title'

import styles from './styles/_property.module.scss'

function Property (props: {text: string}) {
	const { text } = props

	return (
		<Title text={text} className={styles.property} />
	)
}

export default Property
