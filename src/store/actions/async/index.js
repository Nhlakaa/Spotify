import * as actions from '../index.js';
import axios from 'axios';
import queryString from 'query-string';

const val = queryString.parse(window.location.search);
const access = val.access;


const instance = axios.create({
	baseURL: 'https://api.spotify.com/v1/',
	headers: {'Authorization': 'Bearer ' + access}
})


export const getUser = () => {
	
	return dispatch => {
		dispatch(actions.requestUser())

		return instance.get('/me')
				.then(data => dispatch(actions.receiveUser(data)))
				.catch(err => err)
	}
}

export const getUserPlaylists = () => {
	return dispatch => {
		dispatch(actions.requestUserPlaylists())

		return instance.get('/me/playlists?offset=0&limit=10')
				.then(data => dispatch(actions.receiveUserPlaylists(data)))
				.catch(err => err)
	}
}


export const getFeatured = () => {
	return dispatch => {
		dispatch(actions.requestFeatured())

		return instance.get('/browse/featured-playlists?limit=5')
				.then(data => dispatch(actions.receiveFeatured(data)))
				.catch(err => err)

	}	
}

export const getCategories = () => {
	return dispatch => {
		dispatch(actions.requestCategories())

		return instance.get('/browse/categories?limit=10&country=SE&offset=0')
				.then(data => dispatch(actions.receiveCategories(data)))
				.catch(err => err)

	}	
}

export const getNew = () => {
	return dispatch => {
		dispatch(actions.requestNEW())

		return instance.get('/browse/new-releases?Country=SE&offset=0&limit=10')
				.then(data => dispatch(actions.receiveNEW(data)))
				.catch(err => err)
	}
}

export const getRecent = () => {
	return dispatch => {
		dispatch(actions.requestUserRecent())

		return instance.get('/me/player/recently-played?limit=2&offset=0')
				.then(data => dispatch(actions.receiveUserRecent(data)))
				.catch(err => err)

	}	
}