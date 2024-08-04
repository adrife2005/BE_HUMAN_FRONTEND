import '../css/components/footer.css'
import {  FaInstagram } from 'react-icons/fa'
import { SlSocialFacebook } from "react-icons/sl";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer footer__section">
      <div className="container">
      <section className="footer__title">
        <div className="footer__container">
          <h3>Be <span>Human</span></h3>
        </div>
      </section>
      <section className="footer__conditions">
        <div className='footer__conditions1'>
            © 2024 Be Human | Todos los derechos reservados.
          </div>
          <div className='footer__conditions2'>
            <Link target="_blank" className="navbar__social"  to='https://www.facebook.com/behumancol?locale=es_LA'>   <FaInstagram className='footer__svg'/></Link>
            <Link target="_blank" className="navbar__social"  to='https://www.instagram.com/behumancol/'>  <SlSocialFacebook className='footer__svg'/></Link>
            
          </div>
      </section>
    </div>
    </footer>
  )
}

export default Footer