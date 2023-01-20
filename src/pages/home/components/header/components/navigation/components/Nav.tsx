import React from 'react'
import INav from '../../../../../../../interfaces/INav.interfaces'

import styles from './styles/_nav.module.scss'
import animationStyles from './styles/_animation.module.scss'
import Title from '../../../../../../../components/title/Title'

function Nav (props: {nav: INav}) {
	// @ts-ignore
	const { title, link, scrollTo } = props.nav

	return (
		<div className={styles.navigation__nav}>
			<a href={link || `#${scrollTo}`} className={styles['navigation__nav-title']}>
				<div className={animationStyles.animation}>
					<div className={animationStyles['animation__horizontal-lines']}></div>
					<div className={animationStyles['animation__vertical-lines']}></div>
				</div>
				<Title text={title} className={styles['navigation__nav-title-text']} />
			</a>
		</div>
	)
}

export default Nav
