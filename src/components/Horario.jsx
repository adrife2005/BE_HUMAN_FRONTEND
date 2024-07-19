import '../css/components/horario.css'

const Horario = () => {
  return (
    <section className='horario'>
      <div className="container">
        <div className="horario__mainTitle">
          <h2>Horario</h2>
        </div>
        <div className="horario__container">
          <h3 className='horario__title'>Gimnasio:</h3>
          <div className="horario__details">
            <h4 className='horario__details__title'>Lunes a Viernes:</h4>
            <h5 className='horario__details__text'>6:00 am - 10:00 pm</h5>
          </div>
          <div className="horario__details">
            <h4 className='horario__details__title'>Sábado:</h4>
            <h5 className='horario__details__text'>7:00 am - 3:00 pm</h5>
          </div>
          <div className="horario__details">
            <h4 className='horario__details__title'>Domingo:</h4>
            <h5 className='horario__details__text'>8:00 am - 3:00 pm</h5>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Horario