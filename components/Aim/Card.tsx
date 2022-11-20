import React from "react";

const Card = () => {
  return (
    <div>
      <div className=' my-6  xl:my-20  rounded-lg w-[280px] m-auto   flex justify-center'>
        <div className=' rounded-lg shadow-lg bg-[red] max-w-sm w-[100%]'>
          <a href='#!' data-mdb-ripple='true' data-mdb-ripple-color='light'>
            <img
              className='rounded-t-lg'
              src='https://mdbootstrap.com/img/new/standard/nature/182.jpg'
              alt=''
            />
          </a>
          <div className='flex flex-col p-6'>
            <h5 className='text-center text-gray-900 text-xl font-medium mb-2'>
              Card title
            </h5>
            <p className='text-center text-gray-700 text-base mb-4'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button
              type='button'
              className=' w-[80%] m-auto inline-block px-6 py-2.5 bg-[black]/40 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[black]/50 hover:shadow-lg focus:bg-[black]/50 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[black]/50 active:shadow-lg transition duration-150 ease-in-out'
            >
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
