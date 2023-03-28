import { useEffect } from "react";
import { useSelector } from "react-redux";
import LoadingCarousel from "../../components/LoadingCarousel/LoadingCarousel";
import SongCardPage from "../../PageComponents/SongCardPage/SongCardPage";
import { getNextAlbumPage } from "../../services/Helpers/getRequests";

const AlbumPage = (props) => {
    
    let albums = useSelector(state => state.Album.allAlbums);

    const getNextPage = () => {
        getNextAlbumPage();
    }

    return(
        <div className="wrapper">
            <SongCardPage heading="Album" data={albums} />
        </div>
    )
}

export default AlbumPage;