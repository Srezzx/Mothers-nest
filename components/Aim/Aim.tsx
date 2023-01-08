import React from "react";
import Card from "./Card";
const Aim = () => {
  return (
    <div className='pt-12 bg-[#FAF9F6] '>
      <div className='w-[95%] m-auto'>
        <h2 className='  text-3xl'> Our Aim and Misson</h2>
        <div className=' grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 justify-center  '>
          <Card
            description={
              "At present handing the education of these children, in age group in between 3 to 15 Years old, mostly Orphans, Street, needy and very poor section off this locality."
            }
            stats={"120+"}
          />
          <Card
            description={
              "Old aged Burima has been adopted for their fooding and clothing,"
            }
            stats={"20"}
          />
          <Card
            description={
              "Illiterate women are lessonig under  our adults education Center."
            }
            stats={"30+"}
          />
          <Card
            description={
              "Women are going through technical sewing machines lessonig skill at our campus."
            }
            stats={"40"}
          />
        </div>
      </div>
    </div>
  );
};

export default Aim;
