import { useEffect } from "react";
import { useSelector } from "react-redux"


export const getPlaylistById = (id, playlists) => {
    //let playlists = useSelector(state => state.playlists);
    let playlist = {}
    for(let i in playlists){
        if(playlists[i].id == id){
            playlist = playlists[i];
        }
    }
    return playlist;
}

export const getAlbumById = (id, albums) => {
    //let playlists = useSelector(state => state.playlists);
    let album = {}
    for(let i in albums){
        if(albums[i].id == id){
            return albums[i];
        }
    }
    return album;
}

export const getPlaylistByUseridPlaylistName = (userid, playlistname, playlists) => {
    //let playlists = useSelector(state => state.playlists);
    for(let i in playlists){
        if(playlists[i].userid == userid && playlists[i].name == playlistname){
            return playlists[i];
        }
    }
    return {};
}
