import { ArrowRightCircle, CalendarIcon, LocateIcon, MedalIcon } from "lucide-react"
import Image from "next/image";
import Link from "next/link";

export default function HackathonPageContent() {
    return (
        <div className="bg-[#ffffff] min-h-screen">
            
            <div className="relative bg-[#FFE7A5] flex flex-col justify-center items-center overflow-hidden h-[90vh]">
               {/** Top Border */}
                <div
              className="absolute top-0 left-0 w-full z-10 h-10 sm:h-12"
                    style={{
                        backgroundImage: "url('/images/border.svg')",
                        backgroundRepeat: "repeat-x",
                        backgroundSize: "auto 40%",
                    }}
                />  
                {/** Decor arrow */}
                <Image 
                src="/images/decor-arrow.svg"
                alt="Decorative Arrow"
                width={100}
                height={100}
                className="mb-8 absolute top-50 left-10 lg:top-50 lg:left-50  animate-bounce-slow"
                />

                {/** Decor line */}
                <Image
                src="/images/decor-line.svg"
                alt="Decorative Line"
                width={100}
                height={100}
                className="mb-8 absolute h-[70px] w-[70px] lg:h-[100px] lg:w-[100px] top-50 right-10 lg:top-50 lg:right-50  animate-bounce-slow"
                />

                {/** Decor tag */}
                <Image
                src="/images/decor-tags.svg"
                alt="Decorative Tag"
                width={150}
                height={150}
                className="mb-8 h-[100px] w-[100px] lg:h-[150px] lg:w-[150px] absolute bottom-40 left-10 lg:bottom-50 lg:left-50  animate-bounce-slow"
                />

                {/** Content */}

                <h1 className="text-3xl lg:text-6xl font-bold text-center text-[#FF0000] font-ethno">Hack-a-Sol <br /> 2025</h1>
                <p className="mt-4 text-lg text-center text-gray-800">Join us for an exciting hackathon event!</p>
                    <div className="flex px-8 flex-row sm:flex-row gap-3 sm:gap-6 mt-4 justify-center">
                         <div className="flex items-center gap-2">
                           <CalendarIcon className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                          <span className="text-sm text-left sm:text-base font-medium">Saturday, November 15, 2025</span>
                             </div>

                         <div className="flex items-start sm:items-center gap-2 max-w-xs">
                          <LocateIcon className="h-5 w-5 sm:h-6 sm:w-6 text-black mt-0.5" />
                           <span className="text-sm sm:text-base font-medium text-left">
                             International Institute of Information Technology, Naya Raipur
                           </span>
                         </div>
                      </div>
                
                {/** Bottom Border */}
                <div
              className="absolute bottom-[-26px] left-0 w-full z-10 h-10 sm:h-12"
                    style={{
                        backgroundImage: "url('/images/border.svg')",
                        backgroundRepeat: "repeat-x",
                        backgroundSize: "auto 40%",
                    }}
                />
            </div>
            <div className="relative bg-white flex flex-col justify-center items-center py-16 px-4 h-screen">
                {/** Hackathon Poster */}
                <Image
                    src="/images/hackathon-poster.svg"
                    alt="Hackathon Poster"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                    className="absolute bg-none z-20 top-[-25%] rounded-lg shadow-lg"
                />
                <div className="flex flex-col lg:flex-row gap-16 item-center justify-center mt-0 lg:mt-96 text-center z-10">
                    <div className="mb-8 bg-[#FFE7A5] p-6 rounded-lg shadow-md">
                            <h1 className="text-8xl font-bold text-[#ff0000] mb-4">
                                 $ 946
                             </h1>
                            <p className="text-3xl font-medium text-gray-800">
                            <MedalIcon className="h-6 w-6 text-black inline-block mr-2" />
                            Prize Pool
                        </p>
                    </div>
                    <div className="mb-8 bg-white p-6 rounded-lg shadow-md text-left max-w-3xl">
                        <p>Hack-a-Sol 4.0 is IIIT Naya Raipur’s flagship national-level hackathon, bringing together the brightest minds from across India for a 24-hour innovation marathon. Participants will collaborate, ideate, and build impactful solutions to real-world challenges across domains like Artificial Intelligence, Cybersecurity, Sustainability, and more.</p>
                        <Link
                            href={process.env.NEXT_PUBLIC_BADGE_URL || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full mt-7 sm:w-auto justify-center items-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer group border-2 border-green-950 px-4 py-2 hover:shadow-xl bg-[#34A853] text-white shadow-lg text-base gap-2"
                        >
                            Register Now !
                            <ArrowRightCircle />
                        </Link>
                    </div>
                </div>
            </div>
            
                    {/** Schedule Page */}
                    <Image
                    src="/images/schedule.svg"
                    alt="Hackathon Schedule"
                    width={1200}
                    height={1200}
                    objectFit="cover"
                    className="w-full mt-16 hidden lg:block"
                />
                <Image
                    src="/images/schedule2.svg"
                    alt="Hackathon Schedule"
                    width={1200}
                    height={1200}
                    objectFit="cover"
                    className="w-full mt-16 block lg:hidden"
                />

        </div>
    )
}