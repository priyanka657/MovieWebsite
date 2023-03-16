import React from 'react'
import {useGlobalContext} from "./Context"
const Movies = () => {
const {movie}=useGlobalContext();
  return (
    <>
        {movie.map((curMovie)=>{
            return (
                <div>
                    <h2>{curMovie.Title}</h2>
                </div>
            )
        })}
    </>
  )
}

export default Movies
