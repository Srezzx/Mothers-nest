import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";

import { useRouter } from "next/router";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#FB2576");
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  });
  return (
    <div className={" w-full   z-[10000]"}>
      {!nav ? (
        <div
          className={
            shadow
              ? ` transition duration-200 ease-in-out flex justify-end md:justify-around items-center w-full h-full px-2 2xl:px-16   bg-opacity-50 backdrop-blur-md bg-[#B56357]/20`
              : `flex justify-end md:justify-around items-center w-full h-full px-2 2xl:px-16  `
          }
        >
          <div className='flex flex-col'>
            <div className=' pb-6 pt-6 flex'>
              <ul className='hidden md:flex'>
                <Link href='/'>
                  <li
                    className={`font-bold text-[#B56357] hover:text-[#A7B3A5] ease-in duration-200   cursor-pointer ml-10 text-md uppercase `}
                  >
                    Home
                  </li>
                </Link>
                <Link href='/#products'>
                  <li
                    className={`font-bold text-[#B56357] hover:text-[#A7B3A5] ease-in duration-200   cursor-pointer ml-10 text-md uppercase `}
                  >
                    Products
                  </li>
                </Link>
                <Link href='/#process'>
                  <li
                    className={`font-bold text-[#B56357] hover:text-[#A7B3A5] ease-in duration-200   cursor-pointer ml-10 text-md uppercase `}
                  >
                    Process
                  </li>
                </Link>
                <Link href='/#gallery'>
                  <li
                    className={`font-bold text-[#B56357] hover:text-[#A7B3A5] ease-in duration-200   cursor-pointer ml-10 text-md uppercase `}
                  >
                    Gallery
                  </li>
                </Link>
                <Link href='/#contact'>
                  <li
                    className={`font-bold text-[#B56357] hover:text-[#A7B3A5] ease-in duration-200   cursor-pointer ml-10 text-md uppercase `}
                  >
                    Contact
                  </li>
                </Link>
              </ul>
              <div
                className={`text-[white] ml-auto md:hidden mt-5`}
                onClick={handleNav}
              >
                <AiOutlineMenu color={"#B56357"} size={25} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}

      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/30 backdrop-blur-sm ease-in ease-out duration-500 "
            : ""
        }
      >
        <div
          className={
            nav
              ? `fixed left-0 top-0 w-[100%] sm:w-[60%] md:w-[45%] h-full bg-[#B56357] p-10 ease-in duration-500`
              : "fixed left-[-100%] top-0 p-10  duration-500 h-full ease-out"
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <div>
                <Link href='/'></Link>
              </div>
              <div className='relative'>
                <div className='rounded-full absolute -inset-0.5  blur opacity-75  group-hover:opacity-100 transition duration-200'></div>
                <div
                  onClick={handleNav}
                  className={`bg-[#437FC7] relative  rounded-full  p-3 cursor-pointer`}
                >
                  <AiOutlineClose className={``} />
                </div>
              </div>
            </div>
            {/* <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[95%]'>
                Lets build something legendary together
              </p>
            </div> */}
          </div>

          <div className='py-4 flex flex-col justify-center'>
            <ul className='uppercase'>
              <Link href='/'>
                <div className='font-bold flex justify-center'>
                  <li
                    onClick={() => setNav(false)}
                    className='hover:text-[#6DAFFE] ease-in duration-200  py-4 text-sm'
                  >
                    Home
                  </li>
                </div>
              </Link>
              <Link href='/#about'>
                <div className='font-bold  flex justify-center'>
                  <li
                    onClick={() => setNav(false)}
                    className='hover:text-[#6DAFFE] ease-in duration-200  py-4 text-sm'
                  >
                    About
                  </li>
                </div>
              </Link>
              <Link href='/#products'>
                <div className='font-bold  flex justify-center'>
                  <li
                    onClick={() => setNav(false)}
                    className='hover:text-[#6DAFFE] ease-in duration-200  py-4 text-sm'
                  >
                    Products
                  </li>
                </div>
              </Link>
              <Link href='/#process'>
                <div className='font-bold  flex justify-center'>
                  <li
                    onClick={() => setNav(false)}
                    className='hover:text-[#6DAFFE] ease-in duration-200  py-4 text-sm'
                  >
                    Process
                  </li>
                </div>
              </Link>
              {/* <Link href='/#organizations'>
                <div className='font-bold  flex justify-center'>
                  <li onClick={() => setNav(false)} className='hover:text-[#6DAFFE] ease-in duration-200  py-4 text-sm'>
                    Organizations
                  </li>
                </div>
              </Link> */}
              <Link href='/#contact'>
                <div className='font-bold  flex justify-center'>
                  <li
                    onClick={() => setNav(false)}
                    className='hover:text-[#6DAFFE] ease-in duration-200  py-4 text-sm'
                  >
                    Contact
                  </li>
                </div>
              </Link>
            </ul>
            <div className='pt-20'>
              <p className='text-center uppercase tracking-widest  text-[#1f4efe] py-5'>
                Contact Us
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
