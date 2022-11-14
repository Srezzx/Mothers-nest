import React from "react";

const Quote = () => {
  return (
    <div className='bg-motherteresa bg-no-repeat bg-cover bg-fixed relative'>
      <div
        className='bg-[lightblue] z-[-50] -mb-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20 '
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
            className='text-[white] fill-current'
            points='2560 0 2560 100 0 100'
          ></polygon>
        </svg>
      </div>
      <div className='w-[90%] m-auto flex py-32  '>
        <blockquote className='w-full text-xl italic font-semibold text-gray-900 dark:text-white'>
          <div className=' pb-4 flex flex-row align-center justify-center md:justify-start '>
            {" "}
            <svg
              aria-hidden='true'
              className='  pr-4  w-12 h-auto text-[#1f4efe] '
              viewBox='0 -5 24 27'
              fill='none'
            >
              <path
                d='M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z'
                fill='currentColor'
              />
            </svg>
            <p className='text-gradient-custom-1 text-4xl md:text-5xl'>
              {" "}
              <span className='text-transparent text-gradient-custom-1'>
                {" "}
                Mother Teresa
              </span>{" "}
            </p>
          </div>

          <p className='text-[black]  text-center text-2xl md:text-3xl '>
            &quot; It&apos;s not how much we give, but how much love we put into
            giving &quot;
          </p>
        </blockquote>
      </div>
      <div
        className=' -mt-20 top-auto bottom-auto left-0 right-0 w-full absolute h-20 '
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
    </div>
  );
};

export default Quote;
