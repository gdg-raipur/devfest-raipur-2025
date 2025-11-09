import Navbar from '../components/Navbar'
import SpeakerPageContent from '../components/Speaker'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Speakers - DevFest Raipur 2025",
    description: "Meet our speakers at DevFest Raipur 2025: industry leaders, open source contributors, and community builders sharing their expertise on cutting-edge technologies.",
    keywords: "DevFest Speakers, Tech Speakers, Developer Advocates, GDG Speakers, Technology Leaders",
    openGraph: {
        title: "Speakers - DevFest Raipur 2025",
        description: "Meet our speakers at DevFest Raipur 2025: industry leaders, open source contributors, and community builders sharing their expertise on cutting-edge technologies.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Speakers - DevFest Raipur 2025",
        description: "Meet our speakers at DevFest Raipur 2025: industry leaders, open source contributors, and community builders sharing their expertise on cutting-edge technologies.",
    },
}

export default function SpeakersPage() {
    return (
        <main className='relative'>
            <Navbar />
            <SpeakerPageContent />
        </main>
    )
}