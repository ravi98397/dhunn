let initialState = {
    playlists: []
}

const playlistReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case 'ADDPLAYLIST':
            console.log('ADDPLAYLIST')
            for(let i in state.playlists){
                if(state.playlists[i].id == action.payload.id){
                    return state;
                }
            }
            return {
                ...state,
                playlists: state.playlists.concat([action.payload])
            }
        default:
            //console.log("no matching playlist action", action.payload);
            return state;
        };
    }


export default playlistReducer;