import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingCarousel from "../../components/LoadingCarousel/LoadingCarousel";
import TileCardPage from "../../PageComponents/TileCardPage.js/TileCardPage";
import { fetchAlbumById, fetchTrendingSong } from "../../services/Helpers/getRequests";

const AlbumDetailsPage = (props) => {

    let albumid = props
    const [album, setAlbum] = useState({});
    const [isLoading, setLoading] = useState(true);

    let dispatch = new useDispatch();

    let albums = useSelector(state => state.Album.allAlbums);
    if(albums.has(albumid)){
        setAlbum(albums.get(albumid));
        setLoading(false);
    }else{
        dispatch(fetchAlbumById('ADDALBUM'))
    }

    return(
        <>
            {isLoading ? <LoadingCarousel/> : <TileCardPage songs={album} dispKey="album" />}
        </>
    )
}

export default AlbumDetailsPage;