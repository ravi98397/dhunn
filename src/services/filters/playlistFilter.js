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

export const getPlaylistByUseridPlaylistName = (userid, playlistname, playlists) => {
    //let playlists = useSelector(state => state.playlists);
    for(let i in playlists){
        if(playlists[i].userid == userid && playlists[i].name == playlistname){
            return playlists[i];
        }
    }
    return {};
}
