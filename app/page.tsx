import Image from "next/image";

import IconStar from "@/assets/images/icon-star.svg";
import { data } from "@/utils/index";
import { AccordionCard } from "@/components";
export default function Home() {
  return (
    <div className=' min-h-screen bg-light-pink flex justify-center items-center '>
      <div className='flex flex-col  bg-white p-6 rounded-xl shadow-xl w-4/5 sm:w-[30%] '>
        <div className='flex'>
          <Image
            src={IconStar}
            width={25}
            height={25}
            alt='illustration-box-desktop'
            className='mr-4'
          />
          <h2 className='text-3xl font-bold'>FAQs</h2>
        </div>
        <div className='flex flex-col justify-around flex-1 divide-y divide-neutral-300  mt-4'>
          {data.map((data, index) => (
            <AccordionCard key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}
