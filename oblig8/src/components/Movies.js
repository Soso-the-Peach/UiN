import { useEffect, useState } from 'react'
import Movie from './Movie'
import { getMovies, getMovieActor } from '../lib/Services'

export default function Movies() {
  const [movies, setMovies] = useState()

  useEffect(() => {
    const getMoviesData = async () => {
      const movies = await getMovies()
      setMovies(movies.sort((a, b) => (a.title > b.title ? 1 : -1)))
    }
    getMoviesData().catch((error) => console.log(error))

    const getMovieActorData = async () => {
      const movieActors = await getMovieActor()
    }
    getMovieActorData().catch((error) => console.log(error))
  }, [])

  return (
    <ul>
      {movies?.map((movie, index) => (
        <Movie key={index} title={movie.title} actor={movie.actor} />
      ))}
    </ul>
  )
}
