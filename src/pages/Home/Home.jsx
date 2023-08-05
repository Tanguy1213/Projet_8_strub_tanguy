import React from 'react'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import data from '../../datas/logements.json'
import Footer from '../../components/Footer/Footer'
import ImgBanner1 from '../../assets/images/img-banner-1.jpeg'
import './home.scss'


function Home() {
  return (
    <div>
      <Header />
      <main>
        <Banner imgSrc={ImgBanner1} textEnable={true}/>
        <section className='gallerie-style'>
            {data.map((logement) => (
                <Card
                    key={logement.id}
                    id={logement.id}
                    cover={logement.cover}
                    title={logement.title} 
                />
            ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home