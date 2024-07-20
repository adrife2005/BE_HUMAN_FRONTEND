import '../css/components/coach.css'


const Coach = () => {
  return (
    <section className='coach'>
      <div className="container">
        <div className="coach__title">
          <h3 className='coach__title__text'>Conoce a nuestros instructores</h3>
        </div>
        <div className="staff__container" data-carousel>
            <button id="left" className="staff__carousel__btn prev">&#8656;</button>
            <button id="right" className="staff__carousel__btn next">&#8658;</button>
            <div className="staff__carousel">
              <div className="staff__card" data-active>
                <div className="staff__card__img">
                  <span className="overlap"></span>
                  <div className="staff__img">
                    <img src="./be_staff_1.jpg" alt="img staff 1" className="staff__image" draggable="false" />
                  </div>
                </div>
                <div className="staff__card__content">
                  <h2 className="staff__name">Uriel Solis</h2>
                  <p className="staff__description">¡Desafía tus límites, aumenta tu fuerza y logra tus metas con el coach Uriel!💪🏼. <br/> <br/>CROSSFIT💥
                    -Lunes a viernes
                  -Clases: 5, 6:15, 7:30 y 8:45 en el turno vespertino.🏋🏻‍♀️</p>
                  <button className="btn">View More</button>
                </div>
            </div>
              <div className="staff__card" data-active>
                <div className="staff__card__img">
                  <span className="overlap"></span>
                  <div className="staff__img">
                    <img src="./be_staff_2.jpg" alt="img staff 1" className="staff__image" draggable="false" />
                  </div>
                </div>
                <div className="staff__card__content">
                  <h2 className="staff__name">Verito</h2>
                  <p className="staff__description">¡Ponle sabor a tu semana cada mañana, baila al ritmo de la coach Verito!💃 <br /> <br />
                    Be dance de lunes a viernes 7:00 A.M.</p>
                  <button className="btn">View More</button>
                </div>
              </div>
              <div className="staff__card" data-active="">
                <div className="staff__card__img">
                  <span className="overlap"></span>
                  <div className="staff__img">
                    <img src="./be_staff_3.jpg" alt="img staff 1" className="staff__image" draggable="false" />
                  </div>
                </div>
                <div className="staff__card__content">
                  <h2 className="staff__name">Adrián</h2>
                  <p className="staff__description">¡Encuentra el equilibrio de tu cuerpo y tu mente con el coach Adrián!🧘🏼‍♂️
                    <br /> <br />
                    YOGA✨
                    -Lunes a viernes
                    -Clases: 8 y 9 AM 🧘🏼‍♂️👏🏼</p>
                  <button className="btn">View More</button>
                </div>
              </div>
              <div className="staff__card" data-active="">
                <div className="staff__card__img">
                  <span className="overlap"></span>
                  <div className="staff__img">
                    <img src="./be_staff_4.jpg" alt="img staff 1" className="staff__image" draggable="false" />
                  </div>
                </div>
                <div className="staff__card__content">
                  <h2 className="staff__name">Saharim</h2>
                  <p className="staff__description">
                    Entrena con nuestra coach Saharim en el turno de la mañana de lunes a viernes!💯
                    <br /> <br />
                    CROSSFIT💥
                    Clases: 6,7,8 y 9 AM!💪🏼</p>
                  <button className="btn">View More</button>
                </div>
              </div>
              <div className="staff__card" data-active="">
                <div className="staff__card__img">
                  <span className="overlap"></span>
                  <div className="staff__img">
                    <img src="./be_staff_5.jpg" alt="img staff 1" className="staff__image" draggable="false" />
                  </div>
                </div>
                <div className="staff__card__content">
                  <h2 className="staff__name">Karla</h2>
                  <p className="staff__description">¡Es nuestro deber orientar para lograr tus objetivos!💪🏼🏋🏻‍♀️
                    <br />
                    Ven y entrenar con nuestra coach Karla en el turno de la mañana de lunes a viernes ✅💥</p>
                  <button className="btn">View More</button>
                </div>
              </div>
              <div className="staff__card" data-active="">
                <div className="staff__card__img">
                  <span className="overlap"></span>
                  <div className="staff__img">
                    <img src="./be_staff_6.jpg" alt="img staff 1" className="staff__image" draggable="false" />
                  </div>
                </div>
                <div className="staff__card__content">
                  <h2 className="staff__name">Fernando</h2>
                  <p className="staff__description">Todo esfuerzo vale la pena, no dudes en comenzar tu vida fit con la ayuda de nuestro coach Fernando!🔥💪🏼 <br /> <br /> <br /></p>
                  <button className="btn">View More</button>
                </div>
              </div>
              <div className="staff__card" data-active="">
                <div className="staff__card__img">
                  <span className="overlap"></span>
                  <div className="staff__img">
                    <img src="./be_staff_7.jpg" alt="img staff 1" className="staff__image" draggable="false" />
                  </div>
                </div>
                <div className="staff__card__content">
                  <h2 className="staff__name">Arturo</h2>
                  <p className="staff__description">¡Cambia tu estilo de vida con nuestro coach Arturo! 💪💯 <br /> <br /> ✅Él te espera de lunes a viernes en el turno vespertino de 2:00 a 10:00 pm 💥</p>
                  <button className="btn">View More</button>
                </div>
              </div>
              <div className="staff__card" data-active="">
                <div className="staff__card__img">
                  <span className="overlap"></span>
                  <div className="staff__img">
                    <img src="./be_staff_8.jpg" alt="img staff 1" className="staff__image" draggable="false" />
                  </div>
                </div>
                <div className="staff__card__content">
                  <h2 className="staff__name">Adriana Rodríguez</h2>
                  <p className="staff__description">¡Hoy inicia con toda la actitud!💯
                    Coach Adriana Rodríguez💪 <br /> <br />
                    Entrena con ella de lunes a viernes en horario de 6 A.M a 2 P.M.</p>
                  <button className="btn">View More</button>
                </div>
              </div>
              <div className="staff__card" data-active="">
                <div className="staff__card__img">
                  <span className="overlap"></span>
                  <div className="staff__img">
                    <img src="./be_staff_10.jpg" alt="img staff 1" className="staff__image" draggable="false" />
                  </div>
                </div>
                <div className="staff__card__content">
                  <h2 className="staff__name">Recepcionistas</h2>
                  <p className="staff__description">¡Este nuevo año cumple todos tus objetivos, ven y conoce nuestras instalaciones. 💯
                    ✅Acércate con nuestro staff que te apoyará con la información necesaria!✅</p>
                  <button className="btn">View More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
     </section>
  )
}

export default Coach