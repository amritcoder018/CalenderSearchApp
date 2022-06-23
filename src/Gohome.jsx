import React from 'react';



function Gohome(prop)
{
    return prop.vis?(<button onClick={prop.deflt} className="backbutton"><i className="fa-solid fa-arrow-left-long"></i>Go Home</button>):null;

}

export default Gohome;