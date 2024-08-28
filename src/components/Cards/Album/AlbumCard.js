import "./AlbumCard.css";
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { SiApplemusic } from 'react-icons/si';
import { FaEdit } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { setEdit } from "../../../actions/updateAction";
import { initializePlayer } from "../../../services/Helpers/getRequests";
import { Link } from "react-router-dom";


const AlbumCard = (props) => {
    let albumid = props.id
    let data = props.data;
    let type = props.type;
    let title = data.name;
    let URL = data.songs.length > 0 ? data.songs[0].imgurl : null;

    let dispatch = useDispatch();

    //console.log(props.playlist_id, props.currindx); 
    
    return(
        <>
		<Link 
        className="albumcard"
        to={`/album/${albumid}`}
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
				<Link to={`/album/${albumid}`}>{title}</Link>
			</div>
		</Link>
        </>	
    );
}

export default AlbumCard;
