import Image from "next/image";
import { house3, house4, house5 } from "../asset";

const Features = () => {
  return (
    <div className="mb-40 features translate-y-16 opacity-0">
        <h2 className="text-5xl text-[#0F298B] font-bold text-center mb-5 ">Our Featured Properties.</h2>
        <p className="text-2xl text-center mb-5 text-gray-600">One of our biggest product to be featured and that has sold out the most.</p>
        <div className="flex justify-end max-md:justify-center">
        <div className="bg-[#2549D3] text-white h-16 w-40 rounded-[10px] flex justify-center items-center font-bold cursor-pointer duration-300 hover:bg-white hover:text-[#2549D3] border border-[#2549D3]">View more</div>
        </div>
        <div className="grid grid-cols-3 gap-10 mt-10 max-xl:grid-cols-2 max-md:grid-cols-1">
            <div className="bg-white p-10 cursor-pointer duration-300 box2 rounded-se-[50px] rounded-es-[50px] features-box opacity-0">
                <Image
                src={house3}
                alt="house3"
                className="w-full mb-5"
                />
                <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold text-3xl">The Palace</h3>
                    <span>Duplex</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-500">Lekki,phase 2</span>
                    <span className="text-[#0F298B] font-bold">$2,000</span>
                </div>
            </div>
            <div className="bg-white p-10 cursor-pointer duration-300 box2 rounded-se-[50px] rounded-es-[50px] features-box delay-500 opacity-0">
                <Image
                src={house4}
                alt="house4"
                className="w-full mb-5"
                />
                <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold text-3xl">IVY RORY</h3>
                    <span>Duplex</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-500">Lekki,phase 2</span>
                    <span className="text-[#0F298B] font-bold">$2,000</span>
                </div>
            </div>
            <div className="bg-white p-10 cursor-pointer duration-300 box2 rounded-se-[50px] rounded-es-[50px] features-box delay-1000 opacity-0">
                <Image
                src={house5}
                alt="house5"
                className="w-full mb-5"
                />
                <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold text-3xl">REXONA</h3>
                    <span>Duplex</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-500">Lekki,phase 2</span>
                    <span className="text-[#0F298B] font-bold">$2,000</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features