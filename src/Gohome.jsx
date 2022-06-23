import React from 'react';



function Gohome(prop)
{
    return (<button onClick={prop.def} className="backbutton"><i className="fa-solid fa-arrow-left-long"></i>Go Home</button>);

}

export default Gohome;