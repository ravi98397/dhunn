import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route,} from 'react-router-dom';
import Header from './components/Header/Header';
import TrendingSongs from './Pages/TrendingSongs/TrendingSongs'
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import { getArtist, getGenre, getSong, getUser } from './actions/asyncActions/getActions';
import { useEffect } from 'react';
import HomePage from './Pages/homepage/HomePage';
import NewSongs from './Pages/NewSongs/NewSongs';
import OldSongs from './Pages/OldSongs/OldSongs';
import AlbumPage from './Pages/AlbumPage/AlbumPage';
import LoginPage from './Pages/LoginPage/LoginPage';

function App() {

  useEffect( ()=>{
  }, []) 

  
  
  return (
        <div className="App">
          {/*<img src={logo} className="logo1" alt="logo" />*/}
          <Header/>
          {
            useSelector(state => state.Player.playerinit) ? <MusicPlayer/> : <></>
          }
            
          <Routes>
            {/*<Route exact path="/" element={ <HomePage/> } />*/}
            <Route exact path="/" element={ <HomePage/> } />
            <Route exact path="/All" element={ <HomePage/> } />
            <Route path="/TrendingSongs" element={ <TrendingSongs/> } />
            <Route path="/NewSongs" element={ <NewSongs/> } />
            <Route path="/OldSongs" element={ <OldSongs/> } />
            <Route path="/Album" element={ <AlbumPage/> } />
            <Route path="/Login" element={ <LoginPage/> } />
          </Routes>
        </div>
  );
}

export default App;
