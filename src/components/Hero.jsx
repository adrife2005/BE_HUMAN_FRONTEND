import '../css/components/hero.css';
import { slides } from '../data/carouselData.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
            <div  className="hero__content__container">
              <div  className= 'box__front'>
                  <div className="hero__content__img">
                    <img src="be_zumba.jpg" alt="First Image of Zumba" />
                  </div>
                    <div className="hero__content__name">
                      <p>ZUMBA</p>
                  </div>
              </div>

            </div>
              <div  className="hero__content__container">
              <div  className= 'box__front'>
                  <div className="hero__content__img">
                    <img src="be_hero_yoga.jpg" alt="First Image of Zumba" />
                  </div>
                    <div className="hero__content__name">
                      <p>YOGA</p>
                  </div>
              </div>
  
            </div>

            <div  className="hero__content__container">
              <div  className='box__front'>
                  <div className="hero__content__img">
                    <img src="be_hero_crossfit.jpg" alt="First Image of Zumba" />
                  </div>
                    <div className="hero__content__name">
                      <p>CROSSFIT</p>
                  </div>
              </div>
    
              </div>
              <div  className="hero__content__container">
              <div  className='box__front'>
                  <div className="hero__content__img">
                    <img src="be_hero_fit.jpg" alt="First Image of Zumba" />
                  </div>
                    <div className="hero__content__name">
                      <p>GYM</p>
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