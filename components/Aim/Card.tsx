import React from "react";

const Card = (props: any) => {
  const {description, stats, image} = props;
  return (
    <div className=''>
      <div className='bg-gradient-to-r from-[#ffb766]/30 to-[#ffb766]/10 relative  my-6  xl:my-20  rounded-lg w-[280px] m-auto   flex justify-center align-center'>
        <div className=' zoom rounded-lg h-full  absolute z-[100] flex '>
          <img
            className=' h-full w-full '
            src={`/images/${image}`}
            alt='education '
          />
        </div>
        <div className='z-[11] flex flex-col align-center justify-center rounded-lg shadow-lg  max-w-sm w-[100%]'>
          <h1 className='z-[101] py-5 mt-5 text-4xl text-center text-[#010138] font-bold'>
            {stats}
          </h1>
          <div className=' min-h-[200px]  flex-col py-6 px-3  flex justify-center align-center font-semibold'>
            <p className='text-center text-[#010138] text-base mb-4'>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
