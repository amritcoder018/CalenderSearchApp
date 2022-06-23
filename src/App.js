import React, { useState } from 'react';
import Home from './Home';
import {Route,Routes,useNavigate} from 'react-router-dom';
import Header from './Header';
import Aboutme from './Aboutme';
import Contact from './Contact';
import Documents from './Documents';
import AboutPro from './AboutProject';
import Searchbar from './Searchbar';
import Gohome from './Gohome';
// import nature from '../public/images/nature.jpg';
function App() {
 

  const resetcol=(key)=>{let x={
    a:"black",b:"black",c:"black",d:"black",e:"black"
   };
  x[key]="yellowgreen";
  return x;
  };
  let navigate=useNavigate();

 const para="Hi, I am Amrit Kumar Sharma .I was born and brought up in jamshedpur, Jharkhand.I have completed My btech graduation degree from KIIT University ,Bhubaneswar in Electrical Enginnering. I have also completed diploma in engineering from KIIT Polytechnic,Bhubaneswar.I have completed many certifications courses like autocad electrical,PLC,sql,core java,j2ee and hibernate. I know programing languages like java,c,c++,python.I have completed webtech cource which includes html5,css,javascript.  I like spending free time by listening music,reading books,watching youtube videos and coding.Currently i am pursuing full stack java development cource in Qspider institute.I am seeking for a decent job in IT sector to grow in my carrer. ";
const defmsg="Welcome to My Calendar";
 const[ctime,setctime]=useState(new Date().toLocaleTimeString());
 const [msg,setmsg]=useState(defmsg);
  const [show ,setshow]=useState(false); 
  const [show1 ,setshow1]=useState(false); 
  const [year,setyear]=useState(''); 
  const [value,setvalue]=useState('');
  const [month,setmonth]=useState(0);
  const [start,setstart]=useState(0);
  const [end, setend]=useState(30);
 const [col1 ,setcol1]=useState(resetcol('a'));




const updateTime=()=>{
setctime(new Date().toLocaleTimeString());

};

const deflt=()=>{setshow(false);setshow1(false); setmsg(defmsg);}
setInterval(updateTime,1000);

  const clicked=()=>{
    setcol1(resetcol('a'));
    navigate("/CalenderSearchApp");
    if(!isNaN(value)&&value!==''&&value.length>3){
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
   
      if(value==="" || (value.length<4) || isNaN(value))
      {
        setTimeout(()=>{
          setvalue('');
          alert("Please enter only Year in Number formate (YYYY)");
          setmsg(defmsg);
           
           
         },800);
        
      }
      else{
      setmsg("YEAR >> "+value);
      }
    
    }
    
  const changing=(event)=>{
    const val=event.target.value;
    setvalue(val);
  };

  const enlarge=(id)=>{
 
   setshow1(true);
    setshow(false);

   const daycount=[31,28,31,30,31,30,31,31,30,31,30,31];
 
    const date=new Date(year+"-"+(id+1)+"-01");
    if(id===1)
    {
      
      if(year%4===0)
      daycount[id]=29;
    }
    setmonth(date.getMonth()-1);
    setstart(date.getDay());
    setend(daycount[id]);
   

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
    
   
  };
  return (
    <>
   <header>
   <Header  col1={col1} value={value} clname="search-bar1" over={over} func2={func2} func={clicked} changing={changing} />
    <div className="mobile"><Gohome vis={show||show1} deflt={deflt}/><Searchbar value={value} clname="search-bar2" func2={func2} func={clicked} changing={changing}/></div>
   </header>
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
