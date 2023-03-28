let initialState = {
    allAlbums: [],
    currentpage: 0
}

const albumReducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case 'ADDALBUM':
            let newarr = state.allAlbums;
            newarr.append(action.payload)
            return {
                ...state,
                allAlbums: newarr
            };
        case 'ADDALBUMPAGE':
            if(state.artistLoading){
                let newarr = state.allAlbums;
                newarr.concat(action.payload.albumPage)
                return {
                    ...state,
                    allAlbums: newarr,
                    currentpage: state.currentpage + 1
                }
            }else{
                return state;
            }          
        default:
            console.log("Album Reducer don't have any matching Action");
            return state;
        };
    }



export default albumReducer;