import { loadSongs } from "../songActions";
import { loadArtists } from "../artistAction";
import { loadGenres } from "../generAction";


const URL = 'http://localhost:3001/';

const createReq = (reqobj) =>  {
    return {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reqobj)
    }
};


export const postSong = (songObj) => {
    console.log("sending song...")
    return async (dispatch, getState) => {
        console.log("sending data");
        let temp = {
            ...songObj,
            id: getState().Songs.length + 1
        }
        

        fetch(URL, createReq(temp))
                .then(response => response.json())
                .then((data) => {
                    console.log(data);
                    dispatch({
                        type: "ADDSONG",
                        data: temp
                    })
                },(error)=>{
                    console.log("error occured in sending data", error);
                    dispatch({
                        type: 'ERRORLOADING',
                    })
                });
    }
}

export const getArtist = () => async(dispatch, getState) =>{
    console.log("getting data from backend");
    let sdetails = [];
    sdetails = await fetch(URL+"artist").then(response => response.json()).then(result => {
        console.log(result);
        dispatch(loadArtists(result))
    });
}

export const getGenre = () => async(dispatch, getState) =>{
    console.log("getting data from backend");
    let sdetails = [];
    sdetails = await fetch(URL+"genre").then(response => response.json()).then(result => {
        console.log(result);
        dispatch(loadGenres(result))
    });
}
