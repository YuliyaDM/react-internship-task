import React, { lazy } from 'react'

const Name = lazy(() => import('./components/name/Name'))
const Work = lazy(() => import('./components/work/Work'))
const Languages = lazy(() => import('./components/languages/Languages'))
const HireMe = lazy(() => import('./components/hireMe/HireMe'))
const About = lazy(() => import('./components/about/About'))

import styles from './styles/_author-bio.module.scss'

function AuthorBio (props: { authorName: string, country: string, proffession: string }) {
	return (
		<section className={styles['author-bio']}>
			<div className={styles.container}>
				<div className={styles['author-bio__inner']}>
					<Name name='Daniel Banquo' />
					<Work name='Designer' country='Netherlands' />
					<Languages languages={[{ title: 'Uk' }, { title: 'Pl' }, { title: 'En' }]} />
					<HireMe />
					<About/>
				</div>
			</div>
		</section>
	)
}

export default AuthorBio
