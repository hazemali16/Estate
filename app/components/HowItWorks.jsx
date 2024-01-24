
import Image from "next/image";
import { mark, phone, secure } from "../asset";


const HowItWorks = () => {

  return (
    <div className="mb-20 works translate-y-16 opacity-0">
        <h2 className="text-5xl text-[#0F298B] font-bold text-center mb-5 ">How it works.</h2>
        <p className="text-2xl text-center text-gray-600">This is how our products works</p>
        <div className="grid grid-cols-3 gap-10 mt-10 max-xl:grid-cols-2 max-md:grid-cols-1">
            <div className="opacity-0 h-[560px] flex flex-col items-center justify-center gap-5 bg-white px-20 cursor-pointer duration-500 box2 works-box">
                <Image 
                src={mark}
                alt="mark"
                />
                <h3 className="text-3xl">Find Home</h3>
                <p className="text-center">Our properties are located at prime areas where by there won’t be problem with transportation</p>
            </div>
            <div className="opacity-0 h-[560px] flex flex-col items-center justify-center gap-5 bg-white px-20 cursor-pointer duration-500 box2 works-box delay-500">
                <Image 
                src={phone}
                alt="phone"
                />
                <h3 className="text-3xl">Make payments</h3>
                <p className="text-center">Our estates comes with good network,portable water , 24hrs light and round the clock security.</p>
            </div>
            <div className="opacity-0 h-[560px] flex flex-col items-center justify-center gap-5 bg-white px-20 cursor-pointer duration-500 box2 works-box delay-1000">
                <Image 
                src={secure}
                alt="secure"
                />
                <h3 className="text-3xl">Make it Official</h3>
                <p className="text-center">We have been in business for over 32 years,for client outside the country you can trust us to deliver well.</p>
            </div>
        </div>
        
    </div>
  )
}

export default HowItWorks