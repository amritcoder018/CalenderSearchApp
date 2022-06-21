import CreateCalender from "./Calender";
import CreateMonth from "./CreateMonth";
import React from "react";
function Home(prop)
{
    return (
        <>
        
        
        <CreateCalender show1={prop.show} clicked={prop.enlarge} ctime={prop.ctime} msg={prop.msg} show={prop.show} year={prop.year}/>
        <CreateMonth backf={prop.backf} backshow={true} show1={prop.show1} x="2" mon={prop.month+1} year={prop.year} start={prop.start} stop={prop.stop} classn="single-month" id={"monee"} />
        
       
        </>
     );
}

export default Home;