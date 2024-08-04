import React from 'react'
import {Link} from 'react-router-dom'


export default function HeadLine() {
  return (
    <div className='headLine'>
        <div className="container-limit">
            <div className="logo">
                <h4>/PrcaticeTbm.</h4>
            </div>
            <div className="container-nav">
                <nav className='nav'>
                    <ul className="nav-list">
                        <li>
                            <Link to='/home'>Home</Link>
                        </li>
                        <li>
                            <Link to='/services'>Services</Link>
                        </li>
                    </ul>
                    <Link className='btn btn--primary'>Contacto</Link>
                </nav>
                
            </div>
            <div className="dinamic-nav">
                <label htmlFor="dinamic-input" className='dinamic-label'></label>
                <input type="checkbox"  id="dinamic-input" />
            </div>
        </div>
    </div>
  )
}
