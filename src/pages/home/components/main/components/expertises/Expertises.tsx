/* eslint-disable no-tabs */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react'
import IExpertise from '../../../../../../interfaces/IExpertise.interface'
import EXPERTISES from '../../../../../../constants/expertises'

import styles from './styles/_expertises.module.scss'
import Property from '../../../../../../components/property/Property'
import Title from '../../../../../../components/title/Title'

function Expertises () {
  return (
	<section className={styles.expertises}>
		<div className={styles.expertises__container}>
			<div className={styles.expertises__inner}>
				<div className="expertises__description">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, vitae a enim sint illum repudiandae pariatur totam sit ratione consectetur libero et architecto commodi, possimus aperiam exercitationem iste atque deserunt.
				</div>
				<div className="expertises__list">
					{EXPERTISES.map((expertises: IExpertise, index: number) => {
					const { experience, img, title } = expertises

					return (
						<div className="expertise" key={index}>
							<div className="expertise-image">
								<div className="expertise-image__inner">
									<img src={require(`../../../../../../assets/images/proffessions/${img}`)} alt="Art director" />
								</div>
								<Title className="expertise-image__index" text={ ((index + 1) < 10) ? `0${index + 1}` : `${index + 1}` } />
							</div>
							<div className="expertise-info">
								<div className="expertise-info__title">{title}</div>
								<div className="expertise-info__experience">
									<div className="expertise-info__experience-years">
										<Property text='Experience' />
										<Title className="experience-year__info" text={`${experience.years} years`} />
									</div>
									<div className="expertise-info__experience-portfolio-amount">
										<Property text='Portfolio'/>
										<Title className="experience-portfolio-amount__info" text={`${experience.portfolio_amount}`} />
									</div>
								</div>
							</div>
						</div>
					)
					})}
				</div>
			</div>
		</div>
	</section>
  )
}

export default Expertises
