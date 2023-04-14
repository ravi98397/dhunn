import './SongTile.css';
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs';
import { useRef, useEffect, useState } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { initializePlayer } from '../../../services/Helpers/getRequests';
import { useDispatch } from 'react-redux';
import { AiOutlinePlayCircle } from 'react-icons/ai';

const SongTile = (props) => {
    let curindx = props.curindx;
    let song = props.song;
    let type = props.type;
    let dispatch = useDispatch();

    console.log(song.album)

    return (
            <div 
            className='SongTile'
            onClick={() => {
                dispatch(initializePlayer(song.album, curindx, type))
            }}>
                <div className="overlayer">
                    <AiOutlinePlayCircle size={30} className="fa-play-circle"/>
                </div>
                <div className="SongTileCard">
                    <div className='SongTileImg'>
                    {
                        song.imgurl != null ? 
                        <img src={song.imgurl} className="tileimg" alt="images"/> :
                        <img src={`${process.env.PUBLIC_URL}/SongArt.png`} className="tileimg" alt="image not found"/> 
                    }       
                    </div>
                    <div className='SongTileDetails'>
                        <div className='SongDetails'>
                            <ul>
                                <li className='sdSongName'>{song.name}</li>
                                <li className='sdSinger'>{song.album.name}</li>
                                <li className='sdDuration'>{"04:00"}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default SongTile;