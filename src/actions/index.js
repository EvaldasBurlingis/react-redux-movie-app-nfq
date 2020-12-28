export const setMovieList = (list) => ({
    type: 'SET_MOVIE_LIST',
    list
})

export const setGenresList = (list) => ({
    type: 'SET_GENRES_LIST',
    list
})

export const setLikedList = (list) => ({
    type: 'SET_LIKED_LIST',
    list
})

export const changeLikedList = (id) => ({
    type: 'CHANGE_LIKED_LIST',
    id
})
