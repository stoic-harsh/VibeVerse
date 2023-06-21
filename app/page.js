"use client";

import Title from '@/components/title';
import Welcome from '@/components/welcome';
import TextArea from '@/components/form.jsx';
import Playlist from '@/components/playlist';


// alert message
import { useState, forwardRef } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Home = ()=>{

    // alert message
    const Alert = forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    
    const [open, setOpen] = useState(false);
        
        const handleClose = (event, reason) => {
            if (reason === 'clickaway') {
              return;
            }
            setOpen(false);
        };
        const vertical = 'top';
        const horizontal = 'center';
    
    const [alert, setAlert] = useState("This ia a alert message !");
    const [color, setColor] = useState("warning");
    /*********************************** */

    return<>
            
    <Snackbar anchorOrigin={{ vertical, horizontal }} key={vertical + horizontal} open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={color} sx={{ width: '100%' }}>
            {alert}
        </Alert>
    </Snackbar>
   
    <div className='h-auto w-screen overflow-x-hidden bg-[#f6f7f9] relative '>
        <Title />
        <Welcome />
        <TextArea open={setOpen} alert={setAlert} color={setColor} />
        <Playlist />
    </div>

    </>
}

export default Home;