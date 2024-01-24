import Image from "next/image";
import { house1, play } from "../asset";

const Hero = () => {
  return (
    <div className=" animate-opacity-top flex gap-5 items-center h-screen max-md:flex-col max-md:pt-80 max-md:h-fit  translate-y-16 opacity-0">
        <div className="basis-1/2">
            <h1 className="text-[#0F298B] text-6xl leading-tight max-xl:text-4xl">
            Helping you find the
            <br />
             property of your
             <br />
              dreams.
            </h1>
            <p className="text-3xl py-5 max-xl:text-xl">
            Creating quality urban lifestyles,building stronger communities
            </p>
            <div className="flex gap-10 items-center">
            <div className="bg-[#2549D3] text-white h-16 w-40 rounded-[10px] flex justify-center items-center font-bold cursor-pointer duration-300 hover:bg-white hover:text-[#2549D3] border border-[#2549D3]">Learn More</div>
            <Image 
            src={play}
            alt="play"
            className="cursor-pointer"
            />
            </div>
        </div>
        <div className="basis-1/2 relative pt-10">
            <div className="bg-[#2549D3] w-16 h-16 rounded-full absolute bottom-2 left-2 hidden 2xl:block "></div>
        <Image 
            src={house1}
            alt="house1"
            />
        </div>
    </div>
  )
}

export default Hero