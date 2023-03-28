import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingCarousel from "../../components/LoadingCarousel/LoadingCarousel";
import TileCardPage from "../../PageComponents/TileCardPage.js/TileCardPage";
import { getPlaylistByUseridPlaylistName } from "../../services/filters/playlistFilter";
import { fetchTrendingSong } from "../../services/Helpers/getRequests";

const TrendingSongs = () => {

    let dispatch = new useDispatch();

    let playlists = useSelector(state => state.Playlist.playlists);
    let songList = getPlaylistByUseridPlaylistName(7, "Trending_Songs", playlists);

    useEffect(() => {
        dispatch(fetchTrendingSong('ADDPLAYLIST'))
    }, [])

    return(
        <>
            {JSON.stringify(songList) == '{}' ? <LoadingCarousel/> : <TileCardPage songs={songList} dispKey="song" />}
        </>
    )
}

export default TrendingSongs;