import React from 'react';
import { connect } from 'react-redux';
import cover from './cover.png';

const SongsDetail = ({ song }) => {
	// console.log('props', props);
  if( !song ) {
  	return <div>Select a Song</div>
  }
  return (
  	<div>
  		<h3>Details for: </h3>
  		<img src={cover} alt="cover" />
  		<hr />
  		<p>Title of the Song: <strong>{song.title}</strong></p>
  		<p>Duration of the Song: <strong>{song.duration}</strong></p>
  		<p>Song Qualtiy: <strong>{song.bitrate}</strong></p>
  	</div>
  )
}

const mapStateToProps = state => {
	return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongsDetail);