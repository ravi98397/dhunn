import "./FixedHeader.css";
import { generatePath, Link } from 'react-router-dom';
import HomePage from "../../Pages/homepage/HomePage";

const FixedHeader = (props) => {
    let data = props.data;
    let getPath = (item) => {
        let arr = item.split(" ");
        let newdata = ""
        for(let i=0; i < arr.length; i++){
            newdata += arr[i];
        }
        return "/"+newdata;
    }
    return(
            <ul className="nav .bg-light">
                {data.map(item => (
                    <li className="nav-item" key={data.indexOf(item)}>
                        <Link className="nav-link" aria-current="page" to={getPath(item.name)}>
                            {item.name}
                        </Link>
                    </li>
                ))}     
        </ul>
    );
}

export default FixedHeader;