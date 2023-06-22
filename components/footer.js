import Link from "next/link";

export default function Footer(){
    return <div className="flex flex-col justify-center items-center text-white bg-black w-screen absolute bottom-0 h-[100px]">
            <div className="text-[18px] mx-4 text-center my-1">
            Made with tons of procrastination | Made by `stoic-harsh`
            </div>

            <div>
                Reach out to me on <Link href="http://www.linkedin.com/in/stoic-harsh/" className="text-yellow-600">LinkedIn</Link>
            </div>
        </div>
}