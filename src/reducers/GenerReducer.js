let initialState = {
    isLoading: true,
    genre:[]
}

//every genre willbe a object with multiple keys
/* ex: ROCK = {
        isLoading: true,
        songs: []  maybe around 15 songs to be begin with.
}
*/

const genreReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_GENRE_LIST':
            return {
                ...state,
                isLoading: false,
                genre:action.payload
            }
        case 'LOAD_GENRE_DETAILS':
            let key = action.payload;
            return {
                ...state,
                key: {
                    isLoading: true,
                    songs: []
                },
            }
        case 'ADD_GENRE_DETAILS':
            key = action.payload.name;   ///needs to be updated according to the genre object
            return {
                ...state,
                isLoading: false,
                songs: action.payload.songs,
            }
        default :
            return state;
    }
}

export default genreReducer;