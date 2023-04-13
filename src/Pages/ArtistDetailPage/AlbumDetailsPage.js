import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingCarousel from "../../components/LoadingCarousel/LoadingCarousel";
import TileCardPage from "../../PageComponents/TileCardPage.js/TileCardPage";
import { fetchAlbumById, fetchTrendingSong } from "../../services/Helpers/getRequests";
import { useParams } from "react-router-dom";

const AlbumDetailsPage = () => {
    //const [albumid, setAlbumid] = useState(useParams().id);
    const [album, setAlbum] = useState({});
    let dispatch = new useDispatch();
    let albumid = useParams().id;
    let albums = useSelector(state => state.Album.allAlbums);

    console.log(albums)
    
    albums.map((item) => {
        if(item.id == albumid && album.id != albumid){ 
            setAlbum(item);
        }
    });
    useEffect(() => {
        dispatch(fetchAlbumById(albumid)); 
        console.log("triggered")
    }, [useParams().id])

    

    return(
        <>
            {JSON.stringify(album) == '{}' ? <LoadingCarousel/> : <TileCardPage data={album} type="album" dispKey="album" />}
        </>
    )
}

export default AlbumDetailsPage;