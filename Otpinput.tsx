import React, { useRef,useState } from 'react'
type OtpInputType={
  totalInputs:number;
  onChange:(otp:string)=>void;
}
export const Otpinput=({totalInputs,onChange}:OtpInputType)=>{
    const inputRef=useRef<HTMLInputElement[]>([]);//{current:[]}
    const [otp,setOtp]=useState<string>("")
  return (
    <div>
      {new Array(totalInputs).fill(1).map((el:any,index:any)=>(
          <input 
          onChange={(e)=>{
            setOtp(otp+e.target.value)
          }}
          onKeyUp={(e)=>{
            if(e.code==="Backspace"){
              inputRef.current[index-1]?.focus();
              inputRef.current[index-1]?.select();
            }
            else{
              inputRef.current[index+1]?.focus();
            }
              onChange(otp);
          }}
          ref={(element)=>{
            
              if(inputRef.current && element){
                  inputRef.current[index]=element;
              }
           }}
          type="text" 
          maxLength={1} 
          key={index} 
          className="otpInput" />
      ))}
    </div>
  )
}


