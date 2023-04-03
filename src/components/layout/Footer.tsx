import React from "react";

const Footer = () => {
  return (
    <footer className="h-40 bg-white pt-5">
      <ul className="flex flex-col gap-y-2 justify-center items-center">
        <li>
          <span>follow us on:</span>
        </li>
        <li className="flex flex-row gap-5">
          <div className="grid bg-[#27232C] w-9 h-9 place-items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-facebook"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="0"
              stroke="white"
              fill="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
            </svg>
          </div>
          <div className="grid bg-[#27232C] w-9 h-9 place-items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-linkedin"
              width="38"
              height="38"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M8 11l0 5"></path>
              <path d="M8 8l0 .01"></path>
              <path d="M12 16l0 -5"></path>
              <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
            </svg>
          </div>
          <div className="grid bg-[#27232C] w-9 h-9 place-items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-vimeo"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="0"
              stroke="white"
              fill="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 8.5l1 1s1.5 -1.102 2 -.5c.509 .609 1.863 7.65 2.5 9c.556 1.184 1.978 2.89 4 1.5c2 -1.5 7.5 -5.5 8.5 -11.5c.444 -2.661 -1 -4 -2.5 -4c-2 0 -4.047 1.202 -4.5 4c2.05 -1.254 2.551 1 1.5 3c-1.052 2 -2 3 -2.5 3c-.49 0 -.924 -1.165 -1.5 -3.5c-.59 -2.42 -.5 -6.5 -3 -6.5s-5.5 4.5 -5.5 4.5z"></path>
            </svg>
          </div>
        </li>
        <li>
          <span>
            © 2022 zlatenvek.eu | Всички права запазени! | All rights reserved!
          </span>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
