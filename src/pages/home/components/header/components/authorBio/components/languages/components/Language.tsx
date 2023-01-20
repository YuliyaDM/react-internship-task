import React from 'react'
import Title from '../../../../../../../../../components/title/Title'

// @ts-ignore
import styles from './styles/_language.module.scss'

function Language (props: {title: string}) {
	const { title } = props
	return (
		<Title className={styles.language} text={title} />
	)
}

export default Language
