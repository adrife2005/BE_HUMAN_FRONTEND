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
          <h3 className="footer__title__social">Sigenos</h3>
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
        <br/>
        <br/>
        PURCHASES ON WEBSITE.
        <br/>
        -If you register from the 5th to the 14th, your payment will be made on the 1st of the next month.
        <br/>
        -If you register from the 15th to the 24th, your payment will be made on the 10th of the next month.
        <br/>
        -If you register from the 25th to the 4th, your payment will be made on the 20th of the next month.
        <br/>
        - Promotions are not transferable to third parties.
        <br/>
        - The promotions are not cumulative.
        <br/>
        - They only apply to users without previous debts.
        <br/>
        - If you provide erroneous or incorrect information to access a promotion, it will be cancelled.
        <br/>
        - Promotions apply only to Mexican territory.
        <br/>
        - The Users acceptance when participating in any of the promotions implies knowledge and express and unreserved consent of the specific Terms and Conditions for said promotion.
        <br/>
        - Under no circumstances will promotions be substituted for cash.
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
*2024
</div>
      </section>
    </div>
    </footer>
  )
}

export default Footer