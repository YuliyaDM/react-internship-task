/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import expertises from '../../../../constants/expertises'
import featuredWorks from '../../../../constants/featuredWorks'
import IExpertise from '../../../../interfaces/IExpertise.interface'
import IFeaturesWork from '../../../../interfaces/IFeaturesWork.interface'
import './style/Main.module.scss'

export default function Main () {
  const [default_featuredWorks, updated_featuredWorks] = useState(featuredWorks)
  const [default_expertisesList, updated_expertisesList] = useState(expertises)

  return (
    <main className="main">
        <section className="featured-works">
            <div className="description">
                <div className="description__title">Featured Works</div>
                <div className="description__info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem blanditiis nisi veniam molestiae quis repellat, maxime, officia recusandae ducimus molestias perspiciatis maiores, cupiditate nobis deleniti odio explicabo vel quae eos!</div>
                <div className="description__data">2021-2022</div>
            </div>
            <div className="works">
                  {default_featuredWorks.map((work: IFeaturesWork, index: number) => {
                    return (
                        <div key={index} className="work">
                            <div className="work__title">{work.title}</div>
                            <div className="work__data">{work.date}</div>
                        </div>
                    )
                  }) }
            </div>
        </section>
        <section className="expertises">
            <div className="expertises__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, vitae a enim sint illum repudiandae pariatur totam sit ratione consectetur libero et architecto commodi, possimus aperiam exercitationem iste atque deserunt.
            </div>
            <div className="expertises__list">
                {default_expertisesList.map((expertises: IExpertise, index: number) => {
                  return (
                    <div className="expertise" key={index}>
                      <div className="expertise__image">
                        <div className="expertise-image__container">{expertises.img}</div>
                        <div className="expertise-image__index">{ index }</div>
                      </div>
                      <div className="expertise-info">
                        <div className="expertise-info__title">{expertises.title}</div>
                        <div className="expertise-info__experience">
                          <div className="expertise-info__experience-years">
                            <div className="experience-years__title">
                              Years
                            </div>
                            <div className="experience-year__info">
                              {expertises.experience.years}
                            </div>
                          </div>
                          <div className="expertise-info__experience-portfolio-amount">
                            <div className="experience-portfolio-amount__title">
                              Portfolio
                            </div>
                            <div className="experience-portfolio-amount__info">
                              {expertises.experience.portfolio_amount}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
            </div>
        </section>
    </main>
  )
};
