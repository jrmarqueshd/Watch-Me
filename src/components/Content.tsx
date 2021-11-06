import { MovieCard } from '../components/MovieCard';
import Header from './Header';

import { GenreResponseProps, MovieProps } from '../App';

interface ContentProps {
  selectedGenre: GenreResponseProps;
  movies: MovieProps[]
}

export function Content({ selectedGenre, movies }: ContentProps) {  
  return (
    <div className="container">
      <Header title={selectedGenre.title} />

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}