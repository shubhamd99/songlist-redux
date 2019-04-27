import React from 'react';
import SongList from './SongList';
import SongsDetail from './SongsDetail';
import './App.css'

const App = (props) => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide songlist">
            <SongList />
        </div>
        <div className="column eight wide">
            <SongsDetail />
        </div>
      </div>
    </div>
  )
}

export default App;
