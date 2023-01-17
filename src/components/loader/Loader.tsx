import React from 'react'

import styles from './styles/_loader.module.scss'

function Loader (props: {text: string}) {
	const { text } = props
	return (
		<div className={styles.loader}>
			<div className={styles.loader__inner}>
				<div className={styles.loader__text}>{ text }</div>
				<div className={styles.loader__animation}>
					<span className={styles['loader__animation-component']}></span>
					<span className={styles['loader__animation-component']}></span>
					<span className={styles['loader__animation-component']}></span>
					<span className={styles['loader__animation-component']}></span>
					<span className={styles['loader__animation-component']}></span>
					<span className={styles['loader__animation-component']}></span>
					<span className={styles['loader__animation-component']}></span>
					<span className={styles['loader__animation-component']}></span>
					<span className={styles['loader__animation-component']}></span>
					<span className={styles['loader__animation-component']}></span>
					<span className={styles['loader__animation-component']}></span>
					<span className={styles['loader__animation-component']}></span>
				</div>
			</div>
		</div>
	)	
}

export default Loader
