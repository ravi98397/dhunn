import './CardCarousel.css';
import SongCard from '../Cards/Song/SongCard';
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs';
import { useRef, useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';

//expects array of songs, with id and name details at least
const CardCarousel = (props) => {

    let state = useSelector(state => state);
    //console.log(state)

    let data = props.songlist;   // array of songs
    let type = props.type
    let id = props.id;

    console.log(data)

    let [maxScrollable, setMaxScrollable] = useState(0);        
    let curItemsDiv = useRef(0);
    let curItemDiv = useRef(0);
    
    useEffect(() => {
        setMaxScrollable(curItemsDiv.current.offsetWidth * data.length);
      }, []);
    

    function scrollLeft() {
        
        let maxscr = maxScrollable;
        console.log(curItemsDiv.current.scrollLeft);
        if((maxscr - Math.ceil(curItemsDiv.current.scrollLeft + curItemsDiv.current.offsetWidth)) >= 0){
            curItemsDiv.current.scrollLeft = curItemsDiv.current.scrollLeft + curItemsDiv.current.offsetWidth;
        }else{
            curItemsDiv.current.scrollLeft = maxscr;
        }
        
    }

    function scrollRight() {
        let maxscr = maxScrollable;
        console.log(curItemsDiv.current.scrollLeft);
        if((Math.ceil(curItemsDiv.current.scrollLeft - curItemsDiv.current.offsetWidth)) >= 0){
            curItemsDiv.current.scrollLeft = curItemsDiv.current.scrollLeft - curItemsDiv.current.offsetWidth;
        }else{
            curItemsDiv.current.scrollLeft = 0;
        }
    }
    
    return (
        <div className="cardCarousel">
            <div className='CarouselHeader'>
                <p className='CarouselHeading'>{props.heading}</p>
            </div>
            <div className='CarouselBody'>
                <div className='CarouselLeftButton'>
                    <button onClick={scrollRight}><BsFillArrowLeftCircleFill size={25}/></button>
                </div>
                <div ref={curItemsDiv} className='CarouselItems'>
                    {data.map((obj, index) => {
                            return (
                            <div ref={curItemDiv} key={obj.id} className='CarouselItem'>
                                <SongCard data={obj} id={id} currindx={index} type={type}/>
                            </div>
                            )
                        }
                    )}
                </div>
                <div className='CarouselRightButton'>
                    <button onClick={scrollLeft}><BsFillArrowRightCircleFill size={25}/></button>
                </div>
            </div>
        </div>
    )
}

export default CardCarousel;