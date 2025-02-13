type Movie = {
  title: string;
  year: number;
  [key: string | number]: string | number | boolean;
};

type Movies = {
  [key: string]: Movie;
};

// Fetch endpoint /movies
let movies = {
  movie1: {
    title: 'A Origem',
    year: 2010,
    isFavorite: true,
    genre: 'Ficção científica',
    director: 'Christopher Nolan',
  },
  movie2: {
    title: 'Um Sonho de Liberdade',
    year: 1994,
    isFavorite: true,
    genre: 'Drama',
    runtime: 142,
  },
  movie3: {
    title: 'The Godfather',
    year: 1972,
    isFavorite: false,
    genre: 'Crime',
  },
};

export function showMovies(movies: Movies) {
  console.log(movies);
}

showMovies(movies);
