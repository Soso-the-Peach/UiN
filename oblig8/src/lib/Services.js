import client from './client'

const mFields = `
  title,
  "slug": slug.current,
  "actor": actor->full_name,
  "skuespillere": skuespillere[]{...}`

const aFields = `
  full_name,
  "slug": slug.current,
`

export async function getMovies() {
  const data = await client.fetch(`*[_type == "movie"]{${mFields}}`)
  return data
}

export async function getActors() {
  const data = await client.fetch(`*[_type == "actor"]{${aFields}}`)
  return data
}

// funksjon hente filmer med gitt skuespiller
export const getMovieActor = async (actorName) => {
  const data = await client.fetch(`*[_type == "movie"]{${mFields}}`)
  const actorSlug = await client.fetch(
    `*[_type == "actor" && slug.current == $actorName]{${aFields}}`,
    {
      actorName,
    }
  )
  console.log(data)
  console.log(actorSlug)
  const newData = [...data, ...actorSlug]
  return newData
}
