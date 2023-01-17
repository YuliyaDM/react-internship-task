/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState } from 'react'
import SOCIAL_LINKS from '../../../../../../constants/socialLinks'
import ISocialLink from '../../../../../../interfaces/ISocialLink.interface'

import styles from './styles/_social-links.module.scss'

function SocialLinks () {
  // eslint-disable-next-line no-unused-vars
  const [default_socialLinks, updated_socialLinks] = useState<ISocialLink[]>(SOCIAL_LINKS)

  const setActiveSocialLink = (event: React.MouseEvent<HTMLElement, MouseEvent>, color: string) => {
    const parent = event.currentTarget.parentElement as HTMLElement
    const element = event.currentTarget

    for (let i: number = 0, children = parent.children, parentLen = children.length; i < parentLen; i++) {
      // @ts-ignore
      children[i].style.color = ''
    }

    element.style.color = color
  }

  const openLink = (link: string): void => {
    setTimeout(() => {
      window.open(link, '_blank')
    }, 1000)
  }

  return (
	<>
		  <div className={styles.socials}>
			<div className="title"></div>
			<div className="main-info">
				{
					default_socialLinks.map((socialLink: ISocialLink, index: number) => {
					  return (
						<address className={styles.social} onClick={event => setActiveSocialLink(event, socialLink.color)} key={index}>
							<a className="social__title" onClick={() => openLink(socialLink.link)}>{socialLink.title}</a>
						</address>
					  )
					})
				}
			</div>
		</div>
	</>
  )
}

export default SocialLinks
