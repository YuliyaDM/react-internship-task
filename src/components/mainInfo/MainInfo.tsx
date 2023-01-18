import React, { useRef } from 'react'

import styles from './styles/_main-info.module.scss'
import separatorStyles from './styles/_separator.module.scss'

function MainInfo (props: {text: string[]}) {
	const { text } = props

	const mainInfoRef = useRef(null)

	return (
		<div className={styles['main-info']} ref={mainInfoRef}>
			<div className={styles['main-info__inner']}>
				<div className={styles['main-info__list']}>
					{text.map((el: string, index: number, array: string[]) => {
						return <div key={index} className={styles['main-info__list-element']}>{el}</div>
					})}
				</div>
			</div>
		</div>
	)
}

export default MainInfo
