import Image from "next/image";
import ProductImage from "@/assets/images/image-product-desktop.jpg";
import ProductImageMobile from "@/assets/images/image-product-mobile.jpg";

import IconCart from "@/assets/images/icon-cart.svg";

export default function Home() {
  return (
    <div className=' min-h-screen bg-cream flex justify-center items-center '>
      <div className='flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-xl w-4/5 md:w-[40%] '>
        <div className='flex-1 relative min-h-[30vh] min-w-[50%]'>
          <Image
            src={ProductImage}
            alt='product'
            fill
            className={"object-fill hidden md:block"}
          />
          <Image
            src={ProductImageMobile}
            alt='product mobile'
            fill
            className={"object-fill md:hidden"}
          />
        </div>
        <div className='flex-1 flex flex-col p-8 gap-y-8'>
          <p className='font-montserrat text-neutral-400 tracking-[0.5em]'>
            PERFUME
          </p>
          <p className='font-fraunces text-4xl font-extrabold'>
            Gabrielle Essence Eau De Parfum
          </p>
          <p className='text-neutral-500 font-montserrat'>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className='flex items-center'>
            <p className='mr-4 text-dark-cyan font-fraunces text-4xl'>
              $149.99
            </p>
            <p className='text-neutral-400 line-through'>$169.99</p>
          </div>
          <button className='hover:bg-green-900 w-full bg-dark-cyan text-white p-3 rounded-md'>
            <div className='flex items-center justify-center gap-x-4 font-montserrat'>
              <Image src={IconCart} alt='icon-cart' width={20} height={20} />
              <p>Add to Cart</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
