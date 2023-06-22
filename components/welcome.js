import { Montserrat } from 'next/font/google';

const font = Montserrat({
    subsets: ['latin'],
    weight: '400'
})

const Welcome = ()=>{
    return <div className={`mt-7 lg:mt-0 pt-7 ${font.className} text-center w-screen h-[200px] flex flex-col justify-center items-center`}>
        <span className='mx-4 text-center sm:text-[34px] md:text-[47px] lg:text-[50px] text-[28px]'>Hi! I am MoodMate..</span>
        <span className='mx-4 text-center sm:text-[34px] md:text-[47px] lg:text-[50px] text-[28px]'>what's going on in your mind, buddy ?</span>
    </div>
}   

export default Welcome;