"use client";

import { useState } from "react";

const Form = ({open, alert, color})=>{
    const [prompt, setPrompt] = useState("");
    const [text, setText] = useState("hey");
    const [display, setDisplay] = useState(false);

    // fetchRequest
    const sendData = async (prompt)=>{
        try{
            const response = await fetch('/api/input/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt: prompt
            })
        });

        if(response.ok){
            const res = await response.json();
            setText(res.result.text);
            setDisplay(true);
        }
        else{
            alert("Error occured");
            color('warning');
            open(true);
        }
        }catch(err){
            alert(err.message);
            color('danger');
            open(true);
        }
    }

    return <div className="mt-[60px] w-screen h-auto flex flex-col justify-center items-center">

        <div className='min-w-[50vw] flex flex-col justify-center'>
        <textarea className='w-full p-3 h-[50px]
        resize-none outline-none text-[16px] rounded-md border-[#dc143c] border-[2px]' placeholder = 'Tell me ...'
        value = {prompt}
        onChange = {(event)=>{
            setPrompt(event.target.value);
        }}
        />
        
        <button id="submit" className='bg-green-500 border-2 m-4 mr-0 px-4 py-2 rounded-md
         self-end' onClick={async ()=>{
            alert('Request Sent');
            color('success');
            open(true);

            sendData(prompt);

         }} >Submit</button>

        </div>

        {
            display && <div className = {`bg-[#22ad5529] my-10 w-[55vw] rounded-md px-6 py-4 `}>
                {text}
            </div>
        }   
        
    </div>
}

export default Form;