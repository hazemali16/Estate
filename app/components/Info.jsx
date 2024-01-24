'use client'
import Image from "next/image";
import { bottom, search } from "../asset";
import { useEffect } from "react";


const Info = () => {
    useEffect(() => {
        window.onscroll = function () {
            let info = document.querySelector(".info")
            if ( window.scrollY >= 100 ) {
                info.classList.add("animate-opacity-top")
            }
            let works = document.querySelector(".works")
            let worksBoxes = document.querySelectorAll(".works-box")
            if ( window.scrollY >= works.offsetTop -600 ) {
                works.classList.add("animate-opacity-top")
                worksBoxes.forEach((ele) => {
                    ele.classList.remove("opacity-0")
                    setTimeout(() => {
                        worksBoxes[1].classList.remove("delay-500")
                        worksBoxes[2].classList.remove("delay-1000")
                    }, 500);
                })
            }
            let about = document.querySelector(".about")
            if ( window.scrollY >= about.offsetTop -600 ) {

                about.classList.add("animate-opacity-top")
            }
            let features = document.querySelector(".features")
            let featuresBoxes = document.querySelectorAll(".features-box")
            if ( window.scrollY >= features.offsetTop -600 ) {
                features.classList.add("animate-opacity-top")
                featuresBoxes.forEach((ele) => {
                    ele.classList.remove("opacity-0")
                    setTimeout(() => {
                        featuresBoxes[1].classList.remove("delay-500")
                        featuresBoxes[2].classList.remove("delay-1000")
                    }, 500);
                })
            }
            let testimonials = document.querySelector(".testimonials")
            let testimonialsBoxes = document.querySelectorAll(".testimonials-box")
            if ( window.scrollY >= testimonials.offsetTop -600 ) {
                testimonials.classList.add("animate-opacity-top")
                testimonialsBoxes.forEach((ele) => {
                    ele.classList.remove("opacity-0")
                    setTimeout(() => {
                        testimonialsBoxes[1].classList.remove("delay-500")
                        testimonialsBoxes[2].classList.remove("delay-1000")
                    }, 500);
                })
            }
        }
        
    })

  return (
    <div className="box mx-[5%] grid grid-cols-4 gap-10 p-10 mb-20 max-xl:grid-cols-2 max-md:mt-40 max-sm:grid-cols-1 info translate-y-16 opacity-0">
        <div className="">
            <div className="flex gap-1 mb-3">
                <span className="text-lg text-[#0F298B]">Location</span>
                <Image 
                src={bottom}
                alt="bottom"
                />
            </div>
            <p className=" text-gray-500">Lekki</p>
        </div>
        <div className="">
            <div className="flex gap-1 mb-3">
                <span className="text-lg text-[#0F298B]">Property Type</span>
                <Image 
                src={bottom}
                alt="bottom"
                />
            </div>
            <p className=" text-gray-500">Duplex</p>
        </div>
        <div className="">
            <div className="flex gap-1 mb-3">
                <span className="text-lg text-[#0F298B]">Max Price</span>
                <Image 
                src={bottom}
                alt="bottom"
                />
            </div>
            <p className=" text-gray-500">$10,000</p>
        </div>
        <div className="bg-[#2549D3] gap-3 text-white h-16 w-40 rounded-[10px] flex justify-center items-center font-bold cursor-pointer ">
            <Image 
            src={search}
            alt="search"
            />
            Search</div>
    </div>
  )
}

export default Info