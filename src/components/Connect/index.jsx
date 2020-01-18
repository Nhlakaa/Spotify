import React from 'react';
import './main.scss';
import cover from '../../assets/cover.jpg';
import logo from '../../assets/logo/logo.png';


const Connect = props => {
	return (
		<div className='connect'>
			<div className='cover-image'>
				<img src={cover} alt='' />
				<div className='after'/>
			</div>
			<a 
			   className='connect-spotify' 
			   href='https://spotify-clone-ap.herokuapp.com/connect'> Connect to Spotify 
			</a>
			<p>Spotify Clone</p>
			<img className='logo' src={logo} alt=''	/>
		</div>
		)
}

export default Connect;