/*let initialState = {
    isLoading: true,
    artists: []
}

const artistReducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case 'ADDARTIST':
            let newarr = state.artists
            newarr.append(action.payload)
            return {
                ...state,
                artists: newarr
            };
        case 'SETALLARTISTS':
            if(state.artistLoading){
                return {
                    ...state,
                    artistLoading: false,
                    artists: action.payload
                }
            }else{
                return state;
            }
        case 'UDATEARTIST':
            let temp = state.songs;
            let data = action.payload;
            for(let i in temp){
                if(temp[i].id === data.id){
                    temp[i] = data;
                }else{
                    console.log("error no artists the given id found.")
                }
            }
            return {
                ...state,
                artists: temp
            }            
        default:
            console.log("Artists Reducer don't have any matching Action");
            return state;
        };
    }



export default artistReducer;
*/

import { combineReducers } from "redux";
import artistDirReducer from "./artistReducers/ArtistDirReducer";
import featuredArtistReducer from "./artistReducers/featuredArtistReducer";

const artistReducer = combineReducers({
    featuredArtist: featuredArtistReducer,
    artistDir: artistDirReducer
})

export default artistReducer;