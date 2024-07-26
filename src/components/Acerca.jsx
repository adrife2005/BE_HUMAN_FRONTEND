import { Link } from "react-router-dom"
import '../css/components/acerca.css'


const Acerca = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__description">
          <h2 className="about__title">Acerca de <span>Nosotros</span> </h2>
          <p className="about__details">Somos especialistas en mejorar el rendimiento deportivo y la salud física y mental a través de la práctica deportiva. <br/> <br/> “Fomentamos la salud a través del entrenamiento en diferentes disciplinas deportivas. Pesas, Crossfit, danza, entrenamiento funcional, Yoga, Pilates, etc. Todo incluido en tu cuota mensual sin cuotas de inscripción ni plazos forzosos. Tarifas especiales para deportistas, mayores, estudiantes y niños”. </p>
          <Link to='/enroll' className="btn_be_human" href="/">¡Inicia Ahora!</Link>
        </div>
        <div className="about__video">
          <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fbehumancol%2Fvideos%2F253485329073161%2F&show_text=false&width=560&t=0" width="1060" height="614" style={{ border: "none", overflow:"hidden" }}  autoPlay   ></iframe>
        </div>
      </div>
  </section>
  )
}

export default Acerca