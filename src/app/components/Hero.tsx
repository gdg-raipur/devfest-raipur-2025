"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from './Button';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { ArrowRightCircle, CalendarIcon, LocateIcon } from 'lucide-react';

export default function Hero() {
    const [isLoaded, setIsLoaded] = useState(false);
    

    useEffect(() => {
    setIsLoaded(true);
  }, []);


return (
  <>
  <div className='relative w-screen overflow-visible'>
     <section
        className="relative w-full h-screen bg-white overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-pattern opacity-30"></div>

        {/* Center Content: Landing Logo - Perfectly Centered */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center z-10 transition-all duration-1000 ease-out delay-500 ${isLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} pb-16 sm:pb-24`}>
          <div className="relative group w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative w-full aspect-[4/1] max-w-6xl mx-auto">
              <Image
                src="/images/hero.svg"
                alt="Django Day India 2025"
                fill
                sizes="(max-width: 640px) 95vw, (max-width: 1024px) 90vw, 80vw"
                className="object-contain transition-transform duration-300"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </div>
          </div>

          {/* Subtitle */}
          <p className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-[#2c5530] italic font-serif transition-opacity duration-500">
            “Celebrating Code & Culture — DevFest Raipuar 2025”
          </p>
         
         <div 
         className='flex items-center gap-4 mt-6'>
          <Button
            size='lg'
            className='items-center border-2 border-green-950 pl-[18.06px] pr-[12.79px] py-[8.28px] hover:shadow-xl'
            >
            Get Your Badge
            <ArrowRightCircle />
          </Button>
          <Button
           size='lg'
           className='pl-[18.06px] pr-[12.79px] py-[8.28px]'
           variant='outline'>
            Ticket
            <ArrowRightCircle />
          </Button>
      </div>      
          
        </div>

        {/* Lady - Left side, larger */}
        <div className={`absolute bottom-0 left-2 sm:left-4 md:left-8 transition-all duration-1000 ease-out delay-800 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="relative group">
            <Image
              src="/images/hero-elephant.svg"
              alt="Cultural Lady"
              width={225}
              height={562}
              className="w-[150px] lg:left-20 sm:w-[200px] md:w-[225px] lg:w-[354.36px] xl:w-[325px] 2xl:w-[375px] object-contain transition-transform duration-300"
            />
          </div>
        </div>

        {/* Bottom Border - Restored and properly aligned */}
        <div className="absolute bottom-[-26px] left-0 w-full z-10" style={{ pointerEvents: 'none' }}>
          <div className={`w-full transition-all duration-1000 ease-out delay-600 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Image
              src="/images/hero-bottom.svg"
              alt="Cultural Border"
              width={1920}
              height={400}
              className="w-full h-8 sm:h-16 md:h-32 lg:h-56 z-10"
              style={{ verticalAlign: 'bottom', display: 'block' }}
            />
          </div>
        </div>
        
      </section>

  {/** Second section */}
  <section className='relative w-screen h-screen flex flex-col items-center justify-center bg-[#FFE7A5]'>

    {/** Top Border */}
    <div className='w-screen h-16 absolute top-0 left-0 z-10 col-span-1'
     style={{
        backgroundImage: "url('/images/border.svg')",
        backgroundRepeat: 'repeat-x',
        backgroundSize: 'auto 40%'
     }}>
    </div>
      <div className='grid grid-cols-2 gap-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10'>
        <div className='col-span-1'>
            <h1 className='text-4xl font-bold text-left text-[#4285F4]'>
                DevFest Raipur 2025
            </h1>
            <p className='mt-4 text-lg text-left w-2xl'>
                An annual event hosted by the Google Developers Group across the world to bring the technology closer to the developers. It is an all day developer conference where we aim to focus on multiple technologies through lightning talks, sessions, workshops, etc
            </p>
            
            <div className='flex items-center gap-8'>
                <div className='flex items-center gap-2 mt-4'>
                <CalendarIcon />
                <span className='font-medium'>Saturday, November 15, 2025</span>
                </div>
                <div className='flex items-center gap-2 mt-2'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-[#205c4b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className='font-medium'>
                    International Institute of Information Technology, Naya Raipur
                </span>
                </div>
            </div>

            <Button 
            size='lg'
            className='items-center border-2 border-green-950 pl-[18.06px] pr-[12.79px] py-[8.28px] hover:shadow-xl mt-6'>
              Book Your Ticket Now !
              <ArrowRightCircle />
            </Button>


        </div>
        

        <div className='col-span-1'>
          <Image
            src="/images/map.svg"
            alt="Cultural Lady"
            width={225}
            height={562}
            className="w-[150px] lg:right-20 sm:w-[200px] md:w-[225px] lg:w-[354.36px] xl:w-[325px] 2xl:w-[375px] object-contain transition-transform duration-300 "
          />
        </div>
        </div>
        
      <div className='w-screen h-16 absolute bottom-[-40px] left-0 z-10 col-span-1'
     style={{
        backgroundImage: "url('/images/border.svg')",
        backgroundRepeat: 'repeat-x',
        backgroundSize: 'auto 40%'
     }}></div>
      </section>
      
      </div>
      </>
)
}