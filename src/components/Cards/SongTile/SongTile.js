import './SongTile.css';
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs';
import { useRef, useEffect, useState } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { initializePlayer } from '../../../services/Helpers/getRequests';
import { useDispatch } from 'react-redux';

const SongTile = (props) => {
    let curindx = props.curindx;
    let song = props.song;
    let type = props.type;
    let dispatch = useDispatch();

    return (
            <div 
            className='SongTile'
            onClick={() => {
                dispatch(initializePlayer(props.id, curindx, type))
            }}>

                <div className="SongTileCard">
                    <div className='SongTileImg'>
                        <img src={song.imgurl} alt="tileimg"></img>
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