import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillBookFill } from "react-icons/bs";
import { FaPrayingHands } from "react-icons/fa";
import { MdFoodBank } from "react-icons/md";
const Section2 = () => {
  return (
    <div
      className='relative pt-0 mt-0'
      style={{ backgroundColor: "lightblue" }}
    >
      <div
        className='-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20 '
        style={{ transform: "translateZ(0)" }}
      >
        <svg
          className='absolute bottom-0 overflow-hidden'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='none'
          version='1.1'
          viewBox='0 0 2560 100'
          x='0'
          y='0'
        >
          <polygon
            className='text-[lightblue] fill-current'
            points='2560 0 2560 100 0 100'
          ></polygon>
        </svg>
      </div>
      <div className='container mx-auto'>
        <div className='flex flex-wrap items-center'>
          <div className='w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32'>
            <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700'>
              <img
                alt='...'
                src='/images/template1.jpg'
                className='w-full align-middle rounded-t-lg'
              />
              <blockquote className='relative p-8 mb-4'>
                <h4 className='text-center text-xl font-bold '>Mothers Nest</h4>
                <p className='text-justify text-md font-light mt-2 '>
                  Mothers Nest, is a non profit organization and a child care,
                  elderly support activity unit. With free access to food,
                  living and education, it provides the perfect warmth of a home
                  to the needy.{" "}
                </p>
              </blockquote>
            </div>
          </div>

          <div className='w-full md:w-6/12 px-4'>
            <div className='flex flex-wrap'>
              <div className='w-full md:w-6/12 px-4'>
                <div className='relative flex flex-col mt-4'>
                  <div className='px-4 py-5 flex-auto'>
                    <div className=' p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white'>
                      <BsFillBookFill size={40} color={"blue"} />
                    </div>
                    <h6 className='text-xl mb-1 font-semibold'>
                      Child Education
                    </h6>
                    <p className='mb-4 '>
                      Provides basic education to the needy little ones and
                      makes them ready for high schools.
                    </p>
                  </div>
                </div>
                <div className='relative flex flex-col min-w-0'>
                  <div className='px-4 py-5 flex-auto'>
                    <div className='text-[white] p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-[white]'>
                      <MdFoodBank size={40} color={"blue"} />
                    </div>
                    <h6 className='text-xl mb-1 font-semibold'>Food</h6>
                    <p className='mb-4 '>
                      Provides the basic facilities like food and water to the
                      enrolled children.
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-6/12 px-4'>
                <div className='relative flex flex-col min-w-0 mt-4'>
                  <div className='px-4 py-5 flex-auto'>
                    <div className=' p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white'>
                      <FaPrayingHands color={"blue"} size={40} />
                    </div>
                    <h6 className='text-xl mb-1 font-semibold'>
                      Elderly Support
                    </h6>
                    <p className='mb-4 '>
                      We try to provide nourishment and care to the elderly
                      people who are left alone in the society.
                    </p>
                  </div>
                </div>
                <div className='relative flex flex-col min-w-0'>
                  <div className='px-4 py-5 flex-auto'>
                    <div className=' p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white'>
                      <AiFillHome color={"blue"} size={40} />
                    </div>
                    <h6 className='text-xl mb-1 font-semibold'>Shelter</h6>
                    <p className='mb-4 '>
                      We are currently building the facility to provide shelter
                      24x7 to the elderly people.
                    </p>
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

export default Section2;
