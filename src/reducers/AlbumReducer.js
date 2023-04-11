let initialState = {
    allAlbums: [],
    currentpage: 0
}

const albumReducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case 'ADDALBUM':
            state.allAlbums.map(item => {
                if(item.id === action.payload.id) return;
            })
            return {
                ...state,
                allAlbums: state.allAlbums.concat([action.payload])
            };
        case 'ADDALBUMLIST':
            for(let i in action.payload){
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