import React from 'react';
import Nav from '../../../../tools/Nav';
import Playlists from '../../../Playlists/';
import Spinner from '../../../../tools/Spinner';
import './main.scss';
import '../../Style-Templates/main.scss';
import '../../Style-Templates/testing/main.scss';



const View = props => {
	const fetching = true;
	return (
		<div className='view'>
		 	<Nav />
		 		<div className='section-title title'>
					<p>Discover</p>
				</div>

			<div className='f-playlists section-genres'>
			  <div className='f-playlists--prev section-genres-preview'>
				{ fetching ? <Spinner /> : <Playlists/> }
			  </div>
			</div>

		</div>
		)
}

export default View;