import './LoadingCarousel.css';
import SongCard from '../Cards/Song/SongCard';
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs';
import { useRef, useEffect, useState } from 'react';
import CardLoader from '../Loaders/CardLoader/CardLoader';

const LoadingCarousel = () => {

    let dummydata = ["title1", "title2", "title3", "title4", "title5", "title6", "title7",
                "title8", "title9"];


    let [maxScrollable, setMaxScrollable] = useState(0);        
    let curItemsDiv = useRef(0);
    let curItemDiv = useRef(0);


    
    useEffect(() => {
        setMaxScrollable(curItemsDiv.current.offsetWidth * dummydata.length);
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
        <div className="LoadingCarousel">
            <div className='CarouselHeader'>
                <p className='CarouselHeading'>Song Header1</p>
            </div>
            <div className='CarouselBody'>
                <div className='CarouselLeftButton'>
                    <button onClick={scrollLeft}><BsFillArrowLeftCircleFill size={25}/></button>
                </div>
                <div ref={curItemsDiv} className='CarouselItems'>
                    {dummydata.map((name, index) => 
                        <div ref={curItemDiv} key={index} className='CarouselItem'>
                            <CardLoader/>
                        </div>
                    )}
                </div>
                <div className='CarouselRightButton'>
                    <button onClick={scrollRight}><BsFillArrowRightCircleFill size={25}/></button>
                </div>
            </div>
        </div>
    )
}

export default LoadingCarousel;