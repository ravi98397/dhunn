import { loadSongs } from "../songActions";
import { loadArtists } from "../artistAction";
import { loadGenres } from "../generAction";
import axios from 'axios';

const URL = 'http://localhost:3001/';

export const getSong = () => async(dispatch, getState) =>{
    console.log("getting data from backend");
        await axios.get(URL+"songs").then(response => {
        //response.json()
        let result = response.data
            for(let i = 0; i < result.length; i++){
                let temp = result[i].release_date.split("/");
                result[i].release_date = new Date(temp[2],temp[1],temp[0])
            }
            dispatch(loadSongs(result))
        }).catch(error => {
            console.log(error);
        });
    //dispatch(loadArtists(sdetails.artist))
    //dispatch(loadGener(sdetails.artist))
}

//userid should be a string to get that perticular user
export const getUser = (userid = "") => async(dispatch, getState) =>{
    console.log("getting user data from backend");
        await axios.get(URL+"user/"+userid).then(response => {
        //response.json()
        let result = response.data
            if(Object.keys(result).length === 0){
                console.log("user not found")
            }else{
                console.log("user found ===", result)
                return{
                    action: 'LOGGEDIN',
                    payload: result
                }
            }
        }).catch(error => {
            console.log(error);
        });
    //dispatch(loadArtists(sdetails.artist))
    //dispatch(loadGener(sdetails.artist))
}

export const getArtist = () => async(dispatch, getState) =>{
    console.log("getting artist data from backend");
    await axios.get(URL+"artist").then(response => {
        //response.json()
        let result = response.data
            dispatch(loadArtists(result))
        }).catch(error => {
            console.log(error);
        });
}

export const getGenre = () => async(dispatch, getState) =>{
    console.log("getting genre data from backend");
    await axios.get(URL+"genre").then(response => {
        //response.json()
        let result = response.data
        dispatch(loadGenres(result))
        }).catch(error => {
            console.log(error);
        });
}


/*

export const getSong1 = () => async(dispatch, getState) =>{
    console.log("getting data from backend");
    let sdetails = [];
    sdetails = await fetch(URL+"songs").then(response => response.json()).then(result => {
        console.log(result);
        for(let i = 0; i < result.length; i++){
            let temp = result[i].release_date.split("/");
            result[i].release_date = new Date(temp[2],temp[1],temp[0])
        }
        dispatch(loadSongs(result))
    });
    //dispatch(loadArtists(sdetails.artist))
    //dispatch(loadGener(sdetails.artist))
}

export const getArtist1 = () => async(dispatch, getState) =>{
    console.log("getting data from backend");
    let sdetails = [];
    sdetails = await fetch(URL+"artist").then(response => response.json()).then(result => {
        console.log(result);
        dispatch(loadArtists(result))
    });
}

export const getGenre1 = () => async(dispatch, getState) =>{
    console.log("getting data from backend");
    let sdetails = [];
    sdetails = await fetch(URL+"genre").then(response => response.json()).then(result => {
        console.log(result);
        dispatch(loadGenres(result))
    });
}

*/