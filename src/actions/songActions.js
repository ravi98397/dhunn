import { postGenre, postSong } from "./asyncActions/postActions";
import { putArtist, putSong } from "./asyncActions/putActions";

const URL = "http://localhost:3001/songs";

export const loadSongs = (AllSongs) => {
    return {
        type: 'SETALLSONGS',
        payload: AllSongs
    }
}


export const addSong = (songObj) => {
    console.log("NEW SONG ADD REQ REQUEST RECEIVED...")
    return {
        type: 'ADDSONG',
        data: songObj
    }
}


export const getSong = (songName) => {
    return {
        type: 'GETONSONG',
        data: songName
    }
}

export const updateSong = (songObj) => {
    return {
        type: 'UPDATESONG',
        data: songObj
    }
}


//
const setupAddSong = async (songObj, state) => {
    //artist and genre already if updated if new and proper songObj is expected other than id.
    if(songObj.id < state.Songs.songs.length ){
        //put
        putSong(songObj);
    }else{
        //post
        postSong(songObj);
    }
}


const verifyArtist = (state, id) => {
    let artist = state.Artist.artists;
    //let loading = state.Artist.artistLoading;
    for(let i in  artist){
        if(artist[i].id == id){
            return true;
        }
    }
    return false;
}

const verifyGener = (state, id) => {
    let genre = state.Genre.genres;
    //let loading = state.Artist.artistLoading;
    for(let i in  genre){
        if(genre[i].id == id){
            return true;
        }
    }
    return false;
}