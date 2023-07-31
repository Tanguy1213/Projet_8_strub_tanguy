import React from 'react'
import Card from '../Card/Card'
import data from '../../datas/logements.json'
import './gallerie.scss'

function Gallerie() {
  return (
    <div>
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
    </div>
  )
}

export default Gallerie