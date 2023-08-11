import React from 'react'
import { Link } from 'react-router-dom';
import './card.scss'

function Card({ id, cover, title }) {
  return (
    <Link to={`/Logements/${id}`}>
      <figure className='card-box'>
        <div className="card-overlay"></div>
        <figcaption className='card-title'>{title}</figcaption>
        <img className='card-img' src={cover} alt='' />
      </figure>
    </Link>
  )
}

export default Card