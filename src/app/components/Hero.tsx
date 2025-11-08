"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from './Button';
import { ArrowRightCircle, CalendarIcon, LocateIcon } from 'lucide-react';
import Link from 'next/link';
import NavBar from './Navbar';

// Dummy data for sponsors
// const SPONSORS = [
//    {alt: 'Sponsor 1', src: '/images/sponsor1.png'},
//    {alt: 'Sponsor 2', src: '/images/sponsor2.png'},
//    {alt: 'Sponsor 3', src: '/images/sponsor3.png'},
//    {alt: 'Sponsor 4', src: '/images/sponsor4.png'},

// ]

export default function Hero() {
    const [isLoaded, setIsLoaded] = useState(false);
    

    useEffect(() => {
    setIsLoaded(true);
  }, []);


return (
  <>

  <div className='relative w-full overflow-x-hidden'>
    <section
      className="relative w-full h-[90vh] sm:h-screen bg-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-30 pointer-events-none" />

      {/* Center Content: Landing Logo - Perfectly Centered */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center z-10 transition-all duration-700 ease-out ${isLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} pb-12 sm:pb-24 px-4`}
      >
        <div className="relative group w-full max-w-4xl sm:max-w-7xl">
          <div className="relative w-full aspect-[3/1] sm:aspect-[4/1] mx-auto">
            <Image
              src="/images/hero.svg"
              alt="DevFest Raipur 2025"
              fill
              sizes="(max-width: 640px) 95vw, (max-width: 1024px) 90vw, 80vw"
              className="object-contain transition-transform duration-300"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
          </div>
        </div>

        {/* Subtitle */}
        <p className="mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm md:text-lg text-[#2c5530] italic font-serif transition-opacity duration-500 text-center max-w-xl">
          “Celebrating Code & Culture — DevFest Raipur 2025”
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 mt-4 sm:mt-6">
          <Link
            href={process.env.NEXT_PUBLIC_BADGE_URL || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto justify-center items-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer group border-2 border-green-950 px-4 py-2 hover:shadow-xl bg-[#34A853] text-white shadow-lg text-base gap-2"
          >
            Get Your Badge
            <ArrowRightCircle />
          </Link>

          <Button
            size="lg"
            className="w-full sm:w-auto px-4 py-2"
            variant="outline"
            onClick={() => {
              window.location.href = process.env.NEXT_PUBLIC_TICKETS_URL || '#';
            }}
          >
            Ticket
            <ArrowRightCircle />
          </Button>
        </div>
      </div>

      {/* Elephant - Left side, larger on desktop, smaller on mobile */}
      <div
        className={`absolute bottom-0 left-2 sm:left-4 md:left-8 transition-all duration-700 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
        aria-hidden="true"
      >
        <div className="relative group">
          <Image
            src="/images/hero-elephant.svg"
            alt="Cultural Elephant"
            width={225}
            height={562}
            className="w-40 sm:w-36 md:w-44 lg:w-[354.36px] xl:w-[354.36px] 2xl:w-[375px] object-contain transition-transform duration-300"
          />
        </div>
      </div>

      {/* Bottom Border - Responsive heights */}
      <div className="absolute bottom-[-4px] left-0 w-full z-10 pointer-events-none">
        <div className={`w-full transition-all duration-700 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
          <Image
            src="/images/hero-bottom.svg"
            alt="Cultural Border"
            width={1920}
            height={400}
            className="w-full h-6 sm:h-8 md:h-16 lg:h-45 z-10 "
            style={{ verticalAlign: 'bottom', display: 'block' }}
          />
        </div>
      </div>
    </section>

  {/** Second section */}
  <section className="relative w-screen bg-[#FFE7A5] py-10 sm:py-16 lg:py-24 flex flex-col items-center justify-center overflow-hidden">
    {/* Top Border */}
    <div
      className="absolute top-0 left-0 w-full z-10 h-10 sm:h-12"
      style={{
        backgroundImage: "url('/images/border.svg')",
        backgroundRepeat: "repeat-x",
        backgroundSize: "auto 40%",
      }}
      aria-hidden="true"
    />

    <div className="z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8">

      <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-8 items-center px-8">
        {/* Left / Content */}

        <div className="col-span-1">
          <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold text-[#4285F4]">
            DevFest Raipur 2025
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-left max-w-xl">
            An annual event hosted by the Google Developers Group across the world to bring technology closer to developers. It's an all‑day developer conference with lightning talks, sessions, workshops and hands‑on learning.
          </p>

          <div className="mt-5 flex flex-col sm:flex-col gap-4 sm:gap-8">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5 sm:h-6 sm:w-6 text-[#205c4b]" />
                <span className="text-sm sm:text-base font-medium">Saturday, November 15, 2025</span>
              </div>

              <div className="flex items-start sm:items-center gap-2 max-w-xs">
                <LocateIcon className="h-5 w-5 sm:h-6 sm:w-6 text-[#205c4b] mt-0.5" />
                <span className="text-sm sm:text-base font-medium">
                  International Institute of Information Technology, Naya Raipur
                </span>
              </div>
            </div>

            <Link
              href={process.env.NEXT_PUBLIC_TICKETS_URL || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center whitespace-nowrap rounded-full bg-[#34A853] text-white font-semibold px-4 py-2 text-sm sm:text-base shadow-lg hover:shadow-xl transition"
              aria-label="Book your ticket"
            >
              Book Your Ticket Now!
              <ArrowRightCircle className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
          </div>
        

        {/* Right / Map Image */}
        <div className="col-span-1 flex justify-center sm:justify-end">
          <Image
            src="/images/map.svg"
            alt="Map to venue"
            width={600}
            height={420}
            className="w-36 sm:w-56 md:w-64 lg:w-80 object-contain"
            priority
          />
        </div>
        </div>
        </div>
      
    

    {/* Bottom Border */}
    <div
      className="absolute bottom-[-28px] left-0 w-full z-10 h-10 sm:h-12"
      style={{
        backgroundImage: "url('/images/border.svg')",
        backgroundRepeat: "repeat-x",
        backgroundSize: "auto 40%",
      }}
      aria-hidden="true"
    />
  </section>

      <section className="relative w-screen bg-[#34A853] flex h-screen items-center justify-center">
        {/* Upper Decor - hidden on small screens */}
          <div className="hidden sm:block absolute top-0 left-0 ">
            <Image
              src="/images/hero-decor.svg"
              alt="Decor"
              width={160}
              height={240}
              className="rotate-180 opacity-80"
            />
          </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center sm:flex-row gap-8 sm:gap-16 justify-center relative">
          

          <div className="flex-1 flex flex-col items-center sm:items-start text-left sm:text-left">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              What is DevFest?
            </h1>

            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 w-full">
              <div className="flex-shrink-0">
                <Image
                  src="/images/devfest-2023.svg"
                  alt="DevFest 2023"
                  width={320}
                  height={220}
                  className="w-40 sm:w-56 md:w-72 h-auto"
                />
              </div>

              <div className="w-full sm:w-[466px] bg-white/90 p-4 sm:p-6 rounded-md relative">
                <p className="text-black text-sm sm:text-base md:text-lg">
                  DevFest is an annual decentralized tech conference hosted by Google Developer Groups (GDG) worldwide. DevFest 2024 marks the 13th year, with the 3rd edition in Patna focusing on knowledge exchange and networking opportunities for the people of Bihar!
                </p>

                <div className="absolute -bottom-10 right-0 lg:-bottom-15 lg:-right-20 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 pointer-events-none select-none">
                  <Image
                    src="/images/riksha.svg"
                    alt="Riksha"
                    width={202}
                    height={134}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          
        </div>
        {/* Bottom-right decor - hidden on xs */}
          <div className="hidden sm:block absolute right-0 bottom-0">
            <Image
              src="/images/hero-decor.svg"
              alt="Decor"
              width={160}
              height={240}
              className="opacity-80"
            />
          </div>
      </section>
      <section className="relative bg-[#F9AB00] px-4 sm:px-6 lg:px-8">
        {/** What's there for you? */}
        <div className="max-w-7xl mx-auto py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-black">
            What&apos;s there for you?
          </h2>

          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            <div className="flex flex-col items-center text-center bg-none rounded-lg p-4 sm:p-6">
              <Image
                src="/images/hero-technical.svg"
                alt="Technical Content"
                width={800}
                height={800}
                className="w-full max-w-[420px] h-auto object-contain"
              />
            </div>

            <div className="flex flex-col items-center text-center bg-none rounded-lg p-4 sm:p-6">
              <Image
                src="/images/hero-networking.svg"
                alt="Networking"
                width={800}
                height={800}
                className="w-full max-w-[420px] h-auto object-contain"
              />
            </div>

            <div className="flex flex-col items-center text-center bg-none rounded-lg p-4 sm:p-6">
              <Image
                src="/images/hero-funactivities.svg"
                alt="Fun Activities"
                width={800}
                height={800}
                className="w-full max-w-[420px] h-auto object-contain"
              />
              
            </div>

            <div className="flex flex-col items-center text-center bg-none rounded-lg p-4 sm:p-6">
              <Image
                src="/images/hero-knowledge.svg"
                alt="Knowledge Sharing"
                width={800}
                height={800}
                className="w-full max-w-[420px] h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/** Event Sponsors */}
        <div className="max-w-7xl mx-auto flex flex-col-reverse sm:flex-row items-center gap-8 py-8 sm:py-12">
          <div className="w-full sm:w-1/2">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-3">Event Sponsors</h3>
            <p className="text-sm sm:text-base text-black max-w-xl">
              Google DevFest Raipur is powered entirely by passionate volunteers, reflecting the collaborative spirit of the developer community. Sponsorship plays a vital role in sustaining and expanding the event, ensuring it remains inclusive and accessible to everyone. By sponsoring, you not only support event operations and resources but also contribute to strengthening the developer ecosystem in Central India.
            </p>

            <div className="mt-6">
              <Link
                href={process.env.NEXT_PUBLIC_DOWNLOAD_PROSPECTUS || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer group border-2 border-green-950 px-4 py-2 hover:shadow-xl bg-[#34A853] text-white shadow-lg text-sm sm:text-base gap-3"
                aria-label="Download prospectus"
              >
                Download Prospectus
                <ArrowRightCircle className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="w-full sm:w-1/2 flex justify-center">
            <Image
              src="/images/hero-camel.svg"
              alt="Camel"
              width={400}
              height={400}
              className="w-40 sm:w-56 md:w-72 h-auto object-contain"
            />
          </div>
        </div>

        {/** Sponsor Logos Grid (responsive placeholders) */}

        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-center justify-center mt-6">
            {SPONSORS.map((sponsor, index) => (
              <div key={index} className="bg-amber-50 h-16 sm:h-20 rounded-md flex items-center justify-center">
                <Image
                  src={sponsor.src}
                  alt={sponsor.alt} 
                  height={40}
                  width={60}/>
              </div>
            ))}
            
          </div>
        </div> */}

        {/** Bottom GDG logo - responsive positioned */}
        <div className="relative w-full overflow-visible mt-12">
          <div className="relative w-full h-44 sm:h-56 md:h-72 lg:h-[400px]">
            <Image
              src="/images/hero-bottom-gdg.svg"
              alt="GDG Logo"
              width={911}
              height={381}
              className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-auto max-w-[90%] h-auto"
            />
          </div>
        </div>
      </section>

      {/** Previous DevFest highlights */}

      <section className="relative bg-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-black">
            Previous DevFest highlights
          </h2>

          <div className="mt-6 sm:mt-10 grid grid-cols-1 gap-6">
            {/* single large card that stays responsive */}
            <div className="w-full bg-white rounded-2xl shadow-sm overflow-hidden">
              <Image
                src="/images/hero-highlights.svg"
                alt="Previous DevFest Highlights"
                width={1600}
                height={900}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
                className="w-full h-auto object-cover block"
              />
            </div>
          </div>

          <div className="flex justify-center mt-6 sm:mt-10 mb-6">
            <Link
              href={process.env.NEXT_PUBLIC_PREVIOUS_HIGHLIGHTS || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer group pl-4 pr-4 py-2 sm:pl-6 sm:pr-6 sm:py-3 text-sm sm:text-base bg-[#34A853] text-white shadow-lg gap-2"
              aria-label="See more highlights"
            >
              <span>See more..</span>
              <ArrowRightCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        
      </section>
      </div>
      </>
)
}