import React from 'react'

function Searchbar(prop)
{
    return (
    <div className='search-bar'> <input type="text" onChange={prop.changing} onFocus={(e)=>{e.target.placeholder=""}} onBlur={(e)=>{e.target.placeholder="Type year in 'YYYY' formate"}} id="yearip" name="yearip" placeholder="Type year in 'YYYY' formate" ></input>
        <button id='but' onMouseDown={prop.func2} onClick={prop.func} >Get Callender</button>
    </div>
   );
}

export default Searchbar;