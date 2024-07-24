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
                            return <img src={item.src} alt={item.alt} key={idx}  className='hero__slide'/>
                          })
                    }
                </Slider>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero