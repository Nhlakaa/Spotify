import React, {Fragment} from 'react';
import Nav from '../../../../tools/Nav';
import '../../Style-Templates/main.scss';
import '../../Style-Templates/testing/main.scss';
import Playlist from '../../../Playlists/';
import Spinner from '../../../../tools/Spinner';
import './main.scss';



const View = props => {
	const fetching = false;
	
	return (
		<div className='view'>
		 	<Nav />
			<div className='section-title title'>
				<p>Categories</p>
			</div>

			<div className='f-playlists section-genres'>
			  <div className='f-playlists--prev section-genres-preview'>
				{ fetching ? <Spinner /> : <Playlists playlists={props.playlists} /> }
			  </div>
			</div>	

		</div>
	);
}

const Playlists = props => {

	return (
		<Fragment>
			{props.playlists.map(item => {return (
			  <Playlist key={item.id} name={item.name} image={item.icons[0].url} isPlaylist={false} isPlaying={false} />
				)})}
		</Fragment>
	)
}


export default View;



