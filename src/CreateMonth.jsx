import React from 'react';
import DatesContainer from './DatesContainer';

function CreateMonth(prop)
{
    const month=["January","February","March","April","May","June","July","August","September","October","November","December"];
    return prop.show1?(
        <div  onClick={()=>{prop.clicked(prop.id)} }  className={prop.classn}>
        <div className={'month-name'+prop.x}>
        {prop.backshow?<button onClick={prop.backf} className='backbut'><i className="fa-solid fa-arrow-left"></i>Back</button>:null}
        {month[prop.mon]+","+prop.year}</div>
        <DatesContainer db={prop.db} x={prop.x} start={prop.start} stop={prop.stop}/>
        
        </div>
    ):null;
}

export default CreateMonth;