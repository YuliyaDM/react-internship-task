import React, { lazy } from 'react'

const Expertises = lazy(() => import('./components/expertises/Expertises'))
const FeaturedWorks = lazy(() => import('./components/featuredWorks/FeaturedWorks'))

import styles from './styles/_main.module.scss'

function Main () {
  return (
	<main className={styles.main}>
		<FeaturedWorks />
    	<Expertises /> 
    </main>
  )
};

export default Main
