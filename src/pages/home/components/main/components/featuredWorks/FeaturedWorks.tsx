import React, { useState } from 'react'
import FEATURED_WORKS from '../../../../../../constants/featuredWorks'
import IFeaturedWork from '../../../../../../interfaces/IFeaturedWork.interface'

import styles from './styles/_featured-works.module.scss'

function FeaturedWorks () {
  // eslint-disable-next-line no-unused-vars
  const [default_featuredWorks, updated_featuredWorks] = useState(FEATURED_WORKS)

  return (
	<section className={styles.featuredWorks}>
        <div className={styles.description}>
            <div className="description__title">Featured Works</div>
            <div className="description__info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem blanditiis nisi veniam molestiae quis repellat, maxime, officia recusandae ducimus molestias perspiciatis maiores, cupiditate nobis deleniti odio explicabo vel quae eos!</div>
            <div className="description__data">2021-2022</div>
        </div>
        <div className={styles.works}>
            {default_featuredWorks.map((work: IFeaturedWork, index: number) => {
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
    </section>
  )
}

export default FeaturedWorks
