import React from "react";
import Team from "../components/Team/Team";
const team = () => {
  return (
    <div className='w-[90%] m-auto pt-32 '>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='my-10 text-4xl font-bold text-center text-gray-900 '>
          Meet Our Star Team!
        </h1>

        <Team />
      </div>
    </div>
  );
};

export default team;
