import Facilities from "../components/Facilities"
import Hero from "../components/Hero"
import Horario from "../components/Horario"
import Membresias from "../components/Membresias"

const Home = () => {
  return (
    <main className="Home">
      <Hero />
      <Facilities />
      <Horario />
      <Membresias/>
    </main>
  )
}

export default Home