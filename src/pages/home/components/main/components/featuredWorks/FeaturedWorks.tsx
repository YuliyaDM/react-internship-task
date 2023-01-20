import React from 'react'
import FEATURED_WORKS from '../../../../../../constants/featuredWorks'
import IFeaturedWork from '../../../../../../interfaces/IFeaturedWork.interface'

import Title from '../../../../../../components/title/Title'

import styles from './styles/_featured-works.module.scss'
import MainInfo from '../../../../../../components/mainInfo/MainInfo'
import Button from '../../../../../../components/button/Button'

function FeaturedWorks () {
  return (
	<section className={styles['featured-works']} id="works">
		<div className={styles['featured-works__container']}>
			<div className={styles['featured-works__inner']}>
				<div className={styles['featured-works__description']}>
					<Title className="featured-works__description-title" text='Featured Works' />
					<MainInfo text={['Some of my recent work', 'In different roles and cases due to clients needs']} />
					<Title className="featured-works__description-data" text="2021-2022" />
				</div>
				<div className={styles['featured-works__list']}>
					{FEATURED_WORKS.map((work: IFeaturedWork, index: number) => {
					return (
						<div key={index} className={styles.work}>
							<div className={styles.container}>
								<div className={styles.title}>{work.title}</div>
								<div className={styles.data}>{work.date}</div>
							</div>
						</div>
					)
					}) }
				</div>
				<Button text='More Work' className={styles['featured-works__button']} href={''} />	
			</div>	  
		</div>
    </section>
  )
}

export default FeaturedWorks
