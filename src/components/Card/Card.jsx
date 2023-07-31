import React from 'react'
import { Link } from 'react-router-dom';
import './card.scss'

function Card({ id, cover, title}) {
  return (
    <Link to= {`/Logements/${id}`}>
        <figure className='card-box'>
            <img className='card-img' src={cover} alt=''></img>
            <figcaption className='card-title'>{title}</figcaption>
        </figure>
    </Link>
  )
}

export default Card