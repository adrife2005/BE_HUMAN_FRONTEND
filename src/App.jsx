import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import HeaderLayout from "./layout/HeaderLayout"
import Home from "./pages/Home"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HeaderLayout/>} >
        <Route path="/" element={<Home/>} />
      </Route>
    )
  )

  return <RouterProvider router={router}/>
}

export default App
