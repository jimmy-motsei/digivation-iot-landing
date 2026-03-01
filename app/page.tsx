import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ProblemSection from '@/components/ProblemSection'
import ModulesSection from '@/components/ModulesSection'
import ConnectivitySection from '@/components/ConnectivitySection'
import OutcomesSection from '@/components/OutcomesSection'
import RoadmapSection from '@/components/RoadmapSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <ProblemSection />
      <ModulesSection />
      <ConnectivitySection />
      <OutcomesSection />
      <RoadmapSection />
      <ContactSection />
      <Footer />
    </>
  )
}
