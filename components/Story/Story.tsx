import React from "react";
import { AiFillAccountBook } from "react-icons/ai";
const Section5 = () => {
  return (
    <div>
      <div className='bg-[lightblue]  relative mx-auto px-4 pb-32 mt-24'>
        <div
          className=' -mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20 '
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className='absolute bottom-0 overflow-hidden'
            preserveAspectRatio='none'
            version='1.1'
            viewBox='0 0 2160 100'
            x='0'
            y='0'
          >
            <polygon
              className='text-[lightblue] fill-current'
              points='2160 0 2160 100 0 100'
            ></polygon>
          </svg>
        </div>
        <div className=' items-center flex flex-wrap'>
          <div className=' w-full md:w-5/12 ml-auto px-4 md:px-4'>
            <div className='md:pr-12'>
              <div className=' p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white'>
                <AiFillAccountBook size={50} color={"blue"} />
              </div>
              <h3 className='text-3xl font-semibold'>Our Story</h3>
              <p className='mt-4 text-lg leading-relaxed '>
                This extension comes a lot of fully coded examples that help you
                We started on November 2014, and have been growing ever since.
                With our visonary founders, we have helped so many needy
                children and elder women.
              </p>
              <div className='  flex flex-row align-center justify-around'>
                <ul className=' list-none mt-6'>
                  <li className='py-2'>
                    <div className='flex items-center'>
                      <div>
                        <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full  bg-blueGray-50 mr-3'>
                          <AiFillAccountBook size={30} color={"blue"} />
                        </span>
                      </div>
                      <div>
                        <h4 className=''>Deed -1</h4>
                      </div>
                    </div>
                  </li>
                  <li className='py-2'>
                    <div className='flex items-center'>
                      <div>
                        <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full  bg-blueGray-50 mr-3'>
                          <AiFillAccountBook size={30} color={"blue"} />
                        </span>
                      </div>
                      <div>
                        <h4 className=''>Deed -2</h4>
                      </div>
                    </div>
                  </li>
                  <li className='py-2'>
                    <div className='flex items-center'>
                      <div>
                        <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full  bg-blueGray-50 mr-3'>
                          <AiFillAccountBook size={30} color={"blue"} />
                        </span>
                      </div>
                      <div>
                        <h4 className=''>Deed -3</h4>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul className=' list-none mt-6'>
                  <li className='py-2'>
                    <div className='flex items-center'>
                      <div>
                        <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full  bg-blueGray-50 mr-3'>
                          <AiFillAccountBook size={30} color={"blue"} />
                        </span>
                      </div>
                      <div>
                        <h4 className=''>Deed -1</h4>
                      </div>
                    </div>
                  </li>
                  <li className='py-2'>
                    <div className='flex items-center'>
                      <div>
                        <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full  bg-blueGray-50 mr-3'>
                          <AiFillAccountBook size={30} color={"blue"} />
                        </span>
                      </div>
                      <div>
                        <h4 className=''>Deed -2</h4>
                      </div>
                    </div>
                  </li>
                  <li className='py-2'>
                    <div className='flex items-center'>
                      <div>
                        <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full  bg-blueGray-50 mr-3'>
                          <AiFillAccountBook size={30} color={"blue"} />
                        </span>
                      </div>
                      <div>
                        <h4 className=''>Deed -3</h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0'>
            <img
              alt='...'
              className='max-w-full rounded-lg shadow-xl'
              style={{
                transform:
                  "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
              }}
              src='/img/documentation.png'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
