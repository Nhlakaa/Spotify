import React, { Component} from 'react';
import PlayState from './icons'
import './main.scss';


class User extends Component {
    render() {
    return (
        <div className='user-infomation'>
            <RecentPlays recent={this.props.recent}/>
        </div>
    )
    }
}


const RecentPlays = props => {
  return (
            <div className='user-recent-information'>
                <div className='recent-plays-title'>
                    <p>recently played</p>
                </div>

            { props.recent.map (item => { return (
                    <Track name={item.track.name} type={item.track.album.album_type}/>
                )})
            }
            </div>
  )
}

const Track = props => {
    return (
                <div className='played-content'>
                    <div className='content-title'>{props.name}</div>
                    <div className='content-type'>{props.type}</div>
                    <div className='content-state'><PlayState play={false}/></div>
                </div>
        )
}


export default User;
