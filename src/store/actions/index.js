import * as action from './constant';

export const requestUser = () => {
	return {
		type : action.REQUEST_USER
	}
}

export const receiveUser = data => {
	return {
		type : action.RECEIVE_USER,
		user : data.data
	}
}


export const requestUserPlaylists = () => {
	return {
		type : action.REQUEST_USER_PLAYLIST
	}
}

export const receiveUserPlaylists = data => {
	return {
		type : action.RECEIVE_USER_PLAYLIST,
		playlists : data.data.items
	}
}


export const requestUserRecent = () => {
	return {
		type : action.REQUEST_RECENT_CONTENT
	}
}

export const receiveUserRecent = data => {
	return {
		type : action.RECEIVE_RECENT_CONTENT,
		playlists: data.data.items
	}
}

export const requestFeatured = () => {
	return {
		type : action.REQUEST_FEATURED
	}
}

export const receiveFeatured = data => {
	return {
		type : action.RECEIVE_FEATURED,
		playlists: data.data.playlists.items
	}
}

export const requestNEW = () => {
	return {
		type : action.REQUEST_NEW
	}
}

export const receiveNEW = data => {
	return {
		type : action.RECEIVE_NEW,
		playlists: data.data.albums.items
	}
}





export const requestCategories = () => {
	return {
		type : action.REQUEST_CATEGORIES
	}
}

export const receiveCategories = data => {
	return {
		type : action.RECEIVE_CATEGORIES,
		playlists: data.data.categories.items
	}
}


