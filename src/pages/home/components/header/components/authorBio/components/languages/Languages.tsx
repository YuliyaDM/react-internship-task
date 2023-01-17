import React, { lazy } from 'react'
import Language from './components/Language'

import styles from './styles/_languages.module.scss'

function Languages (props: {languages: Array<{title: string}>}) {
	const { languages } = props
	
	return (
		<div>
			{languages.map(({ title }, index) => <Language title={title} key={index} />)}
		</div>
	)
}

export default Languages
