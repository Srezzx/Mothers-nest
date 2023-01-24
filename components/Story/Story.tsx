import React from "react";
import {AiFillAccountBook} from "react-icons/ai";
const Section5 = () => {
  return (
    <div className='relative'>
      <div className='absolute h-[80vh] margin-auto right-[50%]'>
        <img className='h-full' src='/svgs/gradient5.svg' />
      </div>
      <div className='mt-10  relative mx-auto px-4 pb-32 '>
        <div className=' items-center flex flex-wrap'>
          <div className=' w-full lg:w-6/12 ml-auto px-4 md:px-4'>
            <div className='md:pr-12'>
              <h2 className='  text-3xl'> Our Story</h2>
              <p className=' my-6  xl:my-20 text-lg leading-relaxed '>
                We started on November 2014, and have been growing ever since.
                With our visonary founders, we have helped so many needy
                children and elder women. With the help of community and the
                government, we are growing day by day and have been helping
                several people in need. We have more than 10 full time workers,
                in addition to the volunteers.
              </p>
            </div>
          </div>

          <div className='w-full lg:w-5/12 mr-auto px-4 pt-24 md:pt-0'>
            <img
              alt='...'
              className='max-w-full rounded-lg shadow-xl App-logo'
              style={{
                transform:
                  "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
              }}
              src='/images/template1.jpg'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
