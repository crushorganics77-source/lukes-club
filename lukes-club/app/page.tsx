import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Gallery from '@/components/Gallery'
import Memberships from '@/components/Memberships'
import Reviews from '@/components/Reviews'
import VideoSection from '@/components/VideoSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Memberships />
      <Reviews />
      <VideoSection />
      <Footer />
    </main>
  )
}
