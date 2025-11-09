import HAckathonPageContent from '@/app/components/HackathonPage';
import Navbar from '../components/Navbar';

export default function HackathonPage () {
    return (
        <main className='relative'>
            <Navbar />
            <HAckathonPageContent />
        </main>
    )
}