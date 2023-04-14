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
            <Details_info 
                thumbnail={props.data.imgurl} 
                name={name} 
                createdBy={createdBy} 
                type={type}
                id={props.data.id}
            ></Details_info>
            <SingleLineFilter/>
            <div className='AllSongTiles'>
                <ul className='SongDetailsHeader'>
                    <li>Track</li>
                    <li>Artist</li>
                    <li>Duration</li>
                </ul>
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