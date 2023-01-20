import React from 'react'
import MainInfo from '../../../../../../../../components/mainInfo/MainInfo'
import Title from '../../../../../../../../components/title/Title'

import styles from './styles/_about.module.scss'

function About () {
	return (
		<section className={styles.about}>
			<div className={styles.about__container}>
				<div className={styles.about__inner}>
					<Title className={styles.about__title} text="About" />
					<MainInfo text={['An independent multidisciplinary designer',
						'Helping brands tell powerful, authentic story. Working closely with any clients',
						'And curated global network of clients, I strategise, produce, find and license the best result.']} />
				</div>
			</div>
        </section>
	)
}

export default About
