import { useSelector } from 'react-redux';
import Details_info from '../../components/Cards/Details_info/Details_info';
import SongTile from '../../components/Cards/SongTile/SongTile';
import SingleLineFilter from '../../components/SingleLineFilter/SingleLineFilter';
import './TileCardPage.css';

const TileCardPage = (props) => {

    let songs = props.data.songs;
    let type = props.type;

    let name = props.data.name;
    let createdBy = "dhunn";

    return(
        <>
            <Details_info name={name} createdBy={createdBy} type={type}></Details_info>
            <SingleLineFilter/>
            <div className='AllSongTiles'>
                {
                    songs.map(
                        (item, index) => {
                            return(<SongTile
                                    id = {item.id} 
                                    key = {index}
                                    type= {props.type}
                                    curindx={index} 
                                    song={item}/>)
                                }
                            )
                }
            </div>
            
        </>
    );
}

export default TileCardPage;