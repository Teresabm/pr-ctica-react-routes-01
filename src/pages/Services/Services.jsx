import React from 'react'
import imageDesign from '../../assets/icon-uiux.svg'
import imageDesignWeb from '../../assets/icon-design-web.svg'
import imageDev from '../../assets/icon-development.svg'
export default function Services() {
  return (
    <section className="services">
      <div className="services-items">
        <div className="services-item design">
          <div className="services-content-item">
            <figure className="services-icon">
              <img src={imageDesign} alt='Ui/Ux Design'/>
            </figure>
            <div className="services-info">
              <h4>UI/UX Design</h4>
              <p>
              another paragraph of proof text to describe in detail the services being provided
              </p>
            </div>
          </div>
        </div>
        <div className="services-item web">
          <div className="services-content-item">
            <figure className="services-icon">
              <img src={imageDesignWeb} alt='Design Web'/>
            </figure>
            <div className="services-info">
              <h4>Design Web</h4>
              <p>
              another paragraph of proof text to describe in detail the services being provided
              </p>
            </div>
          </div>
        </div>
        <div className="services-item dev">
          <div className="services-content-item">
            <figure className="services-icon">
              <img src={imageDev} alt='Development'/>
            </figure>
            <div className="services-info">
              <h4>Development</h4>
              <p>
              another paragraph of proof text to describe in detail the services being provided
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
