let initialState = {
    songs: new Map()
}

const songDirReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_SONG':
            state.songs.set(action.payload.id, action.payload)
            console.log("added song")
            return {
                ...state,
            }
        case 'ADD_SONG_LIST':
            for(let i in action.payload){
                state.songs.set(i.id, i);
            }
            console.log("added song list");
            return {
                ...state,
            }
        default :
            console.log('no mathcing action for songdir')
            return state;
    }
}

export default songDirReducer;