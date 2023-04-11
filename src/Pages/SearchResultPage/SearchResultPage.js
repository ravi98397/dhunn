import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardCarousel from "../../components/CardCarousel/CardCarousel";
import LoadingCarousel from "../../components/LoadingCarousel/LoadingCarousel";
import { fetchLatestSong, fetchTrendingSong } from "../../services/Helpers/getRequests";
import AlbumPage from "../AlbumPage/AlbumPage";


const SearchResultPage = (props) => {

    console.log("we are on search result page !!!!")

    let result = props.result;
    let album = [];
    let songs = [];
    let artist = [];

    for(let i in result){
        switch(result[i].type){
            case 'song':
                songs.push(result[i]);
                break;
            case 'artist':
                artist.push(result[i]);
                break;
            case 'album':
                album.push(result[i]);
                break
            default:
                console.log("defaulllllllllllllt");
        }
    }

    return(
        <div>
            welcome to search reslut page !!!
        </div>
    )
}

export default SearchResultPage;