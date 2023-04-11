let initialState = {
    playerinit: false,
    isPlaying: false,
    songList: [],
    currentlyPlaying: 0,       
    played: 0,
    audio: 50
}

function shuffler(){
    
}

const playerReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case 'PLAYERINIT':
            console.log("player action paylod ::::::", action.payload)
            return {
                ...state,
                playerinit: true,
                isPlaying: true,
                songList: action.payload.songList,
                currentlyPlaying:action.payload.currindx
            }
        /*case 'UPDATEPLAYINGLIST':
            return {
                ...state,
                songList: action.payload
            }
            */
        case 'PLAYPAUSE':
            if(state.isPlaying){
                console.log("pausinggggg");
                return {...state, isPlaying: false}
            }else{
                console.log("playinggggggg");
                return {...state, isPlaying: true}
            }
        case 'NEXT':
            return {
                ...state,
                currentlyPlaying: state.currentlyPlaying+1 < state.songList.length ? state.currentlyPlaying+1 : 0
            }
        case 'PREV':
            return {
                ...state,
                currentlyPlaying: state.currentlyPlaying-1 >= 0 ? state.currentlyPlaying-1 : 0
            }
        case 'SHUF':
            let rand = Math.random() * state.songList.length-1;
            console.log(rand); // say 99.81321410836433

            rand = Math.floor(rand); // 99

            return {
                ...state,
                currentlyPlaying: rand
            }
        case 'UPDATEAUDIO':
            console.log("updating volume...");
            return {
                ...state,
                audio: action.payload
            }
        default:
            //console.log("Genre Reducer don't have any matching Action");
            return state;
        };
    }



export default playerReducer;