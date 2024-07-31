import '../css/components/facilities.css'
import { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Facilities = () => {
  const arrImages = ['./be_cardio.jpg', './be_dance.jpg', './be_crossfit.jpg', './be_gym.jpg', './be_pilates.jpg', './be_yoga.jpg', './be_fit.jpg']
  const [imageOpen, setImageOpen] = useState(false);

  const openImg = () => {
    document.body.style.overflowY = 'hidden'
    setImageOpen(true)
  }

  const closeImg = () => {
    setImageOpen(false)
    document.body.style.overflowY = 'visible'
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <section className='facilities'>
      <div className="facilities__container">
        <div className="facilities__logo">
          <h3 className='facilities___title'>Instalaciones</h3>
          <p className='facilities__description'>En <span>Be Human</span> contamos con la mejor tecnología life fitness para facilitar y aumentar tu desempeño físico.
            Cuidamos cada detalle para ofrecerte espacios de entrenamiento y relajación de calidad. Conoce nuestro gimnasio, salones y area libre.
          </p>
        </div>
        <div className="facilities__posts">
          {
            <>
            <img id='1'  src="./be_cardio.jpg" alt="" className='facilities__img facilities__1'  onClick={() => openImg()} />
            <img id='2'  src="./be_dance.jpg" alt="" className="facilities__img facilities__5"    onClick={() => openImg()}/>
            <img id='3'  src="./be_crossfit.jpg" alt="" className="facilities__img facilities__2"  onClick={() => openImg()} />
            <img id='4'  src="./be_gym.jpg" alt="" className="facilities__img facilities__3"   onClick={() => openImg()} />
            <img id='5'  src="./be_pilates.jpg" alt="" className="facilities__img facilities__4"    onClick={() => openImg()}/>
            <img id='6'  src="./be_yoga.jpg" alt="" className="facilities__img facilities__7"   onClick={() => openImg()}/>
            <img id='7'  src="./be_fit.jpg" alt="" className="facilities__img facilities__6"    onClick={() => openImg()}/>
            </>
          }
        </div>
      </div>
      <div className={imageOpen ? 'facilities__showfullimg' : ''}>
      <div className="slider-container">
          {imageOpen ?
          <Slider {...settings}>
                {arrImages.map((img, inx) =>
                  <img key={inx} className={'facilities__imgOpen'}  src={img} />
                )}
            </Slider> : null
          }
        </div>
        <IoMdClose onClick={() => closeImg()} className={imageOpen ? "facilities__close__img" : 'facilities__close__img__close'}></IoMdClose>
      </div>
    </section>
  )
}

export default Facilities