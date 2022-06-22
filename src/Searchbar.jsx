import React from 'react'

function Searchbar(prop)
{
    return (
    <div className='search-bar'> <input type="text" onChange={prop.changing} onFocus={(e)=>{e.target.placeholder=""}} onBlur={(e)=>{e.target.placeholder="YYYY"}} id="yearip" name="yearip" placeholder="YYYY" ></input>
        <button id='but' onMouseDown={prop.func2} onClick={prop.func} ><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
   );
}

export default Searchbar;