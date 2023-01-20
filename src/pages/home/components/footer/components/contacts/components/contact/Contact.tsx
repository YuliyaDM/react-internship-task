import React from 'react'
import Property from '../../../../../../../../components/property/Property'
import IContact from '../../../../../../../../interfaces/IContact.interface'
import Links from '../links/Links'
import Texts from '../texts/Texts'

import styles from './styles/_contact.module.scss'

function Contact (props: {element: IContact}) {
	const { elements, title, type } = props.element
	return (
		<address className={`${styles.contact}`}>
			<Property text={title} />
			<div className={styles.contact__info}>
				{type === 'text' ? <Texts texts={elements} classes={styles['contact__info-element']} /> : <Links links={elements} classes={styles['contact__info-element']} />}
			</div>
		</address>
	)
}

export default Contact
