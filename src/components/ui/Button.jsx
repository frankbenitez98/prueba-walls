import React from "react";

const Button = ({ title }) => {
  return (
    <button
      className="flex flex-row items-center justify-center bg-white"
      type="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-chevron-right bg-yellow-400 z-10"
        width="34"
        height="34"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#2c3e50"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <polyline points="9 6 15 12 9 18" />
      </svg>
      <div className="border-2 border-gray-300 h-[34px] py-1 -ml-[2px]">
        <span className="font-semibold px-4 text-gray-800">{title}</span>
      </div>
    </button>
  );
};

export default Button;
