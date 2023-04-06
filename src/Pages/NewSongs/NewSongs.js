import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingCarousel from "../../components/LoadingCarousel/LoadingCarousel";
import SongCardPage from "../../PageComponents/SongCardPage/SongCardPage";
import { getPlaylistByUseridPlaylistName } from "../../services/filters/playlistFilter";
import { fetchNewSongs } from "../../services/Helpers/getRequests";

const NewSongs = (props) => {
    
    let dispatch = new useDispatch();


    let playlists = useSelector(state => state.Playlist.playlists);
    let playlist = getPlaylistByUseridPlaylistName(7, "New_Songs", playlists);

    useEffect(() => {
        console.log("new use effect rannnnnnnn")
        dispatch(fetchNewSongs('ADDPLAYLIST'))
    }, [])

    return(
        <>
            {JSON.stringify(playlist) === '{}' ? <LoadingCarousel/> : <SongCardPage playlist_id={playlist.id} data={playlist.songs} heading="New Songs" dispKey="song" />}
        </>
    )
}

export default NewSongs;