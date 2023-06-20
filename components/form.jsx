"use client";

import { useState } from "react";

const Form = ({open, alert})=>{
    const [prompt, setPrompt] = useState("");


    // fetchRequest
    const sendData = async (prompt)=>{
        try{
            const response = await fetch('http://localhost:3000/api/input', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt: prompt
            })
        });

        if(response.ok){
            alert('Sent Successfully');
            open(true);
        }
        else{
            alert("Error occured");
            open(true);
        }
        }catch(err){
            alert(err.message);
            open(true);
        }
    }

    return <div className="mt-[60px] w-screen h-auto flex justify-center items-center">

        <div className='min-w-[50vw] flex flex-col justify-center'>
        <textarea className='w-full p-3 h-[50px]
        resize-none outline-none text-[16px] rounded-md border-[#dc143c] border-[2px]' placeholder = 'Tell me ...'
        value = {prompt}
        onChange = {(event)=>{
            setPrompt(event.target.value);
        }}
        />
        
        <button id="submit" className='bg-green-500 border-2 m-4 mr-0 px-4 py-2 rounded-md
         self-end' onClick={()=>{
            open(true);
            console.log(prompt);
         }} >Submit</button>
        </div>
        
    </div>
}

export default Form;