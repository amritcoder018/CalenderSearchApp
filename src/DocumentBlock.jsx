import React from 'react';

function Document(prop)
{

    return (<div class="doc-block">
    <h2>{prop.heading}</h2>
   <img src={prop.src}/>
</div>);
}
export default Document;