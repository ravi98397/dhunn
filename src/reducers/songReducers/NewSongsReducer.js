let initialState = {
    isLoading: true,
    newSongs:[]
}

const newSongsReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_NEWSONGS':
            return {
                ...state,
                isLoading: false,
                genre:action.payload
            }
        default :
            return state;
    }
}

export default newSongsReducer;