import { Montserrat, Roboto_Condensed } from 'next/font/google';

const roboto = Montserrat({
    subsets: ['latin'],
    weight: '400'
})

const Welcome = ()=>{
    return <div className={`pt-7 ${roboto.className} w-screen h-[200px] flex flex-col justify-center items-center`}>
        <span className='text-[50px]'>Hi! I am MoodMate..</span>
        <span className='text-[40px]'>what's going on in your mind, buddy ?</span>
    </div>
}   

export default Welcome;