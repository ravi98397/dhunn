import './Details_info.css';


const Details_info = (props) => {
    let name = props.name;
    let createdBy = props.createdBy;
    let type = props.type;
    return(
        <div className='Details_info'>
            <div className='DetailsName'>
                <img className='DetailsSongImg' src="SongArt.png"></img>
            </div>
            <div className='DetailsBody'>
                <p className='DetailsHeader'>{name}</p>
                <ul className='DetailsList'>
                    <li>{type}</li>
                    <li>{createdBy}</li>
                    <li>n tracks</li>
                </ul>
                <button className='Details_infoPlayBtn'>Play</button>
            </div>
        </div>
    )
}


export default Details_info;    