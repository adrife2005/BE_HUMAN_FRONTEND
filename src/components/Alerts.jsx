import "../css/components/alerts.css"
import { LiaQuestionSolid } from "react-icons/lia";


const Alerts = () => {
  const openInfo = () => {
    console.log(window.innerHeight);
  }

  return (
    <>
      <div onClick={openInfo} className="bot__info">
        <div className="bot__box">
          <LiaQuestionSolid className="bot__info__icon"/>
        </div>
      </div>
    </>
  )
}

export default Alerts