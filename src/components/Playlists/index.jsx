import React 	from 'react';
import * as controller from '../../tools/Controllers';
import styled from 'styled-components';


export const PlaylistThumb = styled.div`
	background-color: #1C1C1C;
	&:hover {
	.playbackState {
		display: flex;
	}
	}
`

export const PlaybackState = styled.div`
	position: absolute;
	background-color: rgba(0, 0, 0, 0.9);
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	display: ${(props) => props.playing ? 'flex' : 'none' };
`

const Playlist = props => {
	return (
			<div className='f-playlist section--playlist '>
				<PlaylistThumb className='section--playlist-thumb'>
					<img src={props.image} alt=''/>
					<PlaybackState className='playbackState' playing={props.playing}>
					  { props.isPlaylist && (
						<div className='section-controllers'>
							{props.playing ? <controller.Pause/> : <controller.Play/>}
						</div>
						)
					 }
					</PlaybackState>
				</PlaylistThumb>
				<div className='section--playlist-title'>
					 <p>{props.name}</p>
				</div>
			</div>
		)
}



export default Playlist;
