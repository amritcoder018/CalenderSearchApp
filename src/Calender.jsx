import { Allmonths } from "./Logic_Function";
import React from 'react';
import CreateMonth from "./CreateMonth";
function CreateCalender(prop)
{
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dd=new Date().toLocaleDateString("en-US",options);

const months=Allmonths(prop.year);

const mapMonths=(prop1,index)=>{
 return (<CreateMonth backshow={false} show1={prop.show1} x="1" classn="month-block" clicked={prop.clicked} mon={prop1.month} start={prop1.day} stop={prop1.lastday} year={prop.year} id={index}/>);   
};


return prop.show?(
    
<div style={{display:prop.disp}} className="Calender">
        {months.map(mapMonths)}
</div>

):(<div className="initmsg"><h2 className="msg">{prop.msg}</h2><h3 className="date">{dd}</h3> <h3 className="time">{prop.ctime}</h3> <p>Made by Amrit Kumar Sharma</p></div>);
}


export default CreateCalender;