import React from 'react';
import Searchbar from './Searchbar';
import Navbar from './Navbar';
import Logo from './Logo';
import icon from './logo192.png'



function Header(prop)
{
    return (<div className='header1'>
        <Logo url={icon} alt="logo.png"/>
        <Navbar col1={prop.col1} overmain={prop.over}/>
        <Searchbar clname={prop.clname} func2={prop.func2} func={prop.func} changing={prop.changing}/>
    </div>);
}

export default Header;