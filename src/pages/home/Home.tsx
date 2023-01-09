import React from 'react'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import expertises from './components/main/lists/expertises'
import featuresWorks from './components/main/lists/featuredWorks'
import navsList from './components/main/lists/navsList'
import Main from './components/main/Main'

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
