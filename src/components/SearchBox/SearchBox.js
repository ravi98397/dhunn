import { useEffect, useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import './SearchBox.css';

const SearchBox = () => {

    const [searchText, setSearchText] = useState("");

    const [data, setData] = useState(["vbnhuiisudosid", "data1", "data2", "data2"]);
    
    console.log(data);


    const updateSearchText = (e) => {
        
        let arr = [];
        let random = Math.random() * 20;
        for(let i = 0; i < random; i++){
            arr.push(searchText);
        }

        setData(arr);
        setSearchText(e.target.value);
    }

    return (
        <div className="swrapper">
            <input type="text" 
                className="input_box" 
                placeholder="Search Artists, Songs, Albums" 
                onChange={updateSearchText}
            />
            <div className='sresults'>
                {
                    data.map((val, index) => <a href='#' className='sresult'>{val}</a>   )
                }
            </div>
        </div>
    );
}

export default SearchBox;