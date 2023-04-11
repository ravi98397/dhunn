import { useEffect, useRef, useState } from 'react';
import { HiDotsVertical } from 'react-icons/hi';
import './ContextMenu.css';
const ContextMenu = (props) => {
    let data = ["Share", "Add to Playlist", "Download", "View Lyrics", "Play Similar Songs", "Get Song info"]
    let checkref = useRef(0);

    let innerwidth = window.innerWidth;
    let innerheight = window.innerHeight;

    let vx = props.clientX;
    let vy = props.clientY;
    //console.log(vx, vy)
    //let vx = 100;
    //let vy = 100;

    let eleh = checkref.current.clientHeight;
    let elew = checkref.current.clientWidth;

    useEffect(() => {
        /*
        if(vx + elew > innerwidth){
            checkref.current.style.left = (vx-elew)+'px';
            console.log("settign width", checkref.current.style.left)
        }

        if(vy > innerheight){
            checkref.current.style.top = (vy-eleh)+'px';
            console.log("settign height", checkref.current.style.top)
        }*/
        checkref.current.style.left = vx+'px';
        checkref.current.style.top = vy+'px';
    }, [checkref])
        

    //console.log(checkref)
    
    return(
        <>
            <div className="wrapper" ref={checkref}>
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