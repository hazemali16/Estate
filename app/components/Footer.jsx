import { Oleo_Script } from "next/font/google";
const oleoScript = Oleo_Script({ subsets: ["latin"], weight: ['400', '700'] });

const Footer = () => {
  return (
    <div className="px-[10%] pb-10 pt-20 bg-[#0F298B] max-sm:px-[2.5%] text-white">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 pb-10">
            <div className="">
            <span className={oleoScript.className}>
            <span className="text-4xl">Dee’s Estate</span>
        </span>
            <p className=" text-lg mt-5 ">
            Solution for easy and flexible house hunting.You can trust us anywhere through this platform
            </p>
            </div>
            <div >
            <h3 className='mb-10 text-2xl font-bold '>Property</h3>
            <ul className=' list-none  flex flex-col gap-5'>
                <li className='text-gray-400 cursor-pointer duration-300 hover:text-white'>Learning Modules</li>
                <li className='text-gray-400 cursor-pointer duration-300 hover:text-white'>Partnership</li>
                <li className='text-gray-400 cursor-pointer duration-300 hover:text-white'>Watch demo</li>
                <li className='text-gray-400 cursor-pointer duration-300 hover:text-white'>Event</li>
            </ul>
            </div>
            <div >
            <h3 className='mb-10 text-2xl font-bold '>About</h3>
            <ul className=' list-none  flex flex-col gap-5'>
                <li className='text-gray-400 cursor-pointer duration-300 hover:text-white'>Our Company</li>
                <li className='text-gray-400 cursor-pointer duration-300 hover:text-white'>Career</li>
                <li className='text-gray-400 cursor-pointer duration-300 hover:text-white'>Investors Relations</li>
                <li className='text-gray-400 cursor-pointer duration-300 hover:text-white'>Social Impact</li>
            </ul>
            </div>
            <div >
            <h3 className='mb-10 text-2xl font-bold'>Resources</h3>
            <ul className=' list-none  flex flex-col gap-5'>
                <li className='text-gray-400 cursor-pointer duration-300 hover:text-white'>Contact</li>
                <li className='text-gray-400 cursor-pointer duration-300 hover:text-white'>Give feedback</li>
                <li className='text-gray-400 cursor-pointer duration-300 hover:text-white'>System status</li>
                <li className='text-gray-400 cursor-pointer duration-300 hover:text-white'>Privacy Policy</li>
            </ul>
            </div>
        </div>
        <div className="mt-5">
        <p className=" leading-10 text-center">
            Created By <span className="text-lg">Hazem Ali</span>
        </p>
        </div>
    </div>
  )
}

export default Footer