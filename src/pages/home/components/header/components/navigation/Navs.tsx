import React, { lazy } from 'react'
import NAVS_LIST from '../../../../../../constants/navsList'
import INav from '../../../../../../interfaces/INav.interfaces'

const Nav = lazy(() => import('./components/Nav'))

import styles from './styles/_navigation.module.scss'

function Navigation () {
  const navList = NAVS_LIST

  return (
	<nav className={styles.navigation}>
		<div className={styles.navigation__container}>
			<div className={styles.navigation__inner}>
				  {navList.map((el: INav, index: number) => <Nav nav={el} key={index} />) }
			</div>
		</div>
    </nav>
  )
}

export default Navigation
