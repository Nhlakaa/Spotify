import React from 'react';
import Sidebar from '../../../tools/Sidebar';
import '../main.scss';
import View from './view';
import { connect } from 'react-redux'


const Categories = props =>{ 
		return (
			<div className='browse-view'>
				<Sidebar />
				<View  playlists={props.playlists} />
			</div>
		)
}


const mapState = state => {
	return {
		playlists: state.categories.items
	}
}
export default connect(mapState)(Categories);
