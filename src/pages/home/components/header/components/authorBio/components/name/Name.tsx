import React from 'react'

import styles from './styles/_name.module.scss'

function Name (props: { name: string }) {
	const { name } = props

	return (
		<strong className={styles.name}>
			{ name }
		</strong>
	)	
}

export default Name
