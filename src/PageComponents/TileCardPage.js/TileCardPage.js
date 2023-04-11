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

    console.log("call is comminggggggggggg hereeeeeeeeeeeee", songs)

    return(
        <>
            <Details_info name={name} createdBy={createdBy} type={type}></Details_info>
            <SingleLineFilter/>
            <div className='AllSongTiles'>
                {
                    songs.map(
                        (item, index) => {
                            return(<SongTile
                                    id = {index} 
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