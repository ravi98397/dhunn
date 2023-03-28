import SongCard from '../../components/Cards/Song/SongCard';
import './SongCardPage.css';

const SongCardPage = (props) => {
    let data = props.data;   //data should be iterable and should have imgurl
    
    let playlist_id = props.playlist_id;
    //let key = props.key;
    
    return(
        <div className='SongCardPage'>
            <div className='SongCardPageHeading'>
                <h2>{props.heading}</h2>
            </div>
            <div className='AllSongCards'>
                {data.map((item, index) => 
                    <div key={index} className='CarouselItem'>
                        <SongCard data={item} playlist_id={playlist_id} currindx={index}/>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SongCardPage;