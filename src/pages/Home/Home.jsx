import React from 'react'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Gallery from '../../components/Gallerie/Gallerie'
import Footer from '../../components/Footer/Footer'
import ImgBanner1 from '../../assets/images/img-banner-1.jpeg'
import './home.scss'

function Home() {
  return (
    <div>
      <div className='mise-en-page'>
      <Header />
      <Banner imgSrc={ImgBanner1} textEnable={true}/>
      <Gallery />
      </div>
      <Footer />
    </div>
  )
}

export default Home