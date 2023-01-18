import React, { useState, lazy, Suspense } from 'react'

const Navigation = lazy(() => import('./components/navigation/Navs'))
const AuthorBio = lazy(() => import('./components/authorBio/AuthorBio'))

const Loader = lazy(() => import('../../../../components/loader/Loader'))

import styles from './styles/_header.module.scss'

export default function Header () {
  return (
	<Suspense fallback={<Loader text='Loading header . . .' />}>
		<header className={styles.header}>
			<Navigation />
			<AuthorBio authorName='Daniel Banquo' country='Slovakia' proffession='Multidisciplinary designer'/>
		</header>
	</Suspense>
  )
};
