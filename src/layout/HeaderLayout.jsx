import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Alerts from "../components/Alerts"
import {ToastContainer} from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import { Analytics } from "@vercel/analytics/react"

const HeaderLayout = () => {
  return (
    <>
      <Analytics/>
      <Header />
      <Alerts/>
      <Outlet />
      <ToastContainer/>
    </>
  )
}

export default HeaderLayout