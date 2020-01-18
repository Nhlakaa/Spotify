import React from 'react';
import Sidebar from '../../../tools/Sidebar';
import View from './view'
import '../main.scss';
import Connect from '../../../components/Connect';
import {connect} from 'react-redux';

const Featured = props => {

		return (
			<div className='browse-view'>
				<Sidebar />
				{props.active ? <View name={props.name} playlists={props.playlists}/> : <Connect /> }
			</div>
		)
}

const mapState = state => {
	return {
		playlists : state.featured.items
	}
}


export default connect(mapState)(Featured);
