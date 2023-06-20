"use client";

import { useState } from "react";

const Form = ()=>{
    const [prompt, setPrompt] = useState("");

    return <div className="mt-[60px] w-screen h-auto flex justify-center items-center">
        
        <div className='min-w-[50vw] flex flex-col justify-center'>
        <textarea className='w-full p-2 h-[50px]
        resize-none outline-none text-[16px] rounded-md border-[#dc143c] border-[2px]' placeholder = 'Tell me ...'
        value = {prompt}
        onChange = {(event)=>{
            setPrompt(event.target.value);
            console.log(prompt);
        }}
        />
        
        <button className='bg-green-500 border-2 m-4 mr-0 px-4 py-2 rounded-md
         self-end' onClick={()=>{
            
         }} >Submit</button>
        </div>
        
    </div>
}

export default Form;