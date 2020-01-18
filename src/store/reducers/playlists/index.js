import { init } from '../../reducers';


export const featured = (state = init.playlists.featured, action) =>{
	switch(action.type) {
		case 'REQUEST_FEATURED' : return Object.assign({}, state, {
			...state,
			isFetching: true
		});

		case 'RECEIVE_FEATURED' : return Object.assign({}, state, {
			isFetching : false,
			items : action.playlists
		});

		default: return state;
	}
}

export const categories = (state = init.playlists.categories, action) =>{
		switch(action.type) {
		case 'REQUEST_CATEGORIES' : return Object.assign({}, state, {
			...state,
			isFetching: true
		});

		case 'RECEIVE_CATEGORIES' : return Object.assign({}, state, {
			isFetching : false,
			items : action.playlists
		});

		default: return state;
	}
}

export const newReleases = (state = init.playlists.new, action) =>{
		switch(action.type) {
		case 'REQUEST_NEW' : return Object.assign({}, state, {
			...state,
			isFetching: true
		});

		case 'RECEIVE_NEW' : return Object.assign({}, state, {
			isFetching : false,
			items : action.playlists
		});

		default: return state;
	}
}


