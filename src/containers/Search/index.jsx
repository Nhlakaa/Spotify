import React from 'react';
import Sidebar from '../../tools/Sidebar';
import './main.scss'


const Search = props => {
	return (
		<div className='search-section'>
			<Sidebar/>
			<div className='search-view'>
				<div className='search-bar'>
					<p>Search for an Artist, Song, Album or Playlist</p>
					<input className='search-input' type='text' placeholder='Start typing...' />
				</div>
			</div>
		</div>
		)
}

export default Search;