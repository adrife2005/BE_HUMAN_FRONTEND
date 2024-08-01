import '../css/components/contacto.css'
import { useState } from 'react';
import { toast } from "react-toastify"


const Contacto = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [msg, setMsg] = useState('')
  const [isFocusEmail, setIsFocusEmail] = useState(false)
  const [isFocusName, setIsFocusName] = useState(false)
  const [isFocusPhone, setIsFocusPhone] = useState(false)
  const [isFocusSubject, setIsFocusSubject] = useState(false)
  const [isFocusMsg, setIsFocusMsg] = useState(false)

  const bodyMessage = `Full Name: ${name} <br> Email: ${email} <br> Phone Number: ${phone} Message: ${msg}`



  function sendEmail(e) {
    e.preventDefault()


    Email.send({
      SecureToken: "6766495d-4839-44f4-a17e-825ff979e7cf",
      To : 'adrifecova@gmail.com',
      From : "adrifecova@gmail.com'",
      Subject : subject,
      Body : bodyMessage
  }).then(
    message => {
      if (message === "OK") {
        toast.success('Se envio exitosamente')
      } else if (message === "Mailbox name not allowed. The server response was: Envelope FROM 'adrifecova@gmail.com'' email address not allowed.") {
        toast.error('No se envio correctamente')
      } else {
        console.log(message);
      }
    }
    );


    
    setName('')
    setEmail('')
    setPhone('')
    setSubject('')
    setMsg('')
    setIsFocusEmail(false)
    setIsFocusName(false)
    setIsFocusPhone(false)
    setIsFocusSubject(false)
    setIsFocusMsg(false)
  }



  return (
    <section className="contact">
      <div className="contact__container">
        <div className="contact__images">
          <img className="contact__images__1" src="./be_contact_1.jpg" alt="First Image" />
          <img className="contact__images__2" src="./be_contact_2.jpg" alt="Second Image" />
          <img className="contact__images__3" src="./be_contact_3.jpg" alt="Third Image" />
        </div>
        <div className="contact__info">
          <h3 className='contact__info__title'>
            Contactanos
          </h3>
          <p className='contact__info__description'>
          Asegúrate de llenar todos los campos con la información correcta, gracias.
          </p>
        <form onSubmit={sendEmail} className="contact__form">
          <div onFocus={() => setIsFocusName(true)} className="form__container">
            <input id='name' type="text" value={name} className='form__container__input' autoComplete='off' onChange={(e) => setName(e.target.value)} required/>
            <label htmlFor="name" className={isFocusName ? 'label__text label__text__focus' : 'label__text'}>Nombre</label>
          </div>
          <div onFocus={() => setIsFocusEmail(true)}  className="form__container">
            <input  id='email' type="email" value={email} className='form__container__input' autoComplete='off' onChange={(e) => setEmail(e.target.value)} required/>
              <label htmlFor="email" className={isFocusEmail ? 'label__text label__text__focus' : 'label__text'}>Email</label>
          </div>
          <div onFocus={() => setIsFocusPhone(true)} className="form__container">
            <input id='phone' type="number" value={phone} className='form__container__input'autoComplete='off' onChange={(e) => setPhone(e.target.value)} required />
            <label htmlFor="phone"  className={isFocusPhone ? 'label__text label__text__focus' : 'label__text'}>Numero</label>
          </div>
          <div onFocus={() => setIsFocusSubject(true)} className="form__container">
            <input id='subject' type="text" value={subject} className='form__container__input' autoComplete='off' onChange={(e) => setSubject(e.target.value)} required/>
            <label htmlFor="subject" className={isFocusSubject ? 'label__text label__text__focus' : 'label__text'}>Asunto</label>
          </div>
          <div onFocus={() => setIsFocusMsg(true)} className="form__container">
            <textarea name="Welcome" id="msg" value={msg} className='form__container__msg' autoComplete='off' onChange={(e) => setMsg(e.target.value)}></textarea>
            <label htmlFor="msg" className={isFocusMsg ? 'label__text__msg label__text__focus__msg' : 'label__text__msg'}>Mensaje</label>
            </div>
            <button type="submit" className='btn_be_human'>Enviar</button>
        </form>

        </div>
      </div>
    </section>
  )
}

export default Contacto