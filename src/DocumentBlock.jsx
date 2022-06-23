import React from 'react';

function Document(prop)
{

    return (<div className="doc-block">
    <h2>{prop.heading}</h2>
   <img src={prop.src} alt="img.jpg"/>
</div>);
}
export default Document;