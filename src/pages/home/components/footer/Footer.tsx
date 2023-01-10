import React from 'react'
import './style/Footer.module.sass'

export default function Footer () {
  return (
    <div className="footer">
        <div className="gmail-link">
              <a href="mailto:juliapirogova03@gmail.com">hello@danielbanquo.com</a>
              <div className="open-button"></div>
        </div>
        <div className="author-contacts">
            <div className="contact-details">
                <div className="title">Contact details</div>
                <div className="main-info">+380 (98) 89 57 367</div>
            </div>
            <div className="socials">
                <div className="title"></div>
                <div className="main-info">
                    <div className="social">
                        <div className="title">Telegram</div>
                        <div className="main-info"></div>
                    </div>
                    <div className="social">
                        <div className="title">Linkedin</div>
                        <div className="main-info"></div>
                    </div>
                    <div className="social">
                        <div className="title">Github</div>
                        <div className="main-info"></div>
                    </div>
                    <div className="social">
                        <div className="title">Discord</div>
                        <div className="main-info"></div>
                    </div>
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
