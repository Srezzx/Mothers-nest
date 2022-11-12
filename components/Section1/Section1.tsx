import React from "react";
import Link from "next/link";
const Section1 = () => {
  return (
    <div>
      <div className='flex justify-center items-center  bg-hero-pattern  bg-center  bg-cover bg-fixed bg-no-repeat	h-screen '>
        <div className='  w-[95%] m-auto'>
          <div className=' header relative  items-center flex h-screen '>
            <div className=' w-[70%] m-auto items-center flex flex-wrap'>
              <div className=' w-full px-4'>
                <div className=''>
                  <h2 className='text-[white] text-center  font-semibold text-4xl '>
                    Mothers Nest
                  </h2>
                  <p className='text-[white] text-center mt-4 text-lg leading-relaxed '>
                    Notus NextJS is Free and Open Source. It does not change any
                    of the CSS from . It features multiple HTML elements and it
                    comes with dynamic components for ReactJS, Vue and Angular.
                  </p>
                  <div className=' flex justify-center m-auto mt-12'>
                    <Link
                      href=''
                      target='_blank'
                      rel='noreferrer'
                      className='mr-6 text-[white] bg-[red] get-started  font-bold px-6 py-4 rounded outline-none focus:outline-none  mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150'
                    >
                      Button 1
                    </Link>
                    <Link
                      href=''
                      rel='noreferrer'
                      className='text-[white] bg-[red] github-star ml-1  font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg'
                      target='_blank'
                    >
                      Button 2
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
