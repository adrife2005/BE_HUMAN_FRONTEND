import '../css/components/coach.css'
import { staff } from '../data/coachData.json'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}

const Coach = () => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    appendDots: dots => (
      <div
        style={{
          bottom: "-55px"
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        }
      }
    ]
  };

  return (
    <section className='coach'>
      <div className="container">
        <div className="coach__title">
          <h3 className='coach__title__text'>Conoce a nuestros instructores</h3>
        </div>
        <div className="coach__container">
          <div className="coach__carousel">
            <div className="slider__container">
              <Slider {...settings}>
                {
                  staff.map((staff, idx) =>
                    <div className="coach__card" key={idx}>
                        <div className="coach__card__img">
                          <span className="overlap"></span>
                          <div className="coach__img">
                              <img src={staff.src} alt="img coach 1" className="coach__image" draggable="false" />
                          </div>
                        </div>
                        <div className="coach__card__content">
                          <h2 className="coach__name">{staff.name }</h2>
                          <p className="coach__description">{staff.description.length > 100 ? staff.description.substring(0, 80) + '....' : staff.description }</p>
                        <Link to={`http://localhost:5000/${idx}`}>
                           <button className="btn_be_human">{staff.button}</button>
                        </Link>
                      </div>
                    </div>
                  )
                  }
                </Slider>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Coach