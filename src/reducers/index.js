import { combineReducers } from 'redux';
import moviesReducer from './movies';
import genresReducer from './genres';
import likedMoviesReducer from './likedMovies';

export const rootReducer = combineReducers({
    moviesReducer,
    genresReducer,
    likedMoviesReducer
})
