import React from 'react';
import Sidebar from '../../../tools/Sidebar';
import '../main.scss';
import View from './view';


class Discover extends React.Component {

	render(){ 
		return (
			<div className='browse-view'>
				<Sidebar />
				<View name='Nhlaka' />
			</div>
		)
	}
}

export default Discover;