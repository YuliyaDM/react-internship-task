import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'

import styles from './styles/_gmail.module.scss'

function Gmail () {
	return (
		<address className={styles.gmail}>
			<a className={styles.gmail__link} href="mailto:juliapirogova03@gmail.com">
				<div className={styles.gmail__name}>juliapirogova03@gmail.com</div>
				<div className={styles['gmail__open-button']}>
					<FontAwesomeIcon icon={faSquareArrowUpRight} style={{ background: 'transparent', scale: '3.5' }} />
				</div>
			</a>
		</address>
	)
}

export default Gmail
