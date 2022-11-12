import React from "react";

const Section3 = () => {
  return (
    <div>
      <div className='flex flex-wrap items-center'>
        <div className='w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48'>
          <div className=' p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white'>
            <i className='fas fa-sitemap text-xl'></i>
          </div>
          <h3 className='text-3xl mb-2 font-semibold leading-normal'>
            CSS Components
          </h3>
          <p className='text-lg font-light leading-relaxed mt-4 mb-4 '>
            Every element that you need in a product comes built in as a
            component. All components fit perfectly with each other and can have
            different colours.
          </p>
          <div className='block pb-6'>
            <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full  bg-white uppercase last:mr-0 mr-2 mt-2'>
              Buttons
            </span>
            <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full  bg-white uppercase last:mr-0 mr-2 mt-2'>
              Inputs
            </span>
            <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full  bg-white uppercase last:mr-0 mr-2 mt-2'>
              Labels
            </span>
            <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full  bg-white uppercase last:mr-0 mr-2 mt-2'>
              Menus
            </span>
            <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full  bg-white uppercase last:mr-0 mr-2 mt-2'>
              Navbars
            </span>
            <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full  bg-white uppercase last:mr-0 mr-2 mt-2'>
              Pagination
            </span>
            <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full  bg-white uppercase last:mr-0 mr-2 mt-2'>
              Progressbars
            </span>
            <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full  bg-white uppercase last:mr-0 mr-2 mt-2'>
              Typography
            </span>
          </div>
          <a
            href=''
            target='_blank'
            rel='noreferrer'
            className='font-bold  hover: ease-linear transition-all duration-150'
          >
            View All{" "}
            <i className='fa fa-angle-double-right ml-1 leading-relaxed'></i>
          </a>
        </div>

        {/* <div className='w-full md:w-5/12 px-4 mr-auto ml-auto mt-32'>
              <div className='bg-[red] relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0'>
                 <img
                  alt='...'
                  src='/img/component-btn.png'
                  className=' align-middle rounded absolute shadow-lg max-w-100-px left-145-px -top-29-px z-3'
                />
                
                <img
                  alt='...'
                  src='/img/component-profile-card.png'
                  className='w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px'
                />
                <img
                  alt='...'
                  src='/img/component-info-card.png'
                  className='w-full align-middle rounded-lg absolute shadow-lg max-w-180-px left-40-px -top-225-px z-2'
                />
                <img
                  alt='...'
                  src='/img/component-info-2.png'
                  className='w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px'
                />
                <img
                  alt='...'
                  src='/img/component-menu.png'
                  className='w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px'
                />
                <img
                  alt='...'
                  src='/img/component-btn-pink.png'
                  className='w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px'
                /> 
              </div>
            </div> */}
      </div>
    </div>
  );
};

export default Section3;
