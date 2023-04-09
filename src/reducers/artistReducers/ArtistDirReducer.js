let initialState = {
    artists: new Map(), //will conatain all the artist object with there details
}


const artistDirReducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_ARTIST':
            state.artists.set(action.payload.id, action.payload)
            return{
                ...state,
            }
        default:
            return state;
    }
}

export default artistDirReducer;

