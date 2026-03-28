import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Gallery from '@/components/Gallery'
import Memberships from '@/components/Memberships'
import Reviews from '@/components/Reviews'
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
      <Footer />
    </main>
  )
}
