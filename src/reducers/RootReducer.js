import songReducer from './SongReducer';
import artistReducer from './ArtistReducer';
import genreReducer from './GenerReducer';
import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import playerReducer from './PlayerReducer';
import playlistReducer from './playlistReducer';
import albumReducer from './AlbumReducer';

const allReducer = combineReducers({
    Songs: songReducer,
    Artist: artistReducer,
    Genre: genreReducer,
    User: userReducer,
    Player: playerReducer,
    Playlist: playlistReducer,
    Album:albumReducer
})

export default allReducer;