import './TopView.css';

const TopView = () => {
    return(
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <ul className="carousel_items">
                <li>
                    <img src="SongArt.png" alt="song1"/>
                </li>
                <li>
                    <img src="SongArt.png" alt="song2"/>
                </li>
                <li>
                    <img src="SongArt.png" alt="song3"/>
                </li>
                <li>
                    <img src="SongArt.png" alt="song3"/>
                </li>
                <li>
                    <img src="SongArt.png" alt="song3"/>
                </li>
            </ul>
        </div>
    );
}


export default TopView;