import CommunityPartnersPageContent from "@/app/components/CommunityPatners";
import Navbar from "../components/Navbar";

export const metadata = {
    title: "Community Partner - DevFest Raipur 2025",
    description: "Meet the passionate community partners behind DevFest Raipur 2025 — collaborating to empower developers, inspire innovation, and make this year’s event an unforgettable experience for the tech community.",
    keywords: "DevFest community, GDG Raipur Community, Event Organizers, Community Leaders, Community Partners",
}

export default function CommunityPartnersPage() {
    return (
        <main className="relative">
            <Navbar />
            <CommunityPartnersPageContent />
        </main>
    )
}