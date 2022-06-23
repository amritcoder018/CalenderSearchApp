import React from 'react'

function Searchbar(prop)
{
    return (
    <div className={prop.clname}> <input type="text" onChange={prop.changing} onFocus={(e)=>{e.target.placeholder=""}} onBlur={(e)=>{e.target.placeholder="YYYY"}} value={prop.value} id="yearip" name="yearip" placeholder="YYYY" ></input>
        <button id='but' onMouseDown={prop.func2} onClick={prop.func} ><i className="fa-solid fa-magnifying-glass"></i></button>
    </div>
   );
}

export default Searchbar;