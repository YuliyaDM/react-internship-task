import React, { useState, lazy } from 'react'
import NAVS_LIST from '../../../../../../constants/navsList'

const Nav = lazy(() => import('./components/Nav'))

import styles from './styles/_navigation.module.scss'

function Navigation () {
  const navList = NAVS_LIST

  return (
	<nav className={styles.navigation}>
		<div className={styles.navigation__container}>
			<div className={styles.navigation__inner}>
				  {navList.map(({ title, linkTo }, index: number) => <Nav title={title} linkTo={linkTo} key={index} />) }
			</div>
		</div>
    </nav>
  )
}

export default Navigation
