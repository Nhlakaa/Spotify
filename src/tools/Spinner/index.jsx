import React from 'react';
import {ClipLoader} from 'react-spinners';
import './main.scss'


const Spinner = props => {
	return (
		<div className ='spinner'>
			<ClipLoader color='#1DB954'/> 
		</div>
	)
}

export default Spinner;