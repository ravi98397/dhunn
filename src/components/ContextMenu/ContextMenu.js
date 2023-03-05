import { useRef, useState } from 'react';
import { HiDotsVertical } from 'react-icons/hi';
import './ContextMenu.css';
const ContextMenu = () => {
    let data = ["Share", "Add to Playlist", "Download", "View Lyrics", "Play Similar Songs", "Get Song info"]
    
    let wrapperhidden = true;
    let [wrapperclass, setWrapperclass] = useState("wrapper disable");

    let checkref = useRef(0);

    const togglewrapper = (e) => {
        console.log("changing")
        console.log(checkref)
        wrapperhidden = !wrapperhidden;
        if(wrapperhidden){
            setWrapperclass("wrapper disable");
            //wrapperclass = "wrapper disable"
        }else{
            setWrapperclass("wrapper");
            //wrapperclass = "wrapper";
        }
    }
    
    return(
        <>
            <button onClick={togglewrapper}>
                <HiDotsVertical size={25}/>
            </button>
                <div class={wrapperclass} ref={checkref}>
                    <div class="content">
                        <ul class="menu">
                            {data.map((item, index) => 
                                <li class="item">
                                    <i class="uil uil-eye"></i>
                                    <span>{item}</span>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
        </>
    )
}

export default ContextMenu;