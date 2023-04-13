import "./AlbumPage.css";
import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingCarousel from "../../components/LoadingCarousel/LoadingCarousel";
import SongCardPage from "../../PageComponents/SongCardPage/SongCardPage";
import { getNextAlbumPage } from "../../services/Helpers/getRequests";
import SongCard from "../../components/Cards/Song/SongCard";
import useAlbumLoad from "./hooks/useAlbumLoad";
import { useState } from "react";
import AlbumCard from "../../components/Cards/Album/AlbumCard";

const AlbumPage = (props) => {
    let type = 'album'

    let dispatch = useDispatch();
    const [pageno, setPageno] = useState(0);
    
    let albums = useSelector(state => state.Album.allAlbums);
    console.log("albums :", albums)
    const {
        hasMore,
        loading,
        error
    } = useAlbumLoad(dispatch, pageno+1);
    

    const observer = useRef(0);
    const lastElementRef = useCallback(node => {
        if (loading) return
        if(observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting){
                console.log("visible")
                //setPageno(useSelector(state => state.Album.currentpage))
                setPageno(prev => prev + 1);
                console.log(pageno)
            }
        })

        if(node) observer.current.observe(node);
    })

    return(
        <div className='SongCardPage'>
            <div className='SongCardPageHeading'>
                <h2>{props.heading}</h2>
            </div>
            <div className='AllSongCards'>
                {albums.map((item, index) => {
                    if(albums.length == index + 1){
                        return (
                            <div ref={lastElementRef} key={index} className='CarouselItem'>
                                <AlbumCard data={item} id={item.id} currindx={index} type={type}/>
                            </div>
                        )
                    }else{
                        return(
                            <div key={index} className='CarouselItem'>
                                <AlbumCard data={item} id={item.id} currindx={index} type={type}/>
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