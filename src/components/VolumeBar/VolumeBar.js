import { FiVolume2 } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import './VolumeBar.css'


const VolumeBar = (props) => {
    let dispatch = useDispatch();
    
    let curraudio = useSelector(state => state.Player.audio);

    const updateAudioState = (e) => {
        console.log(e)
        dispatch({
            type: "UPDATEAUDIO",
            payload: e.target.value
        });
    }

    return(
        <>
            <input type="range" 
            className="FooterSongAudioRange" 
            orient="vertical"
            name="audiorange" 
            min="0" 
            max="100" 
            value={curraudio}
            onChange={updateAudioState}
            />
        </>
    );
}

export default VolumeBar;