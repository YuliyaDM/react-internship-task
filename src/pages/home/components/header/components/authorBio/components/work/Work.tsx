import React from 'react'

import styles from './styles/_work.module.scss'

function Work (props: { name: string, country: string }) {
	const { name, country } = props
	return (
		<div className={styles.work}>
			<div className={styles.work__container}>
				<div className={styles.work__inner}>
					<div className={styles.work__name}>{name}</div>
					<div className={styles.work__country}>{country}</div>
				</div>
			</div>
		</div>
	)
}

export default Work
