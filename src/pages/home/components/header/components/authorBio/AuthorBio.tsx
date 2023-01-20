import React, { lazy } from 'react'

const Name = lazy(() => import('./components/name/Name'))
const Work = lazy(() => import('./components/work/Work'))
const Languages = lazy(() => import('./components/languages/Languages'))
const About = lazy(() => import('./components/about/About'))

import styles from './styles/_author-bio.module.scss'

function AuthorBio (props: { authorName: string, country: string, proffession: string }) {
	const { authorName, country, proffession } = props
	
	return (
		<section className={styles['author-bio']} id="about">
			<div className={styles['author-bio__container']}>
				<div className={styles['author-bio__inner']}>
					<div className={styles['author-bio__basic-info']}>
						<Name name={authorName} />
						<Work name={proffession} country={country} />
					</div>
					<Languages languages={[{ title: 'Uk' }, { title: 'Pl' }, { title: 'En' }]} />
					<About/>
				</div>
			</div>
		</section>
	)
}

export default AuthorBio
