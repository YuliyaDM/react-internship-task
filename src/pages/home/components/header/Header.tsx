import React, { lazy, Suspense } from 'react'
import DemoCarousel from './components/carousel/Carousel'

const Navigation = lazy(() => import('./components/navigation/Navs'))
const AuthorBio = lazy(() => import('./components/authorBio/AuthorBio'))

const Loader = lazy(() => import('../../../../components/loader/Loader'))

import styles from './styles/_header.module.scss'

export default function Header () {
  return (
	<Suspense fallback={<Loader text='Loading header . . .' />}>
		<header className={styles.header}>
			<DemoCarousel />
			<Navigation />
			<AuthorBio authorName='Daniel Banquo' country='Great Britain' proffession='Multidisciplinary designer'/>
		</header>
	</Suspense>
  )
};
