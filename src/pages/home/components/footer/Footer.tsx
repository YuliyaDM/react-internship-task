/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import socialLinks from '../../../../constants/socialLinks'
import ISocialLink from '../../../../interfaces/ISocialLink.interface'
import './style/Footer.module.sass'

export default function Footer () {
  const [default_socialLinks, updated_socialLinks] = useState<ISocialLink[]>(socialLinks)

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
    console.log(link)
    setTimeout(() => {
      window.open(link, '_blank')
    }, 1000)
  }

  return (
    <div className="footer">
        <div className="gmail-link">
              <a href="mailto:juliapirogova03@gmail.com">hello@danielbanquo.com</a>
              <div className="open-button"></div>
        </div>
        <div className="author-contacts">
            <address className="contact-details">
                <div className="title">Contact details</div>
                <div className="main-info">+380 (98) 89 57 367</div>
            </address>
            <div className="socials">
                <div className="title"></div>
                <div className="main-info">
                    {
                        default_socialLinks.map((socialLink: ISocialLink, index: number) => {
                          return (
                            <address className="social" onClick={event => setActiveSocialLink(event, socialLink.color)} key={index}>
                                <a className="social__title" onClick={() => openLink(socialLink.link)}>{socialLink.title}</a>
                            </address>
                          )
                        })
                    }
                </div>
            </div>
            <div className="location">
                <div className="title">Location</div>
                <div className="main-info">Netherlands</div>
            </div>
        </div>
    </div>
  )
};
