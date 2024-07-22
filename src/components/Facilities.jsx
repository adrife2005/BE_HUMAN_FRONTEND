import '../css/components/facilities.css'
import { useState } from 'react'

const Facilities = () => {
  const [imageOpen, setImageOpen] = useState(false);
  const [img, setImg] = useState('')

  const openImg = (pic) => {
    document.body.style.overflowY = 'hidden'
    setImageOpen(true)
    setImg(pic)
  }

  const closeImg = () => {
    setImageOpen(false)
        document.body.style.overflowY = 'visible'
    setImg('')
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
            <img id='1'  src="./be_cardio.jpg" alt="" className='facilities__img facilities__1' onClick={() => openImg(document.getElementById('1').src)} />
            <img id='2'  src="./be_dance.jpg" alt="" className="facilities__img facilities__5"   onClick={() => openImg(document.getElementById('2').src)}/>
            <img id='3'  src="./be_crossfit.jpg" alt="" className="facilities__img facilities__2"  onClick={() => openImg(document.getElementById('3').src)} />
            <img id='4'  src="./be_gym.jpg" alt="" className="facilities__img facilities__3"  onClick={() => openImg(document.getElementById('4').src)} />
            <img id='5'  src="./be_pilates.jpg" alt="" className="facilities__img facilities__4"   onClick={() => openImg(document.getElementById('5').src)}/>
            <img id='6'  src="./be_yoga.jpg" alt="" className="facilities__img facilities__7"   onClick={() => openImg(document.getElementById('6').src)}/>
            <img id='7'  src="./be_fit.jpg" alt="" className="facilities__img facilities__6"   onClick={() => openImg(document.getElementById('7').src)}/>
            </>
          }
        </div>
      </div>
      <div onClick={closeImg} className={imageOpen ? 'facilities__showfullimg' : ''}>
        <img className='facilities__imgOpen' src={img} />
      </div>
    </section>
  )
}

export default Facilities