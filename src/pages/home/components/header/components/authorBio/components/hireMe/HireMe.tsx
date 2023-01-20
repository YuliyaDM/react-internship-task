import React from 'react'
import Button from '../../../../../../../../components/button/Button'

import styles from './styles/_hire-me.module.scss'

function HireMe () {
	return (
		<Button text='Hire me' className={styles['hire-me']} href="mailto:juliapirogova03@gmail.com" />
	)
}

export default HireMe
