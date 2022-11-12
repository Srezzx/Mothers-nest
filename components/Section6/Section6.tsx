import React from "react";
import Link from "next/link";
const Section6 = () => {
  return (
    <div>
      {" "}
      <div className='container mx-auto'>
        <div className='justify-center flex flex-wrap'>
          <div className='w-full lg:w-12/12 px-4  -mt-24'>
            <div className='flex flex-wrap'>
              <div className='w-full lg:w-4/12 px-4'>
                <h5 className='text-xl font-semibold pb-4 text-center'>
                  Login Page
                </h5>
                <Link href='/auth/login'>
                  <div className='hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150'>
                    <img
                      alt='...'
                      className='align-middle border-none max-w-full h-auto rounded-lg'
                      src='/img/login.jpg'
                    />
                  </div>
                </Link>
              </div>

              <div className='w-full lg:w-4/12 px-4'>
                <h5 className='text-xl font-semibold pb-4 text-center'>
                  Profile Page
                </h5>
                <Link href='/profile'>
                  <div className='hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150'>
                    <img
                      alt='...'
                      className='align-middle border-none max-w-full h-auto rounded-lg'
                      src='/img/profile.jpg'
                    />
                  </div>
                </Link>
              </div>

              <div className='w-full lg:w-4/12 px-4'>
                <h5 className='text-xl font-semibold pb-4 text-center'>
                  Landing Page
                </h5>
                <Link href='/landing'>
                  <div className='hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150'>
                    <img
                      alt='...'
                      className='align-middle border-none max-w-full h-auto rounded-lg'
                      src='/img/landing.jpg'
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
