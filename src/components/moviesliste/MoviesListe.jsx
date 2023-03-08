import React from 'react'
import Moviecard from '../moviecards/MovieCard'
import './movieliste.css'


function MoviesListe({movies , deleteMovie}) {
  return (
    <div className='Cards'>
       {
        movies.map((e) =><Moviecard e={e} deleteMovie={deleteMovie}></Moviecard>) 
       }

    </div>
  )
}     

export default MoviesListe