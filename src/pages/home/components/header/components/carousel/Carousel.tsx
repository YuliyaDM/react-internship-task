import React from 'react'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './styles/_additional-styles.scss'
import styles from './styles/_carousel.module.scss'

import { Carousel } from 'react-responsive-carousel'

class DemoCarousel extends React.Component<{}, {}> {
	render () {
		return (
			<div className={styles.carousel}>
				<div className={styles.carousel__container}>
					<Carousel emulateTouch={true} showArrows={true} showStatus={true} showThumbs={false} transitionTime={500} infiniteLoop={true} >
						{[...Array(4)].map((el, index: number) => {
							const imageUrl = `../../../../../../../assets/images/author/author_${index}.avif`
							return ( 
								<div className={styles.carousel__image} key={index}>
									<img src={require(`../../../../../../assets/images/author/author_${index + 1}.avif`)} style={{ pointerEvents: 'none' }} />
								</div>
							)
						})}
					</Carousel>
				</div>
			</div>
		)
	}
}

export default DemoCarousel
