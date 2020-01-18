import initialState from '../../_utils/';
import {combineReducers} from 'redux';
import * as actions from '../actions/async';
import {featured, categories, newReleases} from './playlists'
import {configureStore} from '@reduxjs/toolkit';


export const init = initialState;


const user = (state = init.user, action) => {
	switch(action.type) {

		case 'REQUEST_USER' : return Object.assign({}, state, {
			...state,
			isFetching : true
		})

		case 'RECEIVE_USER' : return Object.assign({}, state, {
			...state, 
			active: true,
			isFetching: false,
			currentUser: {
				...state.currentUser,
				user : action.user
			}
		})

		case 'RECEIVE_RECENT_CONTENT' : return Object.assign({}, state, {
			...state, 
			currentUser: {
				...state.currentUser,
				recent: {
					music : action.playlists
				}
			}
		})

		case 'RECEIVE_USER_PLAYLIST' : return Object.assign({}, state, {
			...state, 
			currentUser: {
				...state.currentUser,
				playlists: action.playlists
			}
		})
		
		default: return state;
 }
}

const root = combineReducers({user, featured, categories, newReleases});
export const store = configureStore({reducer: root});


store.dispatch(actions.getUser());
store.dispatch(actions.getRecent());
store.dispatch(actions.getUserPlaylists());
store.dispatch(actions.getFeatured());
store.dispatch(actions.getNew());
store.dispatch(actions.getCategories());


