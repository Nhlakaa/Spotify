import React from 'react';
import logo from '../../../assets/logo/logo.png';
import './main.scss';

const Brand = props => {
    return (

            <div className='brand'>
             	<img src={logo} alt={logo} className='brand-logo' />
            </div>

    )
}

export default Brand;