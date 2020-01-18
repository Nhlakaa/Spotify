import React from 'react';
import Featured from '../../components/Browse/Featured';
import {connect} from 'react-redux';


class Home extends React.Component {

    render() {
        return <Featured name={this.props.userName} active={this.props.active}/>
    }
}

const mapState = state => {
    return {
        active     : state.user.active,
        userName   : 'You',
    }
}

export default connect(mapState)(Home);