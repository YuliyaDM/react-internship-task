import React from 'react'
import Title from '../../../../../../../../components/title/Title'
import { IContactLinkElements } from '../../../../../../../../interfaces/IContact.interface'
import styles from './styles/_links.module.scss'

function Links (props: {links: IContactLinkElements[], classes?: string}) {
	const { links, classes } = props

	const setActiveSocialLink = (event: React.MouseEvent<HTMLElement, MouseEvent>, color: string) => {
		const parent = event.currentTarget.parentElement as HTMLElement
		const element = event.currentTarget

		for (let i: number = 0, children = parent.children, parentLen = children.length; i < parentLen; i++) {
		// @ts-ignore
		children[i].style.color = ''
		}

		element.style.color = color
  	}

	function openLink (link: string) {
		setTimeout(() => {
			window.open(link)
		}, 1000)
	}

	return (
		<>
			{
				links.map(({ color, link, title }, index: number) => {
					return (
						<a onClick={() => { openLink(link) }} key={index} className={`${classes}`}>
							<Title text={title} className={`${styles.links}`} />
						</a>
					)
				})
			}
		</>
	)
}

export default Links
