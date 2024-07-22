import Facilities from "../components/Facilities"
import Hero from "../components/Hero"
import Horario from "../components/Horario"
import Membresias from "../components/Membresias"
import Coach from "../components/Coach"
import Newsletter from "../components/Newsletter"

const Home = () => {
  return (
    <main className="Home">
      <Hero />
      <Facilities />
      <Coach/>
      <Membresias />
      <Horario />
      <Newsletter/>
    </main>
  )
}

export default Home