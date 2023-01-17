import React from 'react'

import styles from './styles/_work.module.scss'

function Work (props: { name: string, country: string }) {
	const { name, country } = props
	return (
		<div className="work">
			<div className="work__inner">
				<div className="work_name">{name}</div>
				<div className="work_country">{country}</div>
			</div>
		</div>
	)
}

export default Work
