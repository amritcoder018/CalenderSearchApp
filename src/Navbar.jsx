import React from 'react';

function Navbar(prop)
{
    return (<ul>
    <li onClick={prop.overmain} style={{backgroundColor:prop.col1.a}} className="a" id="a2">Home</li>
        <li  onClick={prop.overmain} className='a' id='a5'style={{backgroundColor:prop.col1.e}}>About the project</li>
        <li  onClick={prop.overmain} style={{backgroundColor:prop.col1.b}} className="a" id="a1">About me</li>
        <li  onClick={prop.overmain} style={{backgroundColor:prop.col1.c}} className="a" id="a3">Documents</li>
        <li  onClick={prop.overmain} style={{backgroundColor:prop.col1.d}} className="a" id="a4">Contact details</li>
        
    </ul>);
}


export default Navbar;