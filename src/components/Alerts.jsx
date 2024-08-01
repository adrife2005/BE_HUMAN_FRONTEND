import "../css/components/alerts.css"
import { LiaQuestionSolid } from "react-icons/lia";
import { BsQuestion } from "react-icons/bs";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa6";



const Alerts = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [msg, setMsg] = useState('');

  const openInfo = () => {
    setIsOpen((prev) => !prev)
  }

  const submitMsg = (e) => {
    e.preventDefault()
    setMsg('')
  }

  return (
    <>
      <div onClick={openInfo} className="bot__info">
        <div className="bot__box">
          { isOpen ? <MdOutlineKeyboardArrowDown className="bot__info__icon" />  : <BsQuestion className="bot__info__icon"/> }
        </div>
      </div>

        <div className={isOpen ? 'bot__content' : 'bot__content__hidden'}>
          <div className="bot__content__container">
            <div className="bot__content__title">
              <h3>Preguntas Frecuentes</h3>
            </div>
            <div className="bot__content__description">
              <span className="bot__content__description__faq">¿Donde me puedo inscribir?</span>
              <span className="bot__content__description__faq">¿Tengo que pagar inscripcion?</span>
              <span className="bot__content__description__faq">¿Donde se encuentran?</span>
              <span className="bot__content__description__faq">¿Cuentan con entrenadores?</span>
            </div>
            <div className="bot__input">
              <form onSubmit={submitMsg}>
                <input type="text" className="bot__input__text" autoComplete="off" placeholder="Message..." value={msg} onChange={(e) => setMsg(e.target.value)} />
                <button className="bot_submit" type="submit"><FaArrowUp/>
                </button>
              </form>
            </div>
          </div>
        </div>
    </>
  )
}

export default Alerts