import React from "react"

const GenreList = ({ genres, filterMoviesByGenre }) => (
    <ul className="genres">
      {genres.map((genre) => (
        <li 
          className="genre"
          key={genre.id}
          onClick={e => filterMoviesByGenre(genre.id)}
        >
          {genre.name}
        </li>
      ))}
    </ul>
)

export default GenreList