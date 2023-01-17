import React from 'react'

// @ts-ignore
import styles from './styles/_language.module.scss'

function Language (props: {title: string}) {
	const { title } = props
	return (
		<div>
			{title}
		</div>
	)
}

export default Language
