import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ProblemSection from '@/components/ProblemSection'
import ForBusinessSection from '@/components/ForBusinessSection'
import ForCreatorsSection from '@/components/ForCreatorsSection'
import WhyKringPSection from '@/components/WhyKringPSection'
import VisionSection from '@/components/VisionSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ForBusinessSection />
      <ForCreatorsSection />
      <WhyKringPSection />
      <VisionSection />
      <Footer />
    </main>
  )
}