import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import HeaderLayout from "./layout/HeaderLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Planes from './pages/Planes'
import Equipamiento from './pages/Equipamiento'
import Horarios from "./pages/Horarios"
import Contacto from "./pages/Contacto"
import Error from './pages/Error'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HeaderLayout/>} >
        <Route path="/" element={<Home/>} />
        <Route path="/conoce" element={<About />} />
        <Route path="/planes" element={<Planes />} />
        <Route path="/equipamiento" element={<Equipamiento />} />
        <Route path="/ubicacion" element={<Horarios />} />
        <Route path="/enroll" element={<Contacto />} />
        <Route path="*" element={<Error/>} />
      </Route>
    )
  )

  return <RouterProvider router={router}/>
}

export default App
