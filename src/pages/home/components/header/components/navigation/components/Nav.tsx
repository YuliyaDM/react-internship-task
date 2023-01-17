import React from 'react'
import INav from '../../../../../../../interfaces/INav.interfaces'

import styles from './styles/_nav.module.scss'
import animationStyles from './styles/_animation.module.scss'
import { Link } from 'react-router-dom'

function Nav (props: INav) {
	const { title, linkTo } = props
	return (
		<div className={styles.navigation__nav}>
			<Link to={`#${linkTo}`} className={styles['navigation__nav-title']}>
				<div className={animationStyles.animation}>
					<div className={animationStyles['animation__horizontal-lines']}></div>
					<div className={animationStyles['animation__vertical-lines']}></div>
				</div>
				{title}
			</Link>
		</div>
	)
}

export default Nav
