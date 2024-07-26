import {NavLink, useLocation} from 'react-router-dom'
import {  FaInstagram,  FaRegLightbulb, FaPhoneAlt } from 'react-icons/fa'
import { SlSocialFacebook } from "react-icons/sl";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import '../css/components/header.css'
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuActivate, setIsMobileMenuActivate] = useState(false)
  const [onScroll, setOnScroll] = useState(false)
  const location = useLocation();

  const hamburgerMenu = () => {
    setIsMobileMenuActivate(true)
  }
  const closeHamburgerMenu = () => {
    setIsMobileMenuActivate(false)
  }

  document.addEventListener('scroll', () => {
    if (scrollY >= 75) {
      setIsMobileMenuActivate(false)
      setOnScroll(true)
    } else {
      setOnScroll(false)
    }
  })


  const linkClass = ({ isActive }) =>
    !isActive
    ? 'header__item__link'
    : 'header__item__link header__item__link__fixed '

  return (
  <>
    <header className={onScroll ? 'header header__active' : 'header'} >
      <div className="header__wrapper header__container">
        <div className="header__logo">
          <NavLink to='/' className='header__title'> <img className='header__logo__img' src="./be_logo.jpg" alt="logo" /> </NavLink>
        </div>
          <nav className="header__section">
            {
              location.pathname === '/' ? '' : <NavLink className={linkClass} to='/'>Inicio</NavLink>
            }
            <NavLink className={linkClass} to='/conoce'>Conoce Be Human</NavLink>
            <NavLink className={linkClass} to='/planes'>Planes</NavLink>
            <NavLink className={linkClass} to='/equipamiento'>Equipamiento</NavLink>
            <NavLink className={linkClass} to='/enroll'>Contáctanos</NavLink>
            <NavLink className={linkClass} to='/ubicacion'>Ubicación</NavLink>
        </nav>
        <nav className="nav header__nav">
          <div className="nav__container">
            <NavLink target='_blank' to='https://www.facebook.com/behumancol' className='nav__item'> <SlSocialFacebook/></NavLink>
            <NavLink target='_blank' to='https://www.instagram.com/behumancol' className='nav__item'> <FaInstagram/></NavLink>
            <div className="nav__line"></div>
            <div className="nav__item nav__item__open"><FaRegLightbulb/></div>
            <button onClick={hamburgerMenu}  className='nav__hamburger'  >
              <div className="top"></div>
              <div className="middle"></div>
              <div className="low"></div>
            </button>
          </div>
        </nav>
      </div>
    </header>

      <div className={`sidebar ${isMobileMenuActivate ? "open" : "sidebar"}`} >
        <div  className="sidebar__container">
          <div className="sidebar__top" >
            <NavLink to='/' className='sidebar__title'> Be <span>Human</span> </NavLink>
            <button onClick={closeHamburgerMenu} className='sidebar__hamburger'>
              <div className="top"></div>
              <div className="middle"></div>
              <div className="low"></div>
            </button>
            </div>
            <div className="sidebar__button">
            <NavLink to='/enroll'><button className='btn_be_human'>¡Inscribete Ya!</button></NavLink>
            </div>
            <nav className="sidebar__section">
              <ul className="sidebar__list">
                <li onClick={() => setIsMobileMenuActivate(false)} className="sidebar__item"><NavLink className='sidebar__item__link' to='/'>Inicio</NavLink></li>
                <li onClick={() => setIsMobileMenuActivate(false)} className="sidebar__item"><NavLink className='sidebar__item__link' to='/conoce'>Conoce Be Human</NavLink></li>
                <li onClick={() => setIsMobileMenuActivate(false)} className="sidebar__item"><NavLink className='sidebar__item__link' to='/planes'>Planes</NavLink></li>
                <li onClick={() => setIsMobileMenuActivate(false)} className="sidebar__item"><NavLink className='sidebar__item__link' to='/equipamiento'>Equipamiento</NavLink></li>
                <li onClick={() => setIsMobileMenuActivate(false)} className="sidebar__item"><NavLink className='sidebar__item__link' to='/enroll'>Contáctanos</NavLink></li>
                <li onClick={() => setIsMobileMenuActivate(false)} className="sidebar__item"><NavLink className='sidebar__item__link' to='/ubicacion'>Ubicación</NavLink></li>
              </ul>
            </nav>
          <div className="sidebar__footer">
            <div className="sidebar__footer__block">
              <FaPhoneAlt className='sidebar__footer__item'/> 312-688-2492
            </div>
            <NavLink to='mailto:bhp.informacion@gmail.com' className='sidebar__footer__link' >
              <MdEmail className='sidebar__footer__item email' />bhp.informacion@gmail.com
            </NavLink>
              <NavLink to='https://maps.app.goo.gl/4UL6c61eQ45pRZnp7' className='sidebar__footer__link'>
                <FaLocationDot className='sidebar__footer__item' />
                Avenida Ankara 11, Real de Canal
            </NavLink>
          </div>
        </div>
    </div>

      <div id='opacity' className={`${isMobileMenuActivate ? "opacity" : ""}`}></div>
  </>
  )
}

export default Header