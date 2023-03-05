import './Details_info.css';


const Details_info = () => {
    return(
        <div className='Details_info'>
            <div className='DetailsName'>
                <img className='DetailsSongImg' src="SongArt.png"></img>
            </div>
            <div className='DetailsBody'>
                <p className='DetailsHeader'>Trending Songs</p>
                <ul className='DetailsList'>
                    <li> Top trending list, refresed by me</li>
                    <li>Created By gaana</li>
                    <li>30 tracks</li>
                </ul>
                <button className='Details_infoPlayBtn'>Play</button>
            </div>
        </div>
    )
}


export default Details_info;    