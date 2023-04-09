let initialState = {
    isloading: true,
    featuredArtist: {}, //will conatain all the artist object with there details
}


const featuredArtistReducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_FEATURED_ARTIST':
            return{
                ...state,
                featuredArtist: action.value
            }
        default:
            return state;
    }
}

export default featuredArtistReducer;

