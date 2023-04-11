import { useEffect, useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import './SearchBox.css';
import { fetchAlbumById, fetchArtistById, fetchSongById, getSearchResults } from '../../services/Helpers/getRequests';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const SearchBox = () => {

    const [searchText, setSearchText] = useState("");
    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    console.log(data)

    useEffect(() => {
        axios.get(`http://localhost:8080/search?term=${searchText}`)
        .then(res => setData(res.data))
    },[searchText])

    const updateSearchText = (e) => {
        setSearchText(e.target.value);
        console.log("chainging")
    }

    const processReq = (e) => {
        let item = (data[e.currentTarget.id]);

        switch(item.type){
            case 'song':
                console.log("triggered")
                dispatch(fetchSongById(item.id));
                break;
            case 'artist':
                dispatch(fetchArtistById(item.id));
                break;
            case 'album':
                dispatch(fetchAlbumById(item.id));
                break
            default:
                console.log("nothing.....")
        }
    }

    return (
        <div className="swrapper">
            <input type="text" 
                className="input_box" 
                placeholder="Search Artists, Songs, Albums" 
                onChange={updateSearchText}
            />
            <div className='sresults'   >
                {
                    data.map((val, index) => 

                    <Link 
                        id={index}
                        to={
                            val.type+"/"+val.id
                        }
                        className='sresult'
                        //onClick={processReq}
                        >
                            {val.value}
                            <span className='searchType'>{val.type}</span>
                        </Link>   )
                }
            </div>
        </div>
    );
}

export default SearchBox;