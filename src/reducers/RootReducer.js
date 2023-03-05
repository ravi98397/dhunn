import songReducer from './SongReducer';
import artistReducer from './ArtistReducer';
import genreReducer from './GenerReducer';
import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import playerReducer from './PlayerReducer';
import playlistReducer from './playlistReducer';

const allReducer = combineReducers({
    Songs: songReducer,
    Artist: artistReducer,
    Genre: genreReducer,
    User: userReducer,
    Player: playerReducer,
    Playlist: playlistReducer
})

export default allReducer;