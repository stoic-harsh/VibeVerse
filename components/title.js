import { Lobster } from 'next/font/google';

const lobster = Lobster({
    weight: '400',
    subsets: ['cyrillic']
})

const Title = ()=>{
    return <div className='pt-6 pl-7 w-full h-auto flex items-center'>
        <span className={`${lobster.className} text-[37px]`}>VibeVerse</span>
        <div className='bg-gray-400 w-[0.5px] h-[55px] ml-3' />

    </div>
}

export default Title;