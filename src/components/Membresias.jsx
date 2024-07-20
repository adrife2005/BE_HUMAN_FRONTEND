import { Link } from 'react-router-dom'
import '../css/components/membresias.css'

const Membresias = () => {
  return (
    <section className='membresia'>
      <div className="container">
        <div className="membresia__logo">
            <h3 className='membresia___title'>Membresías</h3>
            <p className='membresia__description'>Aceptamos pagos en efectivo, tarjeta de crédito y débito. Los pagos e inscripciones se realizan en recepción del gimnasio.</p>
        </div>
        <div className="membresia__container">
          <div className="membresia__card">
            <h3 className="membresia__title">VISITA</h3>
            <div className="membresia__details">
              <p>MembresÍa: $70/dia <span>mxn</span></p>
              <p>Cuota de inscripción: $0 <span>mxn</span></p>
            </div>
            <Link to='/enroll' className='btn_be_human'>Suscribete</Link>
            <div className='membresia__precio'>$70.00</div>
          </div>
          <div className="membresia__card">
            <h3 className="membresia__title">SEMANA</h3>
            <div className="membresia__details">
              <p>MembresÍa: $190/semana <span>mxn</span></p>
              <p>Cuota de inscripción: $0 <span>mxn</span></p>
            </div>
            <Link to='/enroll' className='btn_be_human'>Suscribete</Link>
            <div className='membresia__precio'>$190.00</div>
          </div>
          <div className="membresia__card">
            <h3 className="membresia__title">QUINCENA</h3>
            <div className="membresia__details">
              <p>MembresÍa: $315/quincena <span>mxn</span></p>
              <p>Cuota de inscripción: $0 <span>mxn</span></p>
            </div>
            <Link to='/enroll'className='btn_be_human'>Suscribete</Link>
            <div className='membresia__precio'>$315.00</div>
          </div>
          <div className="membresia__card">
            <h3 className="membresia__title">MENSUALIDAD</h3>
            <div className="membresia__details">
              <p>MembresÍa: $550/mensualidad <span>mxn</span></p>
              <p>Cuota de inscripción: $0 <span>mxn</span></p>
            </div>
            <Link to='/enroll' className='btn_be_human'>Suscribete</Link>
            <div className='membresia__precio'>$550.00</div>
          </div>
          <div className="membresia__card">
            <h3 className="membresia__title">ESTUDIANTE</h3>
            <div className="membresia__details">
              <p>MembresÍa: $450/mensualidad <span>mxn</span></p>
              <p>Cuota de inscripción: $0 <span>mxn</span></p>
            </div>
            <Link to='/enroll'  className='btn_be_human'>Suscribete</Link>
            <div className='membresia__precio'>$450.00</div>
          </div>
          <div className="membresia__card">
            <h3 className="membresia__title">CROSSKIDS</h3>
            <div className="membresia__details">
              <p>MembresÍa: $430/mensualidad <span>mxn</span></p>
              <p>Cuota de inscripción: $0 <span>mxn</span></p>
            </div>
            <Link to='/enroll' className='btn_be_human'>Suscribete</Link>
            <div className='membresia__precio'>$430.00</div>
          </div>
          <div className="membresia__card">
            <h3 className="membresia__title">TRIMESTRE</h3>
            <div className="membresia__details">
              <p>MembresÍa: $1500/trimestre <span>mxn</span></p>
              <p>Cuota de inscripción: $0 <span>mxn</span></p>
            </div>
            <Link to='/enroll' className='btn_be_human'>Suscribete</Link>
            <div className='membresia__precio'>$1500.00</div>
          </div>
          <div className="membresia__card">
            <h3 className="membresia__title">SEMESTRE</h3>
            <div className="membresia__details">
              <p>MembresÍa: $2700/semestre <span>mxn</span></p>
              <p>Cuota de inscripción: $0 <span>mxn</span></p>
            </div>
            <Link to='/enroll' className='btn_be_human'>SEMESTRE</Link>
            <div className='membresia__precio'>$2700.00</div>
          </div>
      </div>
      </div>
    </section>
  )
}

export default Membresias