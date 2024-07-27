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
      <section className="footer__socials">
        <div className="footer__container">
          <h3 className="footer__title__social">Siguenos</h3>
          <div className="footer__socials__items">
            <Link target="_blank" className="navbar__social"  to='https://www.facebook.com/behumancol?locale=es_LA'>   <FaInstagram className='footer__svg'/></Link>
            <Link target="_blank" className="navbar__social"  to='https://www.instagram.com/behumancol/'>  <SlSocialFacebook className='footer__svg'/></Link>
          </div>
        </div>
      </section>
      <section className="footer__links">
        <div className="footer__section1">
          <div className="footer__container">
            <h3 className="footer__section1__title">Be Human</h3>
            <ul className="footer__section1__ul">
              <li className="footer__items"><Link target="_blank" className="navbar__social" to='/'> Quien Somos ?</Link></li>
              <li className="footer__items"><Link target="_blank" className="navbar__social" to='/'> Habla con nosotros</Link></li>
              <li className="footer__items"><Link target="_blank" className="navbar__social" to='/'> Be Human nutri</Link></li>
              <li className="footer__items"><Link target="_blank" className="navbar__social" to='/'> Privacidad</Link></li>
            </ul>
          </div>
          <div className="footer__container">
           <h3 className="footer__section1__title">Nuestra compañía</h3>
             <ul className="footer__section1__ul">
               <li className="footer__items"><Link target="_blank" className="navbar__social" to='/'> Quiero ser franquiciado</Link></li>
               <li className="footer__items"><Link target="_blank" className="navbar__social" to='/'> Promocionar to marca</Link></li>
               <li className="footer__items"><Link target="_blank" className="navbar__social" to='/'> Indicar una locación</Link></li>
               <li className="footer__items"><Link target="_blank" className="navbar__social" to='/'> Trabaja con nosotros</Link></li>
             </ul>
           </div>
          <div className="footer__container">
            <h3 className="footer__section1__title">Planes</h3>
            <ul className="footer__section1__ul">
              <li className="footer__items"><Link target="_blank" className="navbar__social" to='/'> Planes</Link></li>
              <li className="footer__items"><Link target="_blank" className="navbar__social" to='/'> Documentos</Link></li>
            </ul>
         </div>
        </div>
      </section>
      <section className="footer__conditions">
        <div>
          TERMINOS Y CONDICIONES GENERALES
*2024
</div>
      </section>
    </div>
    </footer>
  )
}

export default Footer