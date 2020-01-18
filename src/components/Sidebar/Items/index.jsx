import React from 'react';
import {Link} from 'react-router-dom';
import './main.scss';
import * as icons from './icons';


const active = { color : '#1DB954' } 
const inactive = { color: '#D2D2D2'}

export const Search = props => {
	return (
		<div className='item'>
			<div className='item-icon'>
				<icons.Search color={props.active ? '#1DB954' : '#D2D2D2'} />
			</div>
				<Link className='sidebar-item' to={props.path} style={props.active ? active : inactive}> Search </Link>
		</div>
	)
}

export const Home = props => {
		return (
		<div className='item'>
			<div className='item-icon'>
				<icons.Home color={props.active ? '#1DB954' : '#D2D2D2'} />
			</div>
			<Link className='sidebar-item' to={props.path} style={props.active ? active : inactive} > Home </Link>
		</div>
	)
}

export const Music = props => {
	return (
		<div className='item'>
			<div className='item-icon'>
				<icons.Library color={props.active ? '#1DB954' : '#D2D2D2'} />
			</div>
			<Link className='sidebar-item' to={props.path} style={props.active ? active : inactive}> Your Music </Link>
		</div>
	)
}