import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingCarousel from "../../components/LoadingCarousel/LoadingCarousel";
import SongCardPage from "../../PageComponents/SongCardPage/SongCardPage";
import { getNextAlbumPage } from "../../services/Helpers/getRequests";
import SongCard from "../../components/Cards/Song/SongCard";
import useAlbumLoad from "./hooks/useAlbumLoad";
import { useState } from "react";

const AlbumPage = (props) => {
    
    //let albums = useSelector(state => state.Album.allAlbums);
    let data = []
    let type = 'album'

    let dispatch = useDispatch();
    const getNextPage = () => {
        getNextAlbumPage();
    }

    let pageno = useSelector(state => state.Album.currentpage);
    useAlbumLoad(dispatch, pageno+1)

    const {
        albums,
        hasMore,
        loading,
        error
    } = useAlbumLoad(dispatch, 0);

    const observer = useRef();
    const lastElementRef = useCallback(node => {
        if(observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting){
                console.log("visible")
                //setPageno(useSelector(state => state.Album.currentpage))
                
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
                                <SongCard data={item} id={item.id} currindx={index} type={type}/>
                            </div>
                        )
                    }else{
                        return(
                            <div key={index} className='CarouselItem'>
                                <SongCard data={item} id={item.id} currindx={index} type={type}/>
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