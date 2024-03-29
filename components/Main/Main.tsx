import React from "react";
import Link from "next/link";
import {colorScheme} from "../../Constants/Constants";
const Section1 = () => {
  const {orange, orange2, green, green2} = colorScheme;
  return (
    <div>
      <div className='relative flex justify-center items-center  bg-hero-pattern  bg-center  bg-cover bg-fixed bg-no-repeat	h-screen '>
        <div className='  w-[95%] m-auto'>
          <div className=' header relative  items-center flex h-screen '>
            <div className=' w-[85%] m-auto items-center flex flex-wrap'>
              <div className=' w-full px-4'>
                <div className=''>
                  <h2
                    style={{textShadow: "1px 1px 8px #000000"}}
                    className=' text-[white] text-center  font-semibold text-5xl '
                  >
                    MOTHERS NEST
                  </h2>
                  <p className='uppercase text-justify text-[#FAF9F6] mt-4 text-xl leading-relaxed '>
                    We take care of the world like a mother takes care of her
                    children. We have helped more than 900 children become a
                    better person, have helped 50+ elderly women in finding
                    appropiate nurtition and shelter, and we expect to keep
                    growing day by day
                  </p>
                  <div className={` flex justify-center m-auto mt-12`}>
                    <Link
                      href=''
                      target='_blank'
                      rel='noreferrer'
                      className=' mx-4  ease-in duration-200 custom-btn1 btn-2 '
                    >
                      Know More
                    </Link>
                    <Link
                      href=''
                      rel='noreferrer'
                      className='mx-4   ease-in duration-200 custom-btn1 btn-1 '
                      target='_blank'
                    >
                      Donate
                    </Link>
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

export default Section1;
