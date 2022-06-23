import React from 'react';

function Logo(prop)
{
    return (
    <a href='/CalenderSearchApp'><div className='logo'><img className='icon' src={prop.url} alt={prop.alt}/>
    <span>My Calendar</span>
    </div></a>);
}

export default Logo;