

function Month(prop){
    let month=[];
    for(let i=1;i<=35;i++)
    {
        month.push({
            id:i,
            display:""
        });
    }
    const end=prop.stop+prop.start-1;
    for(let i=prop.start;i<=end;i++)
    {
       
        month[i%35].display=((i-prop.start)+1)+"";
    }
    return month;
    }
    
    function Weekdays()
    {
        const week=[{id:1,display:"S"},{id:2,display:"M"},{id:3,display:"Tu"},{id:4,display:"W"},{id:5,display:"Th"},{id:6,display:"F"},{id:7,display:"S"}];
        return week;
    }
    
    function Allmonths(year)
    {
        const daysinmonth=(month,year)=>{
            const daycount=[31,28,31,30,31,30,31,31,30,31,30,31];
            if(month!=1)
            {
              return daycount[month];
            }
            else
            {
              if(year%4==0)
              return 29;
              else
              return 28;
            }
            };
      
        let dayinfo=[];
        for(let i=1;i<=12;i++)
    {
        let d=new Date(year+"-"+i+"-01");
        dayinfo.push({
            day:d.getDay(),
            month:d.getMonth(),
            lastday:daysinmonth(d.getMonth(),year)
    
        });
    
    }
    return dayinfo;
    
    }
    
    
    export {Month,Weekdays,Allmonths};