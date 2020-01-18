import React from 'react';
import Sidebar from '../../../tools/Sidebar';
import '../main.scss';
import View from './view';
import {connect} from 'react-redux';


const New = props => { 
		return (
			<div className='browse-view'>
				<Sidebar />
				<View name='Nhlaka' playlists={props.playlists}/>
			</div>
		)
	}

const mapState = state => {
	return { 
	playlists: state.newReleases.items
 }
}

export default connect(mapState)(New);

