import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardCarousel from "../../components/CardCarousel/CardCarousel";
import LoadingCarousel from "../../components/LoadingCarousel/LoadingCarousel";
import { fetchLatestSong, fetchTrendingSong } from "../../services/Helpers/getRequests";


const HomePage = () => {

    console.log("we are on home page !!!!")

    let playlists = useSelector(state => state.Playlist.playlists);
    let [top20songs, setTop20songs] = useState({});
    let [trendingSongs, setTrendingSongs] = useState({});

    for(let i in playlists){
        if(playlists[i].name === 'Latest_Songs' && playlists[i].userid === 7 && JSON.stringify(top20songs) === '{}'){
            setTop20songs(playlists[i])
            console.log("top20set")
        }

        if(playlists[i].name === 'Trending_Songs' && playlists[i].userid === 7 && JSON.stringify(trendingSongs) === '{}'){
            setTrendingSongs(playlists[i])
            console.log("trending set")
        }
    }

    //top 20 chart songs whatever that is

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTrendingSong('ADDPLAYLIST'))
        dispatch(fetchLatestSong('ADDPLAYLIST'))
    }, [])

    //make api calls to get all the relevent details

    return(
        <>
            {JSON.stringify(top20songs) === '{}' ? <LoadingCarousel/> : <CardCarousel heading="Top20 Songs" songlist={top20songs.songs} id={top20songs.id} type={'playlist'}/>}
            {JSON.stringify(trendingSongs) === '{}' ? <LoadingCarousel/> : <CardCarousel heading="Trending Songs" songlist={trendingSongs.songs} id={trendingSongs.id} type={'playlist'}/>}
        </>
    )
}

export default HomePage;