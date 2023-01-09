import React from "react";

const Card = (props: any) => {
  const {description, stats} = props;
  return (
    <div className=''>
      <div className='relative  my-6  xl:my-20  rounded-lg w-[280px] m-auto   flex justify-center align-center'>
        <div className=' h-full  absolute z-[10] opacity-[0.15] flex '>
          <img className='' src='/svgs/education.svg' alt='education ' />
        </div>
        <div className='z-[11]  rounded-lg shadow-lg  max-w-sm w-[100%]'>
          <h1 className=' bg-[#FAF9F6]/50 py-5 text-3xl text-center'>
            {stats}
          </h1>
          <div className=' min-h-[200px]  flex-col py-6 px-3  flex justify-center align-center'>
            <p className='text-center text-gray-700 text-base mb-4'>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
