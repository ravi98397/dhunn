import { getPlaylistById } from "../filters/playlistFilter";

const { default: axios } = require("axios");
const { useEffect } = require("react");

//const URL = process.env.REACT_APP_API.BASEURL;
const URL = "";


export function fetchLatestSong(action){
    
    return async (dispatch, getState) => {
        console.log("call came hereeeeeeeeeeee")
        axios.get(URL + 'api/v1/playlist/getUserPlaylist?userid=7&playlist=Latest_Songs')
        .then((result) => {
            console.log("resulttttttt :", result)
            dispatch({
                type: 'ADDPLAYLIST',
                payload: result.data
            });
        }) 
        .catch(error => console.error(error))
    }
}

export function fetchTrendingSong(action){
    return async (dispatch, getState) => {
            let playlists = getState().Playlist.playlists;

            for(let i in playlists){
                if(playlists[i].userid == 7 && playlists[i].name === 'Trending_Songs'){
                    console.log("do nothing...")
                    return;
                }
            }

            const response = await axios.get(URL + 'api/v1/playlist/getUserPlaylist?userid=7&playlist=Trending_Songs')
            console.log(response)
            dispatch({
                type: 'ADDPLAYLIST',
                payload: response.data
            });
            console.log("dispatch done")
    }
}

export function fetchPlaylistById(id){
    return async (dispatch, getState) => {
        const response = await axios.get(URL + `api/v1/playlist/getPlaylistById?id=${id}`)
        console.log(response)
        dispatch({
            type: 'ADDPLAYLIST',
            payload: response.data
        });
        console.log("dispatch done")
    }
}

export function fetchNewSongs(){
    return async (dispatch, getState) => {
        let playlists = getState().Playlist.playlists;

        for(let i in playlists){
            if(playlists[i].userid == 7 && playlists[i].name === 'New_Songs'){
                console.log("do nothing...")
                return;
            }
        }

        const response = await axios.get(URL + 'api/v1/playlist/getUserPlaylist?userid=7&playlist=New_Songs')
        console.log(response)
        dispatch({
            type: 'ADDPLAYLIST',
            payload: response.data
        });
        console.log("dispatch done")
    }    
}

export function initializePlayer(id,currindx){
    
    return (dispatch, getState) => {
        let state = getState();
        //console.log("this is where i am trying to see: ",id, state.Playlist.playlists)
        let playlist = getPlaylistById(id, state.Playlist.playlists);
        dispatch({
                type:'PLAYERINIT', 
                payload: {
                    currindx,
                    songList:playlist.songs
                    }
                })
    }
}


// {fetchLatestSong, fetchTrendingSong, fetchPlaylistById, initializePlayer}
