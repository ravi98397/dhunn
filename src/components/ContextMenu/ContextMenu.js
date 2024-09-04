import { useEffect, useRef, useState } from 'react';
import { AiOutlineBorder } from 'react-icons/ai';
import { HiDotsVertical } from 'react-icons/hi';
import './ContextMenu.css';
const ContextMenu = (props) => {
    let data = ["Share", "Add to Playlist", "Download", "View Lyrics", "Play Similar Songs", "Get Song info"]
    let checkref = useRef(0);
    let [disabled, setDisabled] = useState(true);

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

       if(disabled){
          console.log("this is context menu checkref", checkref) 
          checkref.current.classList.add("disable");
       }else{
          checkref.current.classList.remove("disable");
       }
        
        checkref.current.style.left = vx+'px';
        checkref.current.style.top = vy+'px';
    }, [checkref, disabled])
        

    //console.log(checkref)
    const updateContextMenuLoc = () => {
      setDisabled(!disabled); 
    }

    return(
    <>
      <div className="wrapper">
        <div>
          <HiDotsVertical size={25} onClick={updateContextMenuLoc} style={{border:"1px solid black"}}/>
        </div>
        <div class="content disable" ref={checkref}>
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
