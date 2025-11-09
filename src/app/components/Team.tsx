"use client"
import { CalendarIcon, LocateIcon } from "lucide-react"
import Image from "next/image";
import Link from "next/link";

const TEAM = [
    { name: "Jane Doe", title: "Design", src: "/images/team/jane_doe.jpg", alt: "Jane Doe" },
    { name: "John Smith", title: "Volunteer", src: "/images/team/john_smith.jpg", alt: "John Smith" },
    { name: "Alice Patel", title: "Venue Manager", src: "/images/team/alice_patel.jpg", alt: "Alice Patel" },
    { name: "Bob Kumar", title: "Marketing", src: "/images/team/bob_kumar.jpg", alt: "Bob Kumar" },
]

export default function TeamPageContent() {
    return (
        <div className="relative w-full overflow-x-hidden">
            <div className="relative bg-[#34A853] flex flex-col justify-between overflow-visible h-[90vh]">
                <div
                 className="absolute top-0 left-0 w-full z-10 h-10 sm:h-12"
                    style={{
                        backgroundImage: "url('/images/team-border.svg')",
                        backgroundRepeat: "repeat-x",
                        backgroundSize: "auto 40%",
                    }}
                    aria-hidden="true"
                />
      
                <div className="flex-1 flex flex-col md:flex-row items-center justify-center px-4 md:px-24 gap-4 md:gap-8 min-h-0 py-8 md:py-0">
                    <div className="flex flex-col items-center md:items-start w-full md:pl-12 max-w-4xl text-center md:text-left">
                        <div className="flex flex-row justify-center md:justify-start w-full">
                            <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#FFFFFF] leading-tight">
                                Team
                            </h1>
                            
                        </div>
                        <p className="text-lg font-medium md:text-xl lg:text-2xl text-gray-800 mb-6 w-full lg:w-xl">
                                DevFest Raipur 2025 – Join the Celebration of the Google developer Group
                            </p>
                        <div className="flex flex-row sm:flex-row gap-3 sm:gap-6">
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
                    </div>

                    {/* Hero Illustration */}
                    <div className="flex items-center justify-center w-full md:w-auto">
                        <Image
                            src="/images/teamHero.svg"
                            alt="Code of Conduct Hero"
                            width={700}
                            height={700}
                            className="w-[500px] md:w-[400px] lg:w-[900px] object-contain"
                        />
                    </div>
                    </div>
                    <div
      className="absolute bottom-[-26px] left-0 w-full z-10 h-10 sm:h-12"
      style={{
        backgroundImage: "url('/images/team-border.svg')",
        backgroundRepeat: "repeat-x",
        backgroundSize: "auto 40%",
      }}
      aria-hidden="true"
    />

            {/* DevFest logo centered on the bottom border */}
            <div className="absolute left-0 bottom-[-20px] w-full z-20 pointer-events-none flex justify-center">
              <div
                aria-hidden="true"
                style={{
                  width: 180,
                  height: 100,
                  marginBottom: -24, // pull it slightly into the border area
                  backgroundImage: "url('/images/devfestlogo.svg')",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center bottom",
                  backgroundSize: "contain",
                }}
              />
            </div>
                </div>
                <section className="relative  h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                                    <h2 className="text-5xl sm:text-5xl font-bold text-center text-[#205c4b]">Team</h2>

                                    <p className="text-center text-sm sm:text-base text-gray-700 mt-2 max-w-2xl mx-auto">Meet our team: dedicated individuals driving innovation and collaboration.</p>

                                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                        {TEAM.map((s, idx) => (
                                            <div key={idx} className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center">
                                                <div className="w-28 h-28 rounded-full overflow-hidden">
                                                    <Image src={s.src} alt={s.alt} width={280} height={280} className="w-full h-full object-cover" />
                                                </div>
                                                <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.name}</h3>
                                                <p className="mt-1 text-sm text-gray-600">{s.title}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>
        </div>
    )
}