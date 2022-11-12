import React from "react";

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
                src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'
                className='w-full align-middle rounded-t-lg'
              />
              <blockquote className='relative p-8 mb-4'>
                <h4 className='text-xl font-bold '>
                  Great for your awesome project
                </h4>
                <p className='text-md font-light mt-2 '>
                  Putting together a page has never been easier than matching
                  together pre-made components. From landing pages presentation
                  to login areas, you can easily customise and built your pages.
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
                      <i className='fas fa-sitemap'></i>
                    </div>
                    <h6 className='text-xl mb-1 font-semibold'>
                      CSS Components
                    </h6>
                    <p className='mb-4 '>
                      Notus NextJS comes with a huge number of Fully Coded CSS
                      components.
                    </p>
                  </div>
                </div>
                <div className='relative flex flex-col min-w-0'>
                  <div className='px-4 py-5 flex-auto'>
                    <div className='text-[white] p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-[black]'>
                      <i className='fas fa-drafting-compass'></i>
                    </div>
                    <h6 className='text-xl mb-1 font-semibold'>
                      JavaScript Components
                    </h6>
                    <p className='mb-4 '>
                      We also feature many dynamic components for React, NextJS,
                      Vue and Angular.
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-6/12 px-4'>
                <div className='relative flex flex-col min-w-0 mt-4'>
                  <div className='px-4 py-5 flex-auto'>
                    <div className=' p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white'>
                      <i className='fas fa-newspaper'></i>
                    </div>
                    <h6 className='text-xl mb-1 font-semibold'>Pages</h6>
                    <p className='mb-4 '>
                      This extension also comes with 3 sample pages. They are
                      fully coded so you can start working instantly.
                    </p>
                  </div>
                </div>
                <div className='relative flex flex-col min-w-0'>
                  <div className='px-4 py-5 flex-auto'>
                    <div className=' p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white'>
                      <i className='fas fa-file-alt'></i>
                    </div>
                    <h6 className='text-xl mb-1 font-semibold'>
                      Documentation
                    </h6>
                    <p className='mb-4 '>
                      Built by developers for developers. You will love how easy
                      is to to work with Notus NextJS.
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
