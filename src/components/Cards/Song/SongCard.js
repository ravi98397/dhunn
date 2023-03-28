import "./SongCard.css";
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { SiApplemusic } from 'react-icons/si';
import { FaEdit } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { setEdit } from "../../../actions/updateAction";
import { initializePlayer } from "../../../services/Helpers/getRequests";


const SongCard = (props) => {
    let data = props.data;

    let title = data.name;
    let URL = data.imgurl;
    //console.log(URL)

    let dispatch = useDispatch();

    //console.log(props.playlist_id, props.currindx); 
    
    return(
        <div className="card">
            <a 
                href="#"
                onClick={() => {
                    dispatch(initializePlayer(props.playlist_id, props.currindx))
                }}
            >    
                {
                    URL != null ? 
                        <img src={URL} className="card-img-top" alt="image not found"/> :
                        <img src={`${process.env.PUBLIC_URL}/SongArt.png`} className="card-img-top" alt="image not found"/> 
                }
                
                
                <div>
                    <span className="play_icon"><AiOutlinePlayCircle/></span>
                </div>
            </a>
            <div className="card-body">
                <a 
                href="#" onClick={() => {
                    dispatch(initializePlayer(props.playlist_id, props.currindx))
                }} 
                className="card-title">{title}</a>
            </div>
        </div>
    );
}

export default SongCard;