import React from 'react';


const playState = props => {
	if (props.play) {
		return (
		<svg xmlns="http://www.w3.org/2000/svg" width="13.171" height="12.834" viewBox="0 0 13.171 12.834"><path d="M3,7.452v4.39H5.927L9.585,15.5V3.793L5.927,7.452Zm9.878,2.2A3.293,3.293,0,0,0,11.049,6.7v5.89A3.274,3.274,0,0,0,12.878,9.647ZM11.049,3.23V4.737a5.124,5.124,0,0,1,0,9.819v1.507a6.581,6.581,0,0,0,0-12.834Z" transform="translate(-3 -3.23)" fill="#d2d2d2"/></svg>
		)
	}
	else {
		return null;
	}
}

export default playState;