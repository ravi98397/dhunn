let initialState = {
    artists: [],
    currentpage: 0,
    hasMore: true
}

const artistDirReducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case 'ADDARTIST':
            state.allAlbums.map(item => {
                if(item.id === action.payload.id) return;
            })
            return {
                ...state,
                allAlbums: state.allAlbums.concat([action.payload])
            };
        case 'ADDARTISTPAGE':
            return {
                ...state,
                allAlbums: [...new Set(state.allAlbums.concat(action.payload.data))],
                currentpage: action.payload.currentpage,
                hasMore: action.payload.hasMore
            };        
        default:
            console.log("Album Reducer don't have any matching Action");
            return state;
        };
    }



export default artistDirReducer;