import "./ArtistCard.css";
import { AiOutlinePlayCircle } from 'react-icons/ai';
import context from "react-bootstrap/esm/AccordionContext";

const ArtistCard = (props) => {
    let data = props.data;
    let type = props.type;
    let title = data.name;
    let URL = data.imgurl;
    //console.log(URL)

    let dispatch = useDispatch();

    //console.log(props.playlist_id, props.currindx); 
    
    return(

		<div 
        className="artistcard"
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

export default ArtistCard;