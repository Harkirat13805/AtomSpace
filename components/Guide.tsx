import Image from 'next/image'
import React from 'react'



const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Smart Solutions</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">Step into the future of space technology management with Atom Space. Our platform offers advanced solutions for optimizing battery management systems, satellite operations, and more. Seamlessly integrating with your space infrastructure</p>
        </div>
      </div>
      <video
        autoPlay
        muted
        loop
        className="height w-full"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>


     
    </section>
  )
}

export default Guide