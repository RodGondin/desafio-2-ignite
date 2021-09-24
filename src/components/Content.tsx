import { useEffect } from 'react';
import { api } from '.././services/api';
import { MovieCard } from './MovieCard';
import { Header } from './Header';
interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps {
  movies: MovieProps[];
  selectedGenre: {
    title: string;
  };
}


export function Content({movies, selectedGenre}: ContentProps) {
  // Complete aqui
  return (
      <div className="container">
      <Header selectedGenre={selectedGenre.title}/>
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