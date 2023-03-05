import "./CardLoader.css";
import { ScaleLoader, BeatLoader, BarLoader} from 'react-spinners';

const CardLoader = (props) => {
    //let data = props.data;
    let title = props.title;
    return(
        <div className="card">
            <a href="#">
                <div className="ArtistCardTopLoader">
                    <div className="AlignCenter">
                        <ScaleLoader
                            height={35}
                            width={4}
                            radius={2}
                            margin={2}
                            color="#010101"
                        />
                    </div>
                </div>
            </a>
            <div className="card-body">
                <div className="card-title">
                    <ScaleLoader
                        height={5}
                        width={4}
                        radius={2}
                        margin={2}
                        color="#010101"    
                    />
                </div>
            </div>
        </div>
    );
}

export default CardLoader;