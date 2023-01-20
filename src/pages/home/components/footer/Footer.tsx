import React, { lazy } from 'react'

import styles from './style/_footer.module.scss'

const Contacts = lazy(() => import('./components/contacts/Contacts'))
const Gmail = lazy(() => import('./components/gmail/Gmail'))

export default function Footer () {
  return (
	<footer className={styles.footer} id='contacts'>
		<div className={styles.footer__container}>
			<div className={styles.footer__inner}>
				<Gmail />
				<Contacts />	
			</div>
		</div>
    </footer>
  )
};
