import React from "react";

const Card = (props: any) => {
  const {description, stats} = props;
  return (
    <div>
      <div className='  my-6  xl:my-20  rounded-lg w-[280px] m-auto   flex justify-center'>
        <div className=' rounded-lg shadow-lg bg-[white] max-w-sm w-[100%]'>
          <h1 className='bg-[#FAF9F6]/50 py-5 text-3xl text-center'>{stats}</h1>
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
