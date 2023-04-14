import { useDispatch } from 'react-redux';
import { initializePlayer } from '../../../services/Helpers/getRequests';
import './Details_info.css';


const Details_info = (props) => {
    let name = props.name;
    let createdBy = props.createdBy;
    let type = props.type;
    let id  = props.id;

    let dispatch = useDispatch();

    return(
        <div className='Details_info'>
            <div className='DetailsName'>
                <img className='DetailsSongImg' src={props.thumbnail}></img>
            </div>
            <div className='DetailsBody'>
                <p className='DetailsHeader'>{name}</p>
                <ul className='DetailsList'>
                    <li>{type}</li>
                    <li>{createdBy}</li>
                    <li>n tracks</li>
                </ul>
                <button className='Details_infoPlayBtn'
                  onClick={() => {
                    dispatch(initializePlayer(id, 0, type))
                    }}  
                >Play</button>
            </div>
        </div>
    )
}


export default Details_info;    