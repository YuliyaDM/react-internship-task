import React from 'react'
import Title from '../../../../../../../../components/title/Title'
import { IContactTextElements } from '../../../../../../../../interfaces/IContact.interface'

import styles from './styles/_text.module.scss'

function Texts (props: {texts: IContactTextElements[], classes?: string}) {
	const { texts, classes } = props
	
	console.log(classes)

	return (
		<>
			{
				texts.map(({ title }, index: number) => {
					return (
						<div key={index} className={classes}>
							<Title text={title} />
						</div>
					)
				})
			}
		</>
	)
}

export default Texts
