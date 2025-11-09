import Navbar from '../components/Navbar'
import TeamPageContent from '../components/Team'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Team - DevFest Raipur 2025",
    description: "Meet the dedicated team behind DevFest Raipur 2025, working tirelessly to create an amazing experience for developers and tech enthusiasts.",
    keywords: "DevFest Team, GDG Raipur Team, Event Organizers, Community Leaders",
    openGraph: {
        title: "Team - DevFest Raipur 2025",
        description: "Meet the dedicated team behind DevFest Raipur 2025, working tirelessly to create an amazing experience for developers and tech enthusiasts.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Team - DevFest Raipur 2025",
        description: "Meet the dedicated team behind DevFest Raipur 2025, working tirelessly to create an amazing experience for developers and tech enthusiasts.",
    },
}

export default function TeamPage() {
    return (
        <main className='relative'>
            <Navbar />
            <TeamPageContent />
        </main>
    )
}