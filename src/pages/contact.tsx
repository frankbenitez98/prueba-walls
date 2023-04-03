import Button from "@src/components/ui/Button";
import React from "react";

const Contact = () => {
  return (
    <div className="w-full gap-y-1 bg-[#27232C] px-10 lg:px-48 py-14 ">
      <div className="flex flex-col 2xl:ml-20 2xl:mr-96">
        <span className="text-white tracking-widest font-light">
          Connect with us{" "}
        </span>
        <span className="text-white text-7xl font-semibold tracking-wider">
          Let's discuss
          <br />
          your next project!
        </span>
        <span className="text-white tracking-widest font-light text-xl mt-6">
          If you have any questions about video, audio production or something
          else in advertising, give us a call!
        </span>
        <ul className="text-white tracking-widest font-light flex flex-col md:flex-row mt-5 gap-5">
          <li className="flex flex-row gap-2 items-center">
            <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
            <span>+ 359 2 944 2568 / + 359 2 944 1043</span>
          </li>
          <li className="flex flex-row gap-2 items-center">
            <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
            <span>22 Bogatitsa str., Sofia, Bulgaria</span>
          </li>
          <li className="flex flex-row gap-2 items-center">
            <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
            <span>office@zlatenvek.eu</span>
          </li>
        </ul>
        <div>
          <form className="sm:grid sm:grid-cols-2 gap-6 m-5">
            <input
              type="text"
              className="bg-transparent text-xl focus:rounded-md border-b-gray-600 border-b-2 p-3 focus:border-gray-300 focus:border-2 ring-gray-100 outline-none text-white"
              required
              placeholder="Name*"
            />
            <input
              type="text"
              required
              placeholder="Surname*"
              className="bg-transparent text-xl focus:rounded-md border-b-gray-600 border-b-2 p-3 focus:border-gray-300 focus:border-2 ring-gray-100 outline-none text-white"
            />
            <input
              required
              placeholder="Email*"
              type="text"
              className="bg-transparent text-xl focus:rounded-md border-b-gray-600 border-b-2 p-3 focus:border-gray-300 focus:border-2 ring-gray-100 outline-none text-white"
            />
            <input
              required
              placeholder="Phone*"
              type="text"
              className="bg-transparent text-xl focus:rounded-md border-b-gray-600 border-b-2 p-3 focus:border-gray-300 focus:border-2 ring-gray-100 outline-none text-white"
            />
            <input
              placeholder="Write us a message"
              type="text"
              className="col-span-2 bg-transparent text-xl focus:rounded-md border-b-gray-600 border-b-2 p-3 focus:border-gray-300 focus:border-2 ring-gray-100 outline-none text-white"
            />
          </form>
        </div>
        <div className="mt-6">
          <Button title="SUBMIT YOUR IDEA" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
