import React, {Fragment} from 'react';
import Nav from '../../../../tools/Nav';
import Spinner from '../../../../tools/Spinner';
import Playlist from '../../../Playlists/';

import './main.scss';
import '../../Style-Templates/main.scss';
import '../../Style-Templates/testing/main.scss';



const View = props => {
	const fetching = false;

	return (
		<div className='view'>
		<Nav/>

		<div className='section-title'>
			<p>made for {props.name}</p>
		</div>
			<div className='f-playlists section-playlists'>
			  <div className='f-playlists--prev section-playlists-preview'>
				{ fetching ? <Spinner /> : <Playlists name={props.name} playlists={props.playlists} />}
			  </div>
			</div>
		</div>
		)
};


const Playlists = props => {

	return (
		<Fragment>
			{props.playlists.map(item => {return (
			  <Playlist key={item.id} name={item.name} image={item.images[0].url} isPlaylist={true} isPlaying={false} />
				)})}
		</Fragment>
	)
}


export default View;