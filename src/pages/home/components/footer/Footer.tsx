import React, { useState, lazy } from 'react'

const SocialLinks = lazy(() => import('./components/socialLinks/SocialLinks'))

import styles from './style/_footer.module.scss'

export default function Footer () {
  return (
    <div className="footer">
        <div className="gmail">
            <a className='gmail__link' href="mailto:juliapirogova03@gmail.com">hello@danielbanquo.com</a>
            <div className="gmail__open-button"></div>
        </div>
        <div className="contacts">
            <address className="contacts__details">
                <div className="contacts__title">Contact details</div>
                <div className="contacts__main-info contacts--details">+380 (98) 89 57 367</div>
			</address>
			<SocialLinks />
            <div className="contacts__location">
                <div className="contacts__title">Location</div>
                <div className="contacts__main-info contacts--location">Netherlands</div>
            </div>
        </div>
    </div>
  )
};
