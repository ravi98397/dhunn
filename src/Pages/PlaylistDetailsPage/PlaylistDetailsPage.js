import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingCarousel from "../../components/LoadingCarousel/LoadingCarousel";
import TileCardPage from "../../PageComponents/TileCardPage.js/TileCardPage";
import { fetchAlbumById, fetchPlaylistById, fetchTrendingSong } from "../../services/Helpers/getRequests";
import { useParams } from "react-router-dom";

const PlaylistDetailsPage = () => {
    //const [albumid, setAlbumid] = useState(useParams().id);
    const [playlist, setPlaylist] = useState({});
    let dispatch = new useDispatch();
    let playlistid = useParams().id;
    let playlists = useSelector(state => state.Playlist.playlists);
    
    playlists.map((item) => {
        if(item.id == playlistid && playlist.id != playlistid){ 
            setPlaylist(item);
        }
    });
    useEffect(() => {
        dispatch(fetchPlaylistById(playlistid)); 
        console.log("triggered")
    }, [useParams().id])

    

    return(
        <>
            {JSON.stringify(playlist) == '{}' ? <LoadingCarousel/> : <TileCardPage data={playlist} type="playlist" dispKey="album" />}
        </>
    )
}

export default PlaylistDetailsPage;