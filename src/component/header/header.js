import React from 'react';
import logo from './../../assets/logo.png'
import './styles.scss';

const Header = (props) => {
    return (
        <header className='headerComponent'>
            <div className="wrap">
                <div className="logo">
                    <img className="logoIMG" src={logo} alt="logo" />
                </div>
            </div>
        </header>
    )
}

export default Header;