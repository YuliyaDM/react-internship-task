/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './style/Footer.module.sass'

export default function Footer () {
  const [default_socialLinks, updated_socialLinks] = useState<string | null>()

  const setActiveSocialLink = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    console.log(event)
    updated_socialLinks('active')
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
                    <address className="social" onClick={event => setActiveSocialLink(event)}>
                        <a href="https://forexample.com" className="social__title">Telegram</a>
                    </address>
                    <address className="social">
                        <a href="https://forexample.com" className="social__title">Linkedin</a>
                    </address>
                    <address className="social">
                        <a href="https://forexample.com" className="social__title">Github</a>
                    </address>
                    <address className="social">
                        <a href="https://forexample.com" className="social__title">Discord</a>
                    </address>
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
