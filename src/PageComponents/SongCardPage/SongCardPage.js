import SongCard from '../../components/Cards/Song/SongCard';
import './SongCardPage.css';

const SongCardPage = (props) => {
    let data = props.data;   //data should be iterable and should have imgurl
    
    console.log("this is song card page")
    console.log(data)

    let id = props.id;
    let type = props.type;
    //let key = props.key;
    
    return(
        <div className='SongCardPage'>
            <div className='SongCardPageHeading'>
                <h2>{props.heading}</h2>
            </div>
            <div className='AllSongCards'>
                {data.map((item, index) => 
                    <div key={index} className='CarouselItem'>
                        <SongCard data={item} id={id} currindx={index} type={type}/>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SongCardPage;