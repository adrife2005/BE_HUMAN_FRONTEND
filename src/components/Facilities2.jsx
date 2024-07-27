import '../css/components/facilities.css'
import { useState } from 'react'

const Facilities = () => {
  const arrImages = ['./be_ins_1.jpg', './be_ins_2.jpg', './be_ins_3.jpg', './be_ins_4.jpg', './be_ins_5.jpg', './be_ins_6.jpg', './be_ins_7.jpg', './be_ins_8.jpg', './be_ins_9.jpg','./be_ins_10.jpg', './be_ins_1.jpg', './be_ins_2.jpg', './be_ins_3.jpg']
  const [imageOpen, setImageOpen] = useState(false);

  const openImg = () => {
    document.body.style.overflowY = 'hidden'
    setImageOpen(true)
  }

  const closeImg = () => {
    document.body.style.overflowY = 'visible'
    setImageOpen(false)
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
            <img id='1'  src="./be_ins_1.jpg" alt="" className='facilities__img facilities__1' onClick={() => openImg()} />
            <img id='2'  src="./be_ins_2.jpg" alt="" className="facilities__img facilities__5"  onClick={() => openImg()} />
            <img id='3'  src="./be_ins_3.jpg" alt="" className="facilities__img facilities__2"   onClick={() => openImg()}/>
            <img id='4'  src="./be_ins_4.jpg" alt="" className="facilities__img facilities__3"  onClick={() => openImg()} />
            <img id='5'  src="./be_ins_5.jpg" alt="" className="facilities__img facilities__4"  onClick={() => openImg()}/>
            <img id='6'  src="./be_ins_6.jpg" alt="" className="facilities__img facilities__7"  onClick={() => openImg()}/>
            <img id='7'  src="./be_ins_7.jpg" alt="" className="facilities__img facilities__6"  onClick={() => openImg()}/>
            <img id='8'  src="./be_ins_8.jpg" alt="" className="facilities__img facilities__6"   onClick={() => openImg()}/>
            <img id='9'  src="./be_ins_9.jpg" alt="" className="facilities__img facilities__6"  onClick={() => openImg()} />
            <img id='10'  src="./be_ins_10.jpg" alt="" className="facilities__img facilities__6" onClick={() => openImg()} />
            </>
          }
        </div>
      </div>
      <div onClick={closeImg} className={imageOpen ? 'facilities__showfullimg' : ''}>
        <div className={imageOpen ? 'img__container' : ''}>
          { innerWidth > 500 ? '' :
            imageOpen ?
            arrImages.map((img, inx) =>
                <img key={inx} className={imageOpen ? 'facilities__imgOpen' : 'facilities__closeImg '}  src={img} />
              ) : ''
            }
        </div>
      </div>
    </section>
  )
}

export default Facilities