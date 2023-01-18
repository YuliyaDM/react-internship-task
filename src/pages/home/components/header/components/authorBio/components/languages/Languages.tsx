import React, { lazy } from 'react'
import Language from './components/Language'

const HireMe = lazy(() => import('../hireMe/HireMe'))

import styles from './styles/_languages.module.scss'

function Languages (props: {languages: Array<{title: string}>}) {
	const { languages } = props
	
	return (
		<div className={styles.languages}>
			<div className="languages__list">
				{languages.map(({ title }, index) => <Language title={title} key={index} />)}
			</div>
			<HireMe />
		</div>
	)
}

export default Languages
