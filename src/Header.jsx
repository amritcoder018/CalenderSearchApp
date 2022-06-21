import React from 'react';
import Searchbar from './Searchbar';
import Navbar from './Navbar';
import Logo from './Logo';


function Header(prop)
{
    return (<div className='header1'>
        <Logo url="./logo192.png" alt="logo.png"/>
        <nav><Navbar col1={prop.col1} overmain={prop.over}/></nav>
        <Searchbar func2={prop.func2} func={prop.func} changing={prop.changing}/>
    </div>);
}

export default Header;