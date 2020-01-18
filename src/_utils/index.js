const initialState = {
	
	user : {
		active: false,
		isFetching: false,
		currentUser : {
			user : {},
			playlists : [],
			recent : {
				music : []
			}
		}
	},
	
	playlists  : {
	 
	featured : {
	 	isFetching: true,
	 	items : [] 	 
	 },

	 categories   : {
	 	isFetching: false,
	 	items : []
	 },

	 new	  : {
	 	isFetching: false,
	 	items : []
	 },
	 discover : {
	 	isFetching: false,
	 	items : []
	 }
	}

}

export default initialState;