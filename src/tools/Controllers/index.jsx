import React, {Fragment} from 'react';

export const Play = props => {
	return (
			<Fragment>
			<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 46 46">
  			<g id="Group_15" data-name="Group 15" transform="translate(-755 -329)">
    		<path id="ic_play_arrow_24px" d="M8,5V24.067l14.981-9.534Z" transform="translate(762.922 337.887)" fill="#fff"/>
    		<g id="Ellipse_14" data-name="Ellipse 14" transform="translate(755 329)" fill="none" stroke="#fff" strokeWidth="1">
      		<circle cx="23" cy="23" r="23" stroke="none"/>
      		<circle cx="23" cy="23" r="22.5" fill="none"/>
    		</g>
 			</g>
			</svg>
			</Fragment>
		)
}

export const Pause = props => {
	return (
			<Fragment>
			<div className='pause_song'>
			<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 45 45">
			 <g id="Group_16" data-name="Group 16" transform="translate(-865 -277)">
			<g id="Ellipse_3" data-name="Ellipse 3" transform="translate(865 277)" fill="none" stroke="#fff" strokeWidth="1">
			<circle cx="22.5" cy="22.5" r="22.5" stroke="none"/>
			<circle cx="22.5" cy="22.5" r="22" fill="none"/>
			</g>
			<line id="Line_9" data-name="Line 9" y2="15.681" transform="translate(883.25 290.478)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2"/>
			<line id="Line_10" data-name="Line 10" y2="15.681" transform="translate(891.432 290.478)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2"/>
			</g>
			</svg>
			</div>
			</Fragment>

		)
}