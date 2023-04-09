let initialState = {
    allAlbums: new Map(),
    currentpage: 0
}

const albumReducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case 'ADDALBUM':
            state.allAlbums.set(action.payload.id, action.playload)
            return {
                ...state,
            };
        case 'ADDALBUMLIST':
            for(let i in action.playload){
                state.allAlbums.set(action.playload[i].id, action.payload[i])
            }
            return {
                ...state,
                currentpage: state.currentpage + 1
            }          
        default:
            console.log("Album Reducer don't have any matching Action");
            return state;
        };
    }



export default albumReducer;