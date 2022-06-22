import React, { useState } from 'react';
import Home from './Home';
import {Route,Routes,useNavigate} from 'react-router-dom';
import Header from './Header';
import Aboutme from './Aboutme';
import Contact from './Contact';
import Documents from './Documents';
import AboutPro from './AboutProject';
import Searchbar from './Searchbar';
// import nature from '../public/images/nature.jpg';
function App() {
  const resetcol=(key)=>{let x={
    a:"black",b:"black",c:"black",d:"black",e:"black"
   };
  x[key]="#00960080";
  return x;
  };
  let navigate=useNavigate();
  
 const para="Hi, I am Amrit Kumar Sharma .I was born and brought up in jamshedpur, Jharkhand.I have completed My btech graduation degree from KIIT University ,Bhubaneswar in Electrical Enginnering. I have also completed diploma in engineering from KIIT Polytechnic,Bhubaneswar.I have completed many certifications courses like autocad electrical,PLC,sql,core java,j2ee and hibernate. I know programing languages like java,c,c++,python.I have completed webtech cource which includes html5,css,javascript.  I like spending free time by listening music,reading books,watching youtube videos and coding.Currently i am pursuing full stack java development cource in Qspider institute.I am seeking for a decent job in IT sector to grow in my carrer. ";

 const[ctime,setctime]=useState(new Date().toLocaleTimeString());
 const [msg,setmsg]=useState("Welcome to My Calendar");
  const [show ,setshow]=useState(false); 
  const [show1 ,setshow1]=useState(false); 
  const [year,setyear]=useState(2022); 
  const [value,setvalue]=useState(2022);
  const [month,setmonth]=useState(0);
  const [start,setstart]=useState(0);
  const [end, setend]=useState(30);
 const [col1 ,setcol1]=useState(resetcol('a'));



  // console.log(nature);
const updateTime=()=>{
setctime(new Date().toLocaleTimeString());

};
setInterval(updateTime,1000);

  const clicked=()=>{
    setcol1(resetcol('a'));
    navigate("/CalenderSearchApp");
    if(!isNaN(value)){
    setTimeout(()=>{
    
     setyear(value);
      setshow(true);
      
      
    },1000);
      
    }
   window.scrollTo(0,0);
   
    };

    const func2=()=>{ 
      setshow(false);
      setshow1(false);
      if(value==="" || isNaN(value))
      {
        alert("Please enter only Year in Number formate (YYYY)");
        setmsg("Welcome to My Calendar");
      }
      else{
      setmsg("YEAR >> "+value);
      }
    
    }
    
  const changing=(event)=>{
    const val=event.target.value;
    setvalue(val);
  };

  const enlarge=(event)=>{
    setshow1(true);
    setshow(false);
   const daycount=[31,28,31,30,31,30,31,31,30,31,30,31];
    const e=event.currentTarget.id;
    const date=new Date(year+"-"+e+"-01");
    setmonth(date.getMonth());
    setstart(date.getDay());
    setend(daycount[date.getMonth()]);

  }
 const backf=()=>{
   setshow(true);
   setshow1(false);
 };
 


  const over=(event)=>{
    if(event.target.id==="a1")
   {
    setcol1(
     resetcol('b')
      );
   
    navigate("Aboutme");
   
    } 
   else if(event.target.id==="a2")
    {
      setcol1(
        resetcol('a')
         );
     
    navigate("/CalenderSearchApp");
     }
     else if(event.target.id==="a3")
     {
      setcol1(
        resetcol('c')
         );
       navigate("doc");
       
     } 
     else if(event.target.id==="a4")
     {
      setcol1(
        resetcol('d')
         );
       navigate("contact");
     
     } 
     else if(event.target.id==="a5")
     {
      setcol1(
        resetcol('e')
         );
       navigate("pro");
     
     } 
    
    
    console.log(event.target.id)
   
  };
  return (
    <>
    <Header  col1={col1}  clname="search-bar1" over={over} func2={func2} func={clicked} changing={changing} />
    <div className="mobile"><Searchbar clname="search-bar2" func2={func2} func={clicked} changing={changing}/></div>
    <div className='back'>
    <Routes>
   
    <Route path="/CalenderSearchApp" element={<Home backf={backf} ctime={ctime} func2={func2} func={clicked} show1={show1} show={show} msg={msg} year={year} start={start} stop={end} month={month} enlarge={enlarge} changing={changing}/>}/>
     <Route path="aboutme" element={<Aboutme para={para}/>}/>
     <Route path="contact" element={<Contact/>}/>
     <Route path="doc" element={<Documents/>}/>
     <Route path="pro" element={<AboutPro/>}/>
  </Routes>
  </div>
  </>
  );
}

export default App;
