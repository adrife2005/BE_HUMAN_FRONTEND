import {Link} from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLightbulb, FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import '../css/components/header.css'
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuActivate, setIsMobileMenuActivate] = useState(false)


  const hamburgerMenu = () => {
    setIsMobileMenuActivate(true)
  }
  const closeHamburgerMenu = () => {
    setIsMobileMenuActivate(false)
  }

  document.addEventListener('scroll', () => {
    if (scrollY >= 50) {
      setIsMobileMenuActivate(false)
    }
  })

  return (
  <>
    <header className="header" >
      <div className="container">
        <div className="header__logo">
          <Link to='/' className='header__title'> Be <span>Human</span> </Link>
        </div>
        <nav className="nav">
          <div className="nav__container">
            <Link target='_blank' to='https://www.facebook.com/behumancol' className='nav__item'> <FaFacebook/></Link>
            <Link target='_blank' to='https://www.instagram.com/behumancol' className='nav__item'> <FaInstagram/></Link>
            <div className="nav__line"></div>
            <FaLightbulb className='nav__toggle' />
            <button onClick={hamburgerMenu}  className='nav__hamburger'  >
              <div className="top"></div>
              <div className="middle"></div>
              <div className="low"></div>
            </button>
          </div>
        </nav>
      </div>
    </header>

      <div className={`sidebar ${isMobileMenuActivate ? "open" : ""}`} >
        <div  className="sidebar__container">
          <div className="sidebar__top" >
            <Link to='/' className='sidebar__title'> Be <span>Human</span> </Link>
            <button onClick={closeHamburgerMenu} className='sidebar__hamburger'>
              <div className="top"></div>
              <div className="middle"></div>
              <div className="low"></div>
            </button>
            </div>
            <div className="sidebar__button">
            <Link to='/enroll'><button className='btn_be_human'>Inscribete Ya</button></Link>
            </div>
            <nav className="sidebar__section">
              <ul className="sidebar__list">
                <li className="sidebar__item"><Link className='sidebar__item__link' to='/'>Inicio</Link></li>
                <li className="sidebar__item"><Link className='sidebar__item__link' to='/conoce'>Conoce Be Human</Link></li>
                <li className="sidebar__item"><Link className='sidebar__item__link' to='/planes'>Planes</Link></li>
                <li className="sidebar__item"><Link className='sidebar__item__link' to='/equipamiento'>Equipamiento</Link></li>
                <li className="sidebar__item"><Link className='sidebar__item__link' to='/contacto'>Contáctanos</Link></li>
                <li className="sidebar__item"><Link className='sidebar__item__link' to='/faq'>Preguntas Frecuentes</Link></li>
              </ul>
            </nav>
          <div className="sidebar__footer">
            <div className="sidebar__footer__block">
              <FaPhoneAlt className='sidebar__footer__item'/> 312-688-2492
            </div>
            <Link to='mailto:bhp.informacion@gmail.com' className='sidebar__footer__link' >
              <MdEmail className='sidebar__footer__item email' />bhp.informacion@gmail.com
            </Link>
              <Link to='https://maps.app.goo.gl/4UL6c61eQ45pRZnp7' className='sidebar__footer__link'>
                <FaLocationDot className='sidebar__footer__item' />
                Avenida Ankara 11, Real de Canal
            </Link>
          </div>
        </div>
    </div>

      <div id='opacity' className={`${isMobileMenuActivate ? "opacity" : ""}`}></div>
  </>
  )
}

export default Header