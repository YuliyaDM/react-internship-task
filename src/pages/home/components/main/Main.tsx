import React, { lazy } from 'react'

const Expertises = lazy(() => import('./components/expertises/Experitses'))
const FeaturedWorks = lazy(() => import('./components/featuredWorks/FeaturedWorks'))

import styles from './styles/_main.module.scss'

function Main () {
  return (
	<main className={styles.main}>
		<div className={styles.main__container}>
			<FeaturedWorks />
            <Expertises /> 
		</div>
    </main>
  )
};

export default Main
