import "./SongCard.css";
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { SiApplemusic } from 'react-icons/si';
import { FaEdit } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { setEdit } from "../../../actions/updateAction";
import { initializePlayer } from "../../../services/Helpers/getRequests";


const SongCard = (props) => {
    let data = props.data;
    let type = props.type;
    let title = data.name;
    let URL = data.imgurl;
    //console.log(URL)

    let dispatch = useDispatch();

    //console.log(props.playlist_id, props.currindx); 
    
    return(

		<div 
        className="songcard"
        onClick={() => {
            dispatch(initializePlayer(props.id, props.currindx, type))
        }}
        >
            <div className="overlayer">
                <AiOutlinePlayCircle className="fa-play-circle"/>
            </div>
            {
                URL != null ? 
                <img src={URL} className="card-img-top" alt="image not found"/> :
                <img src={`${process.env.PUBLIC_URL}/SongArt.png`} className="card-img-top" alt="image not found"/> 
            }
			<div className="title">
				<a href="#"
                    onClick={() => {
                        dispatch(initializePlayer(props.playlist_id, props.currindx))
                    }}>{title}</a>
			</div>
		</div>	
    );
}

export default SongCard;