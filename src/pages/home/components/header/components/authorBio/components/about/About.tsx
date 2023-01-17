import React from 'react'
import MainInfo from '../../../../../../../../components/mainInfo/MainInfo'

import styles from './styles/_about.module.scss'

function About () {
	return (
		<section className={styles.about}>
			<div className="about__inner">
				<div className="about__title">About</div>
				<MainInfo text={['designer', 'cool', 'amazing', 'helps to make your site better']}/>
			</div>
        </section>
	)
}

export default About
