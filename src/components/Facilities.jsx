import '../css/components/facilities.css'

const Facilities = () => {
  return (
    <section className='facilities'>
      <div className="facilities__container">
        <div className="facilities__logo">
          <h3 className='facilities___title'>Instalaciones</h3>
          <p className='facilities__description'>En Be Human contamos con la mejor tecnología life fitness para facilitar y aumentar tu desempeño físico.
            Cuidamos cada detalle para ofrecerte espacios de entrenamiento y relajación de calidad. Conoce nuestro gimnasio, salones y area libre.
          </p>
        </div>
        <div className="facilities__posts">
          <img src="./be_cardio.jpg" alt="" className="facilities__imag" />
          <img src="./be_crossfit.jpg" alt="" className="facilities__imag" />
          <img src="./be_gym.jpg" alt="" className="facilities__imag" />
          <img src="./be_pilates.jpg" alt="" className="facilities__imag" />
          <img src="./be_dance.jpg" alt="" className="facilities__imag" />
          <img src="./be_fit.jpg" alt="" className="facilities__imag" />
          <img src="./be_yoga.jpg" alt="" className="facilities__imag" />
        </div>
      </div>
    </section>
  )
}

export default Facilities