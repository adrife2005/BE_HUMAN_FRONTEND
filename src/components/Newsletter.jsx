import '../css/components/newsletter.css'
import { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const newEmail = (e) => {
    e.preventDefault();

    const setNewEmail = {
      email
    }

    console.log(setNewEmail)
    setEmail('')
  }

  return (
    <section className='newsletter'>
      <div className="container">
        <div className="newsletter__title">
          <h3 className='newsletter__title__name'>
            Registrate y te mandaremos todas las ofertas
          </h3>
        </div>
        <div className="newsletter__input">
          <form id='email__form' onSubmit={newEmail}>
            <input type="email" id='newsletter__email' className='newsletter__email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}  required placeholder='Ingresa tu email' autoComplete='off'/>
            <button type="submit" className='btn_be_human'>Enviar</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Newsletter