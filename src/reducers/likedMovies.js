const initialState = {
    list: [],
};

const likedMoviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LIKED_LIST':
            return {
                ...state,
                list: action.list,
            };
        case 'CHANGE_LIKED_LIST':
            const index = state.list.indexOf(action.id)
            if (index >= 0) {
                state.list.splice(index, 1)
            } else {
                state.list.push(action.id)
            }
            return {
              ...state,
              list: state.list,
            };
        default:
            return state;
    }
};

export default likedMoviesReducer;