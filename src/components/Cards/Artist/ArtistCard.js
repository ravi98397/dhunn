import "./ArtistCard.css";
import { AiOutlinePlayCircle } from 'react-icons/ai';
import context from "react-bootstrap/esm/AccordionContext";

const ArtistCard = (props) => {
    //let data = props.data;
    let title = props.title;
    return(
        <div className="card">
            <a href="#">
                <img src="SongArt.png" className="card-img-top artist-img" alt="..."/>
                <div>
                    <span className="play_icon"><AiOutlinePlayCircle/></span>
                </div>
            </a>
            <div className="card-body">
                <a href="#" className="card-title">{title}</a>
            </div>
        </div>
    );
}

export default ArtistCard;