/*let initialState = {
    songsLoading: true,
    songs: []
}

const songReducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case 'ADDSONG':
            let newarr = state.songs
            newarr.append(action.payload)
            return {
                ...state,
                songs: newarr
            };
        case 'SETALLSONGS':
            console.log("SETALLSONGS : ", action.payload);
            if(state.songsLoading){
                return {
                    ...state,
                    songsLoading: false,
                    songs: action.payload
                }
            }else{
                return state
            }
        case 'UDATESONG':
            let temp = state.songs;
            let data = action.payload;
            for(let i in temp){
                if(temp[i].id === data.id){
                    console.log("songid is found..")
                    temp[i] = {
                        ...data
                    }
                }else{
                    console.log("error no song the given id found.")
                }
            }
            return {
                ...state,
                songs: temp
            }
        default:
            console.log("Song Reducer don't have any matching Action");
            return state;
        };
    }
*/

import { combineReducers } from "redux";
import newSongsReducer from "./songReducers/NewSongsReducer";
import songDirReducer from "./songReducers/SongDirReducer";

const songReducer = combineReducers({
    NewSongs: newSongsReducer,
    SongDir: songDirReducer
})

export default songReducer;