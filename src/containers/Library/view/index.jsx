import React  from 'react';
import {Link} from 'react-router-dom';
import './main.scss';
import Spinner from '../../../tools/Spinner'

const View = props => {
	return (
		<div className='library'>
			<Navigation />
			<div className='library-playlists'>
				<Spinner />
			</div>
		</div>
		)
}

const Navigation = props => {
	return (
		<div className='library-nav'>
			<div className='library-nav-items'>
				<div className='library-nav-item'>
					<Link className='lib-item' to='/library'>Playlists</Link>
				</div>
				<div className='library-nav-item'>
					<Link className='lib-item' to='/library'>Podcast</Link>
				</div>
			</div>
		</div>
	)
}


export default View;