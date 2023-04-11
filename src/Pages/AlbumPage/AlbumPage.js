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

    const lastElement = () => {
        
    }

    return(
        <div className='SongCardPage'>
            <div className='SongCardPageHeading'>
                <h2>{props.heading}</h2>
            </div>
            <div className='AllSongCards'>
                {data.map((item, index) => {
                    if(data.length == index + 1){
                        return (
                            <div ref={lastElement} key={index} className='CarouselItem'>
                                <SongCard data={item} id={id} currindx={index} type={type}/>
                            </div>
                        )
                    }else{
                        return(
                            <div key={index} className='CarouselItem'>
                                <SongCard data={item} id={id} currindx={index} type={type}/>
                            </div>
                        )
                    }
                }
                        
                )}
            </div>
        </div>
    )
}

export default AlbumPage;