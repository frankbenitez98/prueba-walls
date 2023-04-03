import Sections from "@src/containers/Sections";
import Image from "next/image";
import React from "react";
import camera from "../../public/assets/images/camera.jpg";
import producer from "../../public/assets/images/producer.jpg";
const AboutUs = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-y-1 bg-[#27232C] px-10 lg:px-48 py-14 h-[550px]">
        <span className="text-white tracking-widest font-light">about us</span>
        <span className="text-white text-5xl font-semibold tracking-wider">
          We make things better
        </span>
        <span className="text-white tracking-widest font-light text-xl mt-4">
          For more than 20 years, we have realized all kinds of audio-visual
          projects: TV commercials, 3D and 2D animation projects, music videos,
          corporate films, documentaries films, PR events, castings, radio
          commercials, voice over and dubbing, etc.
        </span>
      </div>
      <div className=" flex flex-col md:flex-row justify-center items-center gap-y-3 gap-x-8 mt-3 sm:-mt-56">
        <Image src={camera} className="w-[320px] h-[380px] " alt="camera" />
        <Image
          src={producer}
          className="w-[320px] h-[380px] md:mt-24"
          alt="producer"
        />
      </div>
      <div className="flex flex-col gap-y-3 w-full px-5 md:pl-36 md:pr-64 py-14">
        <span className="font-semibold text-gray-600">about us</span>
        <span className="font-semibold text-5xl text-gray-800">Who are we</span>
        <span className="text-gray-500 text-xl ml-24 tracking-widest font-light">
          The company Studio Zlaten Vek was founded in 1995. It started as an
          audio-visual production and creative studio. Later in the years we
          close the cycle by creating an agency for full advertising service
          along with the production part. This move has worked very well and we
          manage to create clear and accurate professional rules for working in
          advertising. Today we are happy with the results.
        </span>
      </div>
      <Sections />
    </>
  );
};

export default AboutUs;
