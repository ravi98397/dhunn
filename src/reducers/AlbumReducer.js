let initialState = {
    allAlbums: [],
    currentpage: 0,
    hasMore: true
}

const albumReducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case 'ADDALBUM':
            state.allAlbums.map((item, index) => {
                if(item.id === action.payload.id) 
                    state.allAlbums[index] = action.payload;
                    return {
                        ...state
                    }
            })
            return {
                ...state,
                allAlbums: state.allAlbums.concat([action.payload])
            };
        case 'ADDALBUMPAGE':
            console.log("addalbumpage payload", action.payload)
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



export default albumReducer;