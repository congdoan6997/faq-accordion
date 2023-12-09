"use client";

import Image from "next/image";
import { Transition } from "@headlessui/react";
import React from "react";

import { cn } from "@/utils";
import IconPlus from "@/assets/images/icon-plus.svg";
import IconMinus from "@/assets/images/icon-minus.svg";
type Props = {
  data: {
    header: string;
    content: string;
  };
};

const AccordionCard: React.FC<Props> = ({ data }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className='py-5'>
      <details className='group'>
        <summary
          onClick={() => setIsOpen(!isOpen)}
          className='flex items-center justify-between cursor-pointer list-none gap-x-4'
        >
          <h3 className='text-lg font-bold'>{data.header}</h3>
          <Image
            src={isOpen ? IconMinus : IconPlus}
            width={25}
            height={25}
            alt='icon'
          />
        </summary>
        <Transition
          show={isOpen}
          enter='transition-opacity duration-75'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-150'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <p className='w-full text-neutral-500 mt-3'>{data.content}</p>
        </Transition>
      </details>
    </div>
  );
};

export default AccordionCard;
