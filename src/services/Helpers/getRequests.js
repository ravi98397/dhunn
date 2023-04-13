import { getAlbumById, getPlaylistById } from "../filters/playlistFilter";

const { default: axios } = require("axios");
const { useEffect } = require("react");

const URL = process.env.REACT_APP_API.BASEURL;
//const URL = "";

export function fetchSongById(songid, action){
    
    return async (dispatch, getState) => {
        console.log("call came hereeeeeeeeeeee")
        axios.get(URL + `api/v1/song/getById?id=${songid}`)
        .then((result) => {
            console.log("resulttttttt :", result)
            return {
                type: 'ADD_SONG',
                payload: result.data
            };
        }) 
        .catch(error => console.error(error))
    }
}

export function fetchArtistById(artistId, action){
    
    return async (dispatch, getState) => {
        console.log("call came hereeeeeeeeeeee")
        axios.get(URL + `api/v1/artist/getById?id=${artistId}`)
        .then((result) => {
            console.log("resulttttttt :", result)
            // dispatch({
            //     type: 'ADDPLAYLIST',
            //     payload: result.data
            // });
        }) 
        .catch(error => console.error(error))
    }
}

export function fetchAlbumById(albumid, action){
    
    return async (dispatch, getState) => {
        let state = getState();
        state.Album.allAlbums.map((item) => {
            if(item.id === albumid) return;
        })
        let response = await axios.get(URL + `api/v1/album/getById?id=${albumid}`)
        if(response.status === 200){
            console.log("dispatching action ADDALBUM", response.data)
            return dispatch({
                type: 'ADDALBUM',
                payload: response.data
            })
        }else{
            console.error(response.status, response);
            return
        }
    }
}

export function fetchPlaylistById(id){
    return async (dispatch, getState) => {
        let playlists = getState().Playlist.playlists;
        playlists.map(item => {
            if(item.id === id) return;
        })
        const response = await axios.get(URL + `api/v1/playlist/getPlaylistById?id=${id}`)
        if(response.status === 200){
            dispatch({
                type: 'ADDPLAYLIST',
                payload: response.data
            });
            console.log("dispatch done")
        }else{
            console.log("error in fetching playlist", response);
            return
        }
        
    }
}


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

export function initializePlayer(id,currindx,type){
    
    return (dispatch, getState) => {
        let state = getState();
        let songlist = [];
        if(type == 'playlist'){
            let playlist = getPlaylistById(id, state.Playlist.playlists);
            songlist = playlist.songs
        }

        if(type == 'album'){
            let album = getAlbumById(id, state.Album.allAlbums);
            console.log("look me in the eye", album)
            songlist = album.songs
        }
        
        
        dispatch({
                type:'PLAYERINIT', 
                payload: {
                    currindx,
                    songList:songlist
                    }
                })
    }
}

export function getNextAlbumPage(){
    
    return async (dispatch, getState) => {
        let state = getState();
        //console.log("this is where i am trying to see: ",id, state.Playlist.playlists)
        const response = await axios.get(URL + `api/v1/album/getAll?pageno=${state.Album.currentpage + 1}`)
        console.log(`response for album page ${state.Album.currentpage + 1}`, response.data)
        dispatch({
                type:'ADDALBUMPAGE', 
                payload: {
                    albumPage: response.data 
                    }
                })
    }
}

// export async function getSearchResults(term){
//     const response = await axios.get(`http://localhost:8080/search?term=${term}`)
//     console.log(`response for search query for ${term}`, response.data)
//     return response.data
// }

// {fetchLatestSong, fetchTrendingSong, fetchPlaylistById, initializePlayer}
