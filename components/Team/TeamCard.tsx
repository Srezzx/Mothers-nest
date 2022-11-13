import React from "react";

const TeamCard = (props: { name: any; message: any; image: any }) => {
  const { name, message, image } = props;
  return (
    <div>
      <div className='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
        <a href='#'>
          <img className='rounded-t-lg' src='/images/template1.jpg' alt='' />
        </a>
        <div className='p-5'>
          <a href='#'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              {name}
            </h5>
          </a>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
