import { Route, Routes } from 'react-router-dom'
import ActorInfo from './components/ActorInfo'
import Actors from './components/Actors'
import Home from './components/Home'
import Movies from "./components/Movies"
import Navi from './components/Navi'

export default function App() {
  // Write JavaScript, use Hooks, add state and more

  return (
    <>
      <Navi />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/actors" element={<Actors />} />
        <Route path="/actors/:actor_name" element={<ActorInfo />} />
      </Routes>
    </>
  )
}
