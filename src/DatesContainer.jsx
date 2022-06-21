import React from 'react';
import Dateblock from './Dateblock';
import {Month,Weekdays} from './Logic_Function';
function DatesContainer(prop)
{
    const mul_dates=(xx,index)=>{
        if(index%7==0)
        return( <Dateblock key={xx.id} idt={"red dateblock"+prop.x} date={xx.display}/>);
        return( <Dateblock key={xx.id} idt={"normal"+prop.x+" dateblock"+prop.x} date={xx.display}/>);
       
    };

    const Weekmap=(xx,index)=>{
        if(index==0)
        return( <Dateblock key={xx.id} idt={"red head"+prop.x}date={xx.display}/>);
        return (<Dateblock key={xx.id} idt={"normal"+prop.x+" head"+prop.x} date={xx.display}/>);
    };

   const mon=Month({
        start:prop.start,
        stop:prop.stop
    });
    const weeknames=Weekdays();
    return(
        <div className='dates-container'> 
        {weeknames.map(Weekmap)}
         {mon.map(mul_dates)}
         </div>);
}

export default DatesContainer;