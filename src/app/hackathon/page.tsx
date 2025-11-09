import HAckathonPageContent from '@/app/components/HackathonPage';
import Navbar from '../components/Navbar';
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Hackathon - DevFest Raipur 2025",
    description: "Participate in the DevFest Raipur 2025 Hackathon. Build innovative solutions, collaborate with talented developers, and win exciting prizes.",
    keywords: "DevFest Hackathon, Coding Competition, Developer Challenge, Tech Hackathon, GDG Hackathon",
    openGraph: {
        title: "Hackathon - DevFest Raipur 2025",
        description: "Participate in the DevFest Raipur 2025 Hackathon. Build innovative solutions, collaborate with talented developers, and win exciting prizes.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Hackathon - DevFest Raipur 2025",
        description: "Participate in the DevFest Raipur 2025 Hackathon. Build innovative solutions, collaborate with talented developers, and win exciting prizes.",
    },
}

export default function HackathonPage () {
    return (
        <main className='relative'>
            <Navbar />
            <HAckathonPageContent />
        </main>
    )
}