import React from 'react';

function Logo(prop)
{
    return (<div className='logo'>
    <img className='icon' src={prop.url} alt={prop.alt}/>
    <span>My Calendar</span>
    </div>);
}

export default Logo;