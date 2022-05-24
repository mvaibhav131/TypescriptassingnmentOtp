import { useState } from "react"

type AccordianType ={
    data:{title:string,description:string}[]
}

export const Accordian=({data}:AccordianType)=>{
    const [open,setOpen]=useState<number>(0);
    const handleOpen=(index:number)=>{
        setOpen(index);
    }
    console.log(data)
 return <div>{data.map((el,index) => (
 <Card 
  key={index}
  title={el.title} 
  description={el.description} 
  index={index} 
  isVisible={index===open}
  handleOpen={handleOpen}
  />
 ))}
 </div>   
}

type CardProps={
   
    title:string;
    description:string;
    index:number;
   isVisible:boolean;
   handleOpen:(index:number)=>void;
};

const Card=({title,description,isVisible,handleOpen,index}:CardProps)=>{
   return <div className="accordian">
   <h2 onClick={()=>handleOpen(index)}>{title}</h2>
    {isVisible && <h5>{description}</h5>}
   </div>
}