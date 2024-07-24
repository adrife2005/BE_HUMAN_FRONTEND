import '../css/components/hero.css';
import { slides } from '../data/carouselData.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';

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
  const [openAnimation1, setOpenAnimation1] = useState(false);
  const [openAnimation2, setOpenAnimation2] = useState(false);
  const [openAnimation3, setOpenAnimation3] = useState(false);
  const [openAnimation4, setOpenAnimation4] = useState(false);

  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
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
          <div onMouseOver={() => setOpenAnimation1((prev) => !prev)} onMouseOut={() => setOpenAnimation1((prev) => !prev)} className="hero__content__container">
            <div  className={openAnimation1 ? 'box__front__invisible' : 'box__front'}>
                <div className="hero__content__img">
                  <img src="be_zumba.jpg" alt="First Image of Zumba" />
                </div>
                  <div className="hero__content__name">
                    <p>ZUMBA</p>
                </div>
            </div>
            <div  className={openAnimation1 ? 'box__back' : 'box__back__invisible'}>
              <h1>Welcome World</h1>
            </div>
          </div>
            <div onMouseOver={() => setOpenAnimation2((prev) => !prev)} onMouseOut={() => setOpenAnimation2((prev) => !prev)} className="hero__content__container">
            <div  className={openAnimation2 ? 'box__front__invisible' : 'box__front'}>
                <div className="hero__content__img">
                  <img src="be_hero_yoga.jpg" alt="First Image of Zumba" />
                </div>
                  <div className="hero__content__name">
                    <p>YOGA</p>
                </div>
            </div>
            <div  className={openAnimation2 ? 'box__back' : 'box__back__invisible'}>
              <h1>Welcome World</h1>
            </div>
          </div>

          <div onMouseOver={() => setOpenAnimation3((prev) => !prev)} onMouseOut={() => setOpenAnimation3((prev) => !prev)} className="hero__content__container">
            <div  className={openAnimation3 ? 'box__front__invisible' : 'box__front'}>
                <div className="hero__content__img">
                  <img src="be_hero_crossfit.jpg" alt="First Image of Zumba" />
                </div>
                  <div className="hero__content__name">
                    <p>CROSSFIT</p>
                </div>
            </div>
            <div  className={openAnimation3 ? 'box__back' : 'box__back__invisible'}>
              <h1>Welcome World</h1>
            </div>
            </div>
            <div onMouseOver={() => setOpenAnimation4((prev) => !prev)} onMouseOut={() => setOpenAnimation4((prev) => !prev)} className="hero__content__container">
            <div  className={openAnimation4 ? 'box__front__invisible' : 'box__front'}>
                <div className="hero__content__img">
                  <img src="be_hero_fit.jpg" alt="First Image of Zumba" />
                </div>
                  <div className="hero__content__name">
                    <p>GYM</p>
                </div>
            </div>
            <div  className={openAnimation4 ? 'box__back' : 'box__back__invisible'}>
              <h1>Welcome World</h1>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero