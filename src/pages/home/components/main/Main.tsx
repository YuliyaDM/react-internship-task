import React from 'react'
import { Expertise } from './lists/expertises'
import { FeaturesWorks } from './lists/featuredWorks'

import './style/Main.module.sass'

export default function Main (props: { featuredWorksList: FeaturesWorks[], expertisesList: Expertise[] }) {
  const { featuredWorksList, expertisesList } = props

  return (
    <main className="main">
        <section className="featured-works">
            <div className="description">
                <div className="description__title">Featured Works</div>
                <div className="description__info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem blanditiis nisi veniam molestiae quis repellat, maxime, officia recusandae ducimus molestias perspiciatis maiores, cupiditate nobis deleniti odio explicabo vel quae eos!</div>
                <div className="description__data">2021-2022</div>
            </div>
            <div className="works">
                  {featuredWorksList.map((work: FeaturesWorks, index) => {
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
                {expertisesList.map((expertises: Expertise, index: number) => {
                  return (
                    <div className="expertise" key={index}>
                          <div className="expertise-image-container">{expertises.img}</div>
                        <div className="expertise-info">
                              <div className="title">{expertises.title}</div>
                            <div className="experience-info">
                                  <div className="experience-years">{expertises.experience.years}</div>
                                  <div className="experience-portfolio-amount">{expertises.experience.portfolio_amount}</div>
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
