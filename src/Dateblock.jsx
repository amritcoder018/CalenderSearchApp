import React from 'react';


function Dateblock(prop)
{
 return (<div className={prop.idt+" "+prop.db} >{prop.date}</div>);
}

export default Dateblock;