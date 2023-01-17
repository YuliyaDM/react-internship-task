/* eslint-disable no-tabs */
/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react'
import IExpertise from '../../../../../../interfaces/IExpertise.interface'
import EXPERTISES from '../../../../../../constants/expertises'

import styles from './styles/_expertises.module.scss'

function Expertises () {
  // eslint-disable-next-line no-unused-vars
  const [default_expertisesList, updated_expertisesList] = useState(EXPERTISES)

  return (
	<section className={styles.expertises}>
        <div className="expertises__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, vitae a enim sint illum repudiandae pariatur totam sit ratione consectetur libero et architecto commodi, possimus aperiam exercitationem iste atque deserunt.
        </div>
        <div className="expertises__list">
            {default_expertisesList.map((expertises: IExpertise, index: number) => {
              const { experience, img, title } = expertises

              console.log(img)

              return (
                <div className="expertise" key={index}>
                    <div className="expertise-image">
                    <div className="expertise-image__inner">
                        <img src={require(`../../../../../../assets/images/proffessions/${img}`)} alt="Art director" />
                    </div>
                    <div className="expertise-image__index">{index + 1}</div>
                    </div>
                    <div className="expertise-info">
                    <div className="expertise-info__title">{title}</div>
                    <div className="expertise-info__experience">
                        <div className="expertise-info__experience-years">
                        <div className="experience-years__title">
                            Years
                        </div>
                        <div className="experience-year__info">
                            {experience.years}
                        </div>
                        </div>
                        <div className="expertise-info__experience-portfolio-amount">
                        <div className="experience-portfolio-amount__title">
                            Portfolio
                        </div>
                        <div className="experience-portfolio-amount__info">
                            {experience.portfolio_amount}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
              )
            })}
        </div>
	</section>
  )
}

export default Expertises
