import './ArtistCarousel.css';
import ArtistCard from '../Cards/Artist/ArtistCard';
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs';
import { useRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { propTypes } from 'react-bootstrap/esm/Image';

const ArtistCarousel = (props) => {

    
    let artistarr = props.artists.artists;
    console.log("artist props = ", props);
    
    let [maxScrollable, setMaxScrollable] = useState(0);        
    let curItemsDiv = useRef(0);
    let curItemDiv = useRef(0);


    
    useEffect(() => {
        setMaxScrollable(curItemsDiv.current.offsetWidth * artistarr.length);
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
        <div className="ArtistCarousel">
            <div className='CarouselHeader'>
                <p className='CarouselHeading'>{props.heading}</p>
                <button className='SeeAllLeft'>See All</button>
            </div>
            <div className='CarouselBody'>
                <div className='CarouselLeftButton'>
                    <button onClick={scrollLeft}><BsFillArrowLeftCircleFill size={25}/></button>
                </div>
                <div ref={curItemsDiv} className='CarouselItems'>
                    {artistarr.map((artistObj, index) => 
                        <div ref={curItemDiv} key={artistObj.id} className='CarouselItem'>
                            <ArtistCard title={artistObj.ArtistName}/>
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

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        artists: state.Artist
    }
}

export default connect(mapStateToProps)(ArtistCarousel);