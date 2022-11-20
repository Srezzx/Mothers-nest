import React from "react";
import Card from "./Card";
const Aim = () => {
  return (
    <div className='pt-12 bg-[#c2edda] '>
      <div className='w-[95%] m-auto'>
        <h2 className='  text-3xl'> Our Aim and Misson</h2>
        <div className=' grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 justify-center  '>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Aim;
