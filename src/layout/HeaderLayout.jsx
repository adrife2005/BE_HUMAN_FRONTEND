import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Alerts from "../components/Alerts"
import {ToastContainer} from 'react-toastify'
import 'react-toastify/ReactToastify.css'

const HeaderLayout = () => {
  return (
    <>
      <Header />
      <Alerts/>
      <Outlet />
      <ToastContainer/>
    </>
  )
}

export default HeaderLayout