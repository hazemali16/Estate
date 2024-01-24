

const Testimonials = () => {
  return (
    <div className="mb-40 testimonials translate-y-16 opacity-0">
    <h2 className="text-5xl text-[#0F298B] font-bold text-center mb-5 ">Testimonials.</h2>
    <p className="text-2xl text-center mb-5 text-gray-600">This is what our client are saying</p>
    <div className="flex justify-end max-md:justify-center">
    <div className="bg-[#2549D3] text-white h-16 w-40 rounded-[10px] flex justify-center items-center font-bold cursor-pointer duration-300 hover:bg-white hover:text-[#2549D3] border border-[#2549D3]">View more</div>
    </div>
    <div className="grid grid-cols-3 gap-10 mt-10 max-xl:grid-cols-2 max-md:grid-cols-1">
        <div className="bg-white p-5 cursor-pointer duration-300 box2 testimonials-box opacity-0">
            <h3 className="font-bold text-2xl">
            Alex Godwin
            </h3>
            <span className="block my-5">South Africa</span>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames ut dictumst urna, lorem nibh. Pretium leo hendrerit interdum netus</p>
        </div>
        <div className="bg-white p-5 cursor-pointer duration-300 box2 testimonials-box delay-500 opacity-0">
            <h3 className="font-bold text-2xl">
            Alex Godwin
            </h3>
            <span className="block my-5">South Africa</span>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames ut dictumst urna, lorem nibh. Pretium leo hendrerit interdum netus</p>
        </div>
        <div className="bg-white p-5 cursor-pointer duration-300 box2 testimonials-box delay-1000 opacity-0">
            <h3 className="font-bold text-2xl">
            Alex Godwin
            </h3>
            <span className="block my-5">South Africa</span>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames ut dictumst urna, lorem nibh. Pretium leo hendrerit interdum netus</p>
        </div>
    </div>
    </div>
  )
}

export default Testimonials