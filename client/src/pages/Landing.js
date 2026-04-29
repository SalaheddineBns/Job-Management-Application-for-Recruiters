import React from 'react'
import { Link } from 'react-router-dom'
import main from '../assets/images/Compulog.svg'
import Wrapped from '../assets/wrappers/LandingPage'
import {Logo} from '../components'
const Landing = () => {
  return (
    <Wrapped>
        <nav>
            <Logo/>
        </nav>
        <div className='container page'>
         <div className='info'>
          <h1>
            join <span>Opportune</span> App
          </h1>
          <p>
        Find, manage, and track job opportunities — all in one place.
Opprtune is a smart job management platform designed for recruiters and hiring teams to post offers, review applications, and hire faster.
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
          
         </div>
         <img src={main} alt="Job hunt" className='img main-img'/>
        </div>
    </Wrapped>
  )
}


export default Landing