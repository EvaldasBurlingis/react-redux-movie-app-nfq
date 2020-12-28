import axios from 'axios';
import { endpoints } from '../config';
import { setMovieList, setGenresList, setLikedList, changeLikedList } from '../actions';

export const getMovieList = () => (dispatch) => {
    axios
        .get(endpoints.mostPopularMovies())
        .then(response => dispatch(setMovieList(response.data.results)))
        .catch(error => console.log(error));
};

export const getGenresList = () => dispatch => {
    axios
        .get(endpoints.genres())
        .then(response => dispatch(setGenresList(response.data.genres)))
        .catch(error => console.log(error));
};

export const getSelectedGenre = (id) => dispatch => {
    axios
        .get(endpoints.genreMovies(id))
        .then(response => dispatch(setMovieList(response.data.results)))
        .catch(error => console.log(error));
};

export const getLikedList = () => dispatch => {
   dispatch(setLikedList([])); 
};

export const changeLikedMovies = (id) => dispatch => {
    dispatch(changeLikedList(id));
}
