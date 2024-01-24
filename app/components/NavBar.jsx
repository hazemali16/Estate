import { Oleo_Script } from "next/font/google";
const oleoScript = Oleo_Script({ subsets: ["latin"], weight: ['400', '700'] });


const NavBar = () => {
  return (
    <div className='flex justify-between items-center py-5 absolute w-full max-sm:px-[5%] px-[10%] border-b left-0 border-[#C4C4C4] max-md:flex-col max-md:gap-5'>
        <span className={oleoScript.className}>
            <span className="text-4xl">Dee’s Estate</span>
        </span>
        <ul className="flex gap-10 max-sm:gap-5">
            <li><a href="#" className="text-[#0F298B] duration-300 font-bold">Home</a></li>
            <li><a href="" className=" duration-300 hover:text-[#0f298b] font-bold">Rent</a></li>
            <li><a href="" className=" duration-300 hover:text-[#0f298b] font-bold">Land</a></li>
            <li><a href="" className=" duration-300 hover:text-[#0f298b] font-bold">Agent</a></li>
            <li><a href="" className=" duration-300 hover:text-[#0f298b] font-bold">Contact Us</a></li>
        </ul>
        <div className="bg-[#2549D3] duration-300 hover:bg-white hover:text-[#2549D3] border border-[#2549D3] text-white h-16 w-40 rounded-[10px] flex justify-center items-center font-bold cursor-pointer max-sm:h-10 max-sm:w-32">Get Started</div>
    </div>
  )
}

export default NavBar