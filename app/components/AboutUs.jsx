import Image from "next/image";
import { checked, house2 } from "../asset";

const AboutUs = () => {
  return (
    <div className="flex gap-20 my-40 items-center max-md:flex-col about translate-y-16 opacity-0">
        <div className="basis-1/2">
            <Image 
            src={house2}
            alt="house2"
            />
        </div>
        <div className="basis-1/2">
        <h2 className="text-[#0F298B] text-5xl leading-tight max-xl:text-4xl">
        Why you should choose us.
            </h2>
            <p className="text-3xl py-5 max-xl:text-xl">
            Creating quality urban lifestyles,building stronger communities
            </p>
            <ul className="grid grid-cols-2 gap-5">
                <li className="flex gap-5 items-center">
                <Image 
            src={checked}
            alt="checked"
            />
            World class
                </li>
                <li className="flex gap-5 items-center">
                <Image 
            src={checked}
            alt="checked"
            />
            Trusted
                </li>
                <li className="flex gap-5 items-center">
                <Image 
            src={checked}
            alt="checked"
            />
            Affordable
                </li>
                <li className="flex gap-5 items-center">
                <Image 
            src={checked}
            alt="checked"
            />
            Amenities
                </li>
            </ul>
        </div>
    </div>
  )
}

export default AboutUs