import React from 'react';

function Aboutme(prop)
{

    return (<div className="about">
    <h1>About Me</h1>
    <p> {prop.para} </p>
</div>);
}
export default Aboutme;