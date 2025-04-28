import { getirMovies } from '@/helpers/movieFunctions'
import React from 'react'

const MovieSection = async () => {

   const filmler = await getirMovies("popular")

   console.log(filmler);
  return (
    <div>
        
    </div>
  )
}

export default MovieSection