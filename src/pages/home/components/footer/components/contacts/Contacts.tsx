import React from 'react'
import CONTACT_DETAILS from '../../../../../../constants/contacts'
import IContact from '../../../../../../interfaces/IContact.interface'
import Contact from './components/contact/Contact'
import Links from './components/links/Links'
import Texts from './components/texts/Texts'

import styles from './styles/_contacts.module.scss'

function Contacts () {
  return (
	<React.Fragment>
		<div className={styles.contacts}>
			<div className={styles.contacts__container}>
				<div className={styles.contacts__inner}>
					<div className={styles.contacts__list}>
						{
							CONTACT_DETAILS.map((el: IContact, index: number) => {
								return (
									<Contact element={el} key={index} />
								)
							})
						} 
					</div>
				</div>
			</div>
		</div>
	</React.Fragment>
  )
}

export default Contacts
