import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getMovieActor } from '../lib/Services'

export default function ActorInfo() {
  const { actor_name } = useParams()
  const [actor, setActor] = useState()

  useEffect(() => {
    const getMovieActorData = async () => {
      const movieActors = await getMovieActor(actor_name)
      let ActorName = movieActors.filter((a) => a.slug === actor_name)
      ActorName = ActorName[0].full_name
      const actorMovies = movieActors.filter(
        (movie) => movie.actor === ActorName
      )
      setActor(actorMovies.sort((a, b) => (a.title > b.title ? 1 : -1)))
    }
    getMovieActorData().catch((error) => console.log(error))
  }, [])

  return (
    <div>
      {actor?.map((movies, index) => (
        <div key={index} className="actor-info">
          {(() => {
            if (index === 0) {
              return (
                <>
                  <h2>{movies.actor}</h2>
                  <p>Played in:</p>
                </>
              )
            }
          })()}
          <li>{movies.title}</li>
        </div>
      ))}
    </div>
  )
}
