import React from 'react'
import expertises from '../../constants/expertises'
import featuresWorks from '../../constants/featuredWorks'
import navsList from '../../constants/navsList'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Main from './components/main/Main'

import './style/Home.module.scss'

function Home () {
  return (
    <div className="home">
        <Header navsList={navsList} />
        <Main featuredWorksList={featuresWorks} expertisesList={expertises} />
        <Footer />
    </div>
  )
}

export default Home
