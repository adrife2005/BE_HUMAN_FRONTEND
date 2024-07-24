import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Alerts from "../components/Alerts"

const HeaderLayout = () => {
  return (
    <>
      <Header />
      <Alerts/>
      <Outlet/>
    </>
  )
}

export default HeaderLayout