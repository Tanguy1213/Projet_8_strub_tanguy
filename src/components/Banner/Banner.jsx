import React from 'react'
import './banner.scss'

function Banner({imgSrc, textEnable}) {
  return (
    <div>
        <section className='banner-box'>
            <img src={imgSrc} alt=''></img>
            {textEnable && <h2 className='banner-title'>Chez vous, partout ailleurs</h2>}
        </section>
    </div>
  )
}

export default Banner