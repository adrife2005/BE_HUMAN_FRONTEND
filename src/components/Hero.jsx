import '../css/components/hero.css';
import { slides } from '../data/carouselData.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoTimeOutline } from "react-icons/io5";
import { BsLightningCharge } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display:"block", right:"25px", zIndex: "1"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left:"25px", zIndex: "1"}}
      onClick={onClick}
    />
  );
}

const Hero = () => {
  const navigate = useNavigate();


  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const goToMembresias = () => { 
    navigate('enroll')
  }

  return (
    <section className="hero">
      <div className="container__hero">
        <div className="hero__carousel">
            <div className="slider-container">
                <Slider {...settings}>
                    {
                          slides.map((item, idx) => {
                            return <img src={item.src} alt={item.alt} key={idx} className={item.style ? 'hero__slide top' : 'hero__slide ' } />
                          })
                    }
                </Slider>
            </div>
        </div>
        <div className="hero__wrapper">
          <p className='hero__content__title'>
          Vive la experiencia en Be <span>Human</span> y disfruta de las mejores clases
          </p>
          <div className="hero__content">
            <div onClick={goToMembresias}   className="hero__content__container">
              <div  className= 'box__front'>
                <div className="hero__content__img">
                    <img src="be_zumba.jpg" alt="First Image of Zumba" />
                  </div>
                    <div className="hero__content__name">
                      <p>ZUMBA</p>
                  </div>
                  <div className="hero__content__wrap">
                      <div className="duracion">
                        <IoTimeOutline />
                        <p className='hero__one'>Duración</p>
                        <p className='hero__two'>60 <span>min</span></p>
                  </div>
                  <div className="intencidad">
                        <BsLightningCharge />
                        <p className='hero__one'>Intensidad</p>
                        <p className='hero__two'>Alta</p>
                      </div>
                </div>
                <hr className='hero__content__line'/>
                <div className="hero__content__info">
                  <p>      Diviértete y combina el baile con una rutina de ejercicio al ritmo de la música, mejora tu condición y coordinación
                  </p>
                </div>
              </div>

            </div>
              <div onClick={goToMembresias}  className="hero__content__container">
              <div  className= 'box__front'>
                  <div className="hero__content__img">
                    <img src="be_hero_yoga.jpg" alt="First Image of Zumba" />
                  </div>
                    <div className="hero__content__name">
                      <p>YOGA</p>
                </div>
                <div className="hero__content__wrap">
                      <div className="duracion">
                        <IoTimeOutline />
                        <p className='hero__one'>Duración</p>
                        <p className='hero__two'>60 <span>min</span></p>
                  </div>
                  <div className="intencidad">
                        <BsLightningCharge />
                        <p className='hero__one'>Intensidad</p>
                        <p className='hero__two'>Alta</p>
                      </div>
                </div>
                <hr className='hero__content__line'/>
                <div className="hero__content__info">
                  <p>       Libera tu energía en un entrenamiento guiado que combina técnicas de artes marciales, música y ejercicio.
                  </p>
                </div>
              </div>
  
            </div>

            <div onClick={goToMembresias}    className="hero__content__container">
              <div  className='box__front'>
                  <div className="hero__content__img">
                    <img src="be_hero_crossfit.jpg" alt="First Image of Zumba" />
                  </div>
                    <div className="hero__content__name">
                      <p>CROSSFIT</p>
                </div>
                <div className="hero__content__wrap">
                      <div className="duracion">
                        <IoTimeOutline />
                        <p className='hero__one'>Duración</p>
                        <p className='hero__two'>60 <span>min</span></p>
                  </div>
                  <div className="intencidad">
                        <BsLightningCharge />
                        <p className='hero__one'>Intensidad</p>
                        <p className='hero__two'>Alta</p>
                      </div>
                </div>
                <hr className='hero__content__line'/>
                <div className="hero__content__info">
                  <p>       Circuitos de entrenamiento grupal en un área funcional, donde serás guiado por un profesor.

                  </p>
                </div>
              </div>
    
              </div>
              <div onClick={goToMembresias}    className="hero__content__container">
              <div  className='box__front'>
                  <div className="hero__content__img">
                    <img src="be_hero_fit.jpg" alt="First Image of Zumba" />
                  </div>
                    <div className="hero__content__name">
                      <p>GYM</p>
                </div>
                <div className="hero__content__wrap">
                      <div className="duracion">
                        <IoTimeOutline />
                        <p className='hero__one'>Duración</p>
                        <p className='hero__two'>60 <span>min</span></p>
                  </div>
                  <div className="intencidad">
                        <BsLightningCharge />
                        <p className='hero__one'>Intensidad</p>
                        <p className='hero__two'>Alta</p>
                      </div>
                </div>
                <hr className='hero__content__line'/>
                <div className="hero__content__info">
                  <p>      Diviértete y combina el baile con una rutina de ejercicio al ritmo de la música, mejora tu condición y coordinación
                  </p>
                </div>
              </div>

            </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Hero