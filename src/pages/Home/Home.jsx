import React from 'react'
import {Link} from 'react-router-dom'
import HeroImage from '../../assets/img-hero.svg'
export default function Home() {
  return (
    <section className="hero">
        <div className="hero-info">
          <div className="hero-main-info">
            <h1>Ready to start working on your project</h1>
            <p>
              Proof text containing the paragraph
              following our main title.
            </p>
          </div>
         <div className="hero-buttons">
            <Link className="btn btn--primary" to="/services">Services</Link>
            <Link className="btn btn--ghost">Contact</Link>
         </div>
        </div>
        <figure className="hero-image">
          <img src={HeroImage} alt="hero-image" className='hero-img' />
        </figure>
    </section>
  )
}
