import React from 'react'
import { useParams } from 'react-router-dom'
import Collapse from '../../components/Collapse/Collapse'
import data from '../../datas/logements.json'
import '../Logements/logements.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Slider from '../../components/Slider/Slider'

function Logements() {
  const { id } = useParams();
  const selectedLogement = data.find(logement => logement.id === id);

  return (
    <div>
      <Header />
      <main>
      <Slider />
      <section className='section-container'>
        <div className='left-container'>
          <h2>{selectedLogement.title}</h2>
          <p>{selectedLogement.location}</p>
          <p>{selectedLogement.tags}</p>
        </div>
        <div className='right-container'>
          <div className='host'>
            <span className='host-name'>{selectedLogement.host.name}</span>
            <img src={selectedLogement.host.picture} alt={selectedLogement.host.name}/>
          </div>
        </div>
      </section>
      <section className='dropdown-section'>
        <Collapse buttonText="Description">
          <p>{selectedLogement && selectedLogement.description}</p>
        </Collapse>
        <Collapse buttonText="Equipements">
          <ul>
            {selectedLogement &&
              selectedLogement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
          </ul>
        </Collapse>
      </section>
      </main>
      <Footer />
    </div>
  );
}

export default Logements