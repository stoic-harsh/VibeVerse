"use client";

import { useState } from "react";
import Loader from './Loader/Loader';

const Form = ({open, alert, color, text, display, setText, setDisplay, setPlaylistsData})=>{
    const [prompt, setPrompt] = useState("");
    const [loader, setLoader] = useState(false);

    // fetchRequest
    const sendData = async (prompt)=>{
        try{
            setLoader(true);
            const response = await fetch('/api/input/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                input: prompt
            })
            });

        
        const incomingData = await response.json();

        setText(incomingData.text);

        const spotifyData = await fetch('/api/playlists', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                sentence: incomingData.text
            })
        });

        const { playlists } = await spotifyData.json();
        setPlaylistsData(playlists);

        setDisplay(true);
        setLoader(false);
        }catch(err){
            setLoader(false);
            alert(err.message);
            color('danger');
            open(true);
        }
    }

    

    return (loader? <Loader /> : <div className="mt-[60px] w-screen h-auto flex flex-col justify-center items-center">

        <div className='min-w-[50vw] flex flex-col justify-center'>
        <textarea className='lg:w-[50vw] w-[75vw] p-3 h-[50px]
        resize-none outline-none text-[16px] rounded-md border-[#ff7f50] border-[2px]' placeholder = 'Tell me ...'
        value = {prompt}
        onChange = {(event)=>{
            setPrompt(event.target.value);
        }}

        onInput={(event) => {
            event.target.style.height = event.target.scrollHeight + "px";
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
            display && <div className = {`bg-[#22ad5529] my-10 lg:w-[55vw] w-[80vw] rounded-md px-6 py-4 `}>
                {text}
            </div>
        }   
        
    </div>
    )
}

export default Form;
