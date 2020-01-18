import React, { useState} from 'react';
import {withRouter} from 'react-router-dom';
import User from '../../components/Sidebar/User';
import Brand from '../../components/Sidebar/Header';
import { connect } from 'react-redux';
import * as sb from  '../../components/Sidebar/Items';
import './main.scss';

const Items = {
    search: {path : '/search'},
    home: {path: '/'},
    music: {path: '/library'}
}

const Sidebar = props => {
    const [activePath] = useState(props.location.pathname)
    const [item] = useState(Items);

    return (
        <div className='side-nav'>
            <Brand />
            <div className='items-list'>
                <sb.Search path={item.search.path} active={item.search.path === activePath} />
                <sb.Home path={item.home.path} active={item.home.path === activePath} />
                <sb.Music path={item.music.path} active={item.music.path === activePath}/>
            </div>
            <User recent={props.recent} user={props.user}/>
        </div>
    )
}

const mapState = state => {
    return {
        recent : state.user.currentUser.recent.music,
        user   : 'You'
    }
}

export default withRouter(connect(mapState)(Sidebar));