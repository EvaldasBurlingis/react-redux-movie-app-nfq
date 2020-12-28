export const hostUrl = 'https://api.themoviedb.org/3';
export const imageUrl = 'https://image.tmdb.org/t/p/w1280';

export const endpoints = {
  mostPopularMovies: () => `${hostUrl}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`,
  genres: () => `${hostUrl}/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`,
  genreMovies: (id) => `${hostUrl}/genre/${id}/movies?api_key=${process.env.REACT_APP_API_KEY}`,
};

export const getImageUrl = (path) => `${imageUrl}${path}`;
