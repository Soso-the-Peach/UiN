import { useEffect, useState } from 'react'
import { getActors } from '../lib/Services'
import { Link } from 'react-router-dom'

export default function Actors() {
  const [actors, setActors] = useState()

  useEffect(() => {
    const getActorsData = async () => {
      const actors = await getActors()
      setActors(actors.sort((a, b) => (a.full_name > b.full_name ? 1 : -1)))
    }
    getActorsData().catch((error) => console.log(error))
  }, [])

  return (
    <>
      {actors?.map((actor, index) => (
        <div key={index} className="actor-info">
          <h2>{actor.full_name}</h2>
          <Link to={`/actors/${actor.slug}`}>More..</Link>
        </div>
      ))}
    </>
  )
}