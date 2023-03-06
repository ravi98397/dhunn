import { AiFillStepBackward, AiFillStepForward, AiOutlineHeart } from 'react-icons/ai';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { HiDotsVertical } from 'react-icons/hi';
import { IoMdShuffle, IoMdRepeat } from 'react-icons/io';
import { FiVolume2 } from 'react-icons/fi';
import './MusicPlayer.css';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContextMenu from '../ContextMenu/ContextMenu';
import VolumeBar from '../VolumeBar/VolumeBar';
import { useEffect } from 'react';

const SONGURL = 'http://localhost:4000/getSong/'

const MusicPlayer = () => {

    let songList = useSelector(state => state.Player.songList);
    let curindx = useSelector(state => state.Player.currentlyPlaying);
    let music = songList[curindx];
    
    const player = useSelector(state => state.Player);


    const songref = useRef(0);
    console.log(songref);
    const progressref = useRef(0);
    
    let curraudio = useSelector(state => state.Player.audio)
    const [timer, setTimer] = useState(0);
    const [duration, setDuration] = useState(0);

    let [audiobarstatus, setAudiobarstatus] = useState(false);

    let dispatch = useDispatch();
    
    const strtime = (time) => {
        const totalMs = time * 1000;
        const result = new Date(totalMs).toISOString().slice(14, 19);
        return result;
    }
    
    const updateProgress = () => {
        setTimer(songref.current.currentTime)
    }

    const changeProgress = (event) => {
        songref.current.currentTime = progressref.current.value;
    }

    const playpause = () => {
        
        let actionpp = {
            type:'PLAYPAUSE'
        }

        dispatch(actionpp);
        if(player.isPlaying){
            songref.current.pause(); 
        }else{
            songref.current.play(); 
        }
    }

    const next = () => {
        let action = {
            type:'NEXT'
        }
        dispatch(action)
    }

    const prev = () => {
        let action = {
            type:'PREV'
        }
        dispatch(action)
    }

    const shuffle = () => {
        let action = {
            type:'SHUF'
        }
        dispatch(action)
    }

    const repeat = () => {
        songref.current.currentTime = 0;
    }

    useEffect(() => {
        console.log("updating audio")
        console.log(curraudio)
        songref.current.volume = curraudio/100;
    }, [curraudio])

    /*
    const updateAudio = (event) => {
        setCurraudio(event.target.value);
        songref.current.volume = curraudio/100;
    }*/

    const toggleAudioBarStatus = () => {
        setAudiobarstatus(!audiobarstatus);
    }

    let [conx, setConx] = useState(0);
    let [cony, setCony] = useState(0);
    const updateContextMenuLoc = (e) => {
        console.log(e)
        setConx(e.pageX);
        setCony(e.pageY);
    }


    return(
        <>
        <ContextMenu clientX={conx} clientY={cony}/>
        <header className="FooterMusicPlayer">
            <div className='FooterSongProgressBar'>
                <input type="range" ref={progressref} className='FooterSongRange' name="progress" min="0" max={duration} value={timer} 
                onChange={changeProgress}/>
            </div>
            <div className='PlayerComponents'>
                <div className='FooterSongDetail'>
                    <img src="SongArt.png" alt="song-img" className='FooterSongImg' />
                    <audio autoPlay ref={songref}  preload="none" 
                    onPlay={()=>{setDuration(songref.current.duration.toFixed(2));}}
                    onTimeUpdate={updateProgress}
                    src={music.downloadlink128kbps} 
                    type="audio/mpeg"
                    >
                    </audio>
                    <div className="FooterSongItem">
                        <p>{music.name}<br/>
                        <small>{music.album.name}</small></p>
                    </div>
                    <div className='FooterFavIcon'>
                        <AiOutlineHeart size={25}/> 
                    </div>
                    <div className='FooterCollapseMenu'>
                        
                        <button className='noStyleButton'>
                            
                            <HiDotsVertical size={25} onClick={updateContextMenuLoc}/>
                        </button>
                    </div>   
                </div>
                <div className='FooterPlayerOption'>
                    <div className='FooterPlayerTimer'>
                        <span className='FooterTimer'>{strtime(timer)} / {strtime(duration)}</span>
                    </div>
                    <div className='FooterPlayerNav'>
                        <div className='FooterItem'>
                            <button className="noStyleButton" onClick={repeat}><IoMdRepeat size={25}/></button>
                        </div>
                        <div className='FooterItem'>
                            <button className="noStyleButton" onClick={prev}><AiFillStepBackward size={25}/></button> 
                        </div>
                        <div className='FooterItem'>
                            <button className='noStyleButton' onClick={playpause}><BsFillPlayCircleFill size={40}/></button>
                        </div>   
                        <div className='FooterItem'>
                            <button className="noStyleButton" onClick={next}><AiFillStepForward size={25}/></button> 
                        </div>
                        <div className='FooterItem'>
                            <button className="noStyleButton" onClick={shuffle}><IoMdShuffle size={25}/></button>
                        </div>
                    </div>
                </div>
                <div className='FooterOtherOPtion'>
                    <div className='FooterItem'>
                        {audiobarstatus ? <VolumeBar className="FooterAudioRange"/> : <></>}
                        <button className='noStyleButton' onClick={toggleAudioBarStatus}>
                            <FiVolume2 size={25} className='FooterAudioIcon'/>
                        </button>
                    </div>
                    <div className='FooterItem FooterAudioQuality'>
                        <button>Audio: High</button>
                    </div>
                    <div className='FooterItem FooterUpnext'>
                        <div>
                            { curindx + 1 >= songList.length ?
                                <></>:
                                <button className='noStyleButton upnextpanel'>
                                    Up Next <br/> <b>{songList[curindx + 1].name }</b>
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </header>    
    </>
    )
}

export default MusicPlayer;