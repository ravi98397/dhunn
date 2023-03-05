import { loadSongs } from "../songActions";
import { loadArtists } from "../artistAction";
import { loadGenres } from "../generAction";
import axios from 'axios';
import { postArtist, postGenre } from "./postActions";


const URL = 'http://localhost:3001/';

const createReq = (reqobj) =>  {
    return {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reqobj)
    }
};


//update request for song detail
export const putSong = (songObj) => {
    console.log("sending song...")
    return async (dispatch, getState) => {
        console.log("sending data");    
        await axios.put(URL + 'songs/' + songObj.id, songObj).then(resp => {
            console.log(resp.data);
            dispatch({
                type: "UPDATESONG",
                payload: songObj
                }
            )
        }).catch(error => {
            console.log(error);
        });
    }
}

export const putArtist = (artistObj) => {
    console.log("sending artist...")
    return async (dispatch, getState) => {
        console.log("sending data");
            
        await axios.put(URL + 'artist/' + artistObj.id, artistObj).then(resp => {
            console.log(resp.data);
            dispatch({
                type: "UPDATEARTIST",
                payload: artistObj
            })
        }).catch(error => {
            console.log(error);
        });
    }
}

export const putGenre = (genreObj) => {
    console.log("sending genre...")
    return async (dispatch, getState) => {
        console.log("sending data");
            
        await axios.put(URL + 'genre/' + genreObj.id, genreObj).then(resp => {
            console.log(resp.data);
            dispatch({
                type: "UPDATEGENRE",
                payload: genreObj
            })
        }).catch(error => {
            console.log(error);
        });
    }
}

export const putUser = (UpdateUser) => {
    console.log("sending genre...")
    return async (dispatch, getState) => {
        console.log("updating user data");
            
        await axios.put(URL + 'genre/' + UpdateUser.id, UpdateUser).then(resp => {
            console.log(resp.data);
            dispatch({
                type: "UPDATEUSER",
                payload: UpdateUser
            })
        }).catch(error => {
            console.log(error);
        });
    }
}
