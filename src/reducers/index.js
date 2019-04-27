import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Awarapan', duration: '4.05', bitrate: '128kbps' },
        { title: 'Tum Hi Ho', duration: '3.15', bitrate: '128kbps' },
        { title: 'Emptiness', duration: '2.20', bitrate: '128kbps' },
        { title: 'Dil Diya galla', duration: '6.20', bitrate: '128kbps' },
        { title: 'Ha tu hai', duration: '5.05', bitrate: '128kbps' },
        { title: 'Tere liye', duration: '4.42', bitrate: '128kbps' },
        { title: 'Mohabatein', duration: '4.55', bitrate: '128kbps' },
        { title: 'Isme Tera Ghata', duration: '3.45', bitrate: '128kbps' },
        { title: 'Mujhe Pyaar Do', duration: '4.05', bitrate: '128kbps' },
        { title: 'Channa Merya', duration: '3.15', bitrate: '128kbps' },
        { title: 'Tere bin', duration: '4.20', bitrate: '128kbps' },
        { title: 'Jab teri yaad ayegi', duration: '6.20', bitrate: '128kbps' },
        { title: 'Kirdar Tera Hu', duration: '5.05', bitrate: '128kbps' },
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if ( action.type === 'SONG_SELECTED' ) {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});