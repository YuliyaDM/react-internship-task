import React from 'react'
import Title from '../../../../../../../../components/title/Title'

import styles from './styles/_work.module.scss'

function Work (props: { name: string, country: string }) {
	const { name, country } = props
	return (
		<div className={styles.work}>
			<div className={styles.work__container}>
				<div className={styles.work__inner}>
					<Title className={styles.work__name} text={name} />
					<Title className={styles.work__country} text={country} />
				</div>
			</div>
		</div>
	)
}

export default Work
