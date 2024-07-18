import '../css/components/hero.css';
import { slides } from '../data/carouselData.json';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import { useEffect, useState } from 'react';

const Hero = () => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === slides.length - 1  ? 0  : slide + 1)
  }

  const prevSlide = () => {
    setSlide(slide === 0  ?  slides.length -1 : slide - 1)
  }
  
  useEffect(() => {
    setTimeout(() => {
      setSlide(slide === slides.length - 1  ? 0  : slide + 1)
    },5000);
  }, [slide])

  return (
    <section className="hero">
      <div className="container__hero">
          <div className="hero__carousel">
            <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide}/>
                {
                  slides.map((item, idx) => {
                    return <img src={item.src} alt={item.alt} key={idx} className={ slide === idx ? 'hero__slide' : 'hero__slide hero__slide__hidden'} />
                  })
                }
            <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide}/>
            <span className='hero__indicators'>
              {
                slides.map((_, idx) => {
                  return <button key={idx} className={slide === idx ? "hero__indicator" : "hero__indicator hero__indicator__inactive"}></button>
                })
              }
              </span>
          </div>
      </div>
    </section>
  )
}

export default Hero