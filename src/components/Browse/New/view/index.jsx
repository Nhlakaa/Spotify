import React, {Fragment} from 'react'
import Nav from '../../../../tools/Nav';
import Playlist from '../../../Playlists/';
import Spinner from '../../../../tools/Spinner';
import './main.scss';
import '../../Style-Templates/main.scss';
import '../../Style-Templates/testing/main.scss';



const View = props => {

	const fetching = false;
	
	return (
		<div className='view'>
		 	<Nav />
		 	<div className='section-title title'>
				<p>new releases</p>
			</div>
			<div className='f-playlists section-genres'>
			  <div className='f-playlists--prev section-genres-preview'>
				{ fetching ? <Spinner /> : <Playlists playlists={props.playlists}/> }
			  </div>
			</div>

		</div>
		)
}

const Playlists = props => {

	return (
		<Fragment>
			{props.playlists.map(item => {return (
			  <Playlist key={item.id} name={item.name} image={item.images[1].url} isPlaylist={true} isPlaying={false} />
				)})}
		</Fragment>
	)
}




export default View;

		
