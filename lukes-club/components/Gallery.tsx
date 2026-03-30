'use client'
import { useRef, useState, useEffect } from 'react'

const galleryImages = [
  { url: '/img1.jpg', alt: 'Santorini view' },
  { url: '/img2.jpg', alt: 'Luxury yacht' },
  { url: '/img3.jpg', alt: 'Luxury watch' },
  { url: '/img4.jpg', alt: 'Fine dining' },
  { url: '/img5.jpg', alt: 'Boat lifestyle' },
]

const galleryImages2 = [
  { url: '/img6.jpg', alt: 'Private jet' },
  { url: '/img7.jpg', alt: 'Ritz Carlton' },
  { url: '/img8.jpg', alt: 'Cartier store' },
  { url: '/img9.jpg', alt: 'Luxury cars' },
  { url: '/img4.jpg', alt: 'Fine dining' },
]

function GalleryRow({ images, direction }: { images: typeof galleryImages, direction: 'left' | 'right' }) {
  const doubled = [...images, ...images]
  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex gap-4 ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}
        style={{ width: 'max-content' }}
      >
        {doubled.map((img, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-2xl flex-shrink-0 group"
            style={{ width: '380px', height: '260px' }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url('${img.url}')` }}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Gallery() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="gallery" className="py-24 bg-black overflow-hidden" ref={ref}>
      <div
        className="transition-all duration-1000 mb-16 text-center"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)' }}
      >
        <span className="section-label block mb-4">Visual World</span>
        <h2 className="font-display font-light text-white" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>
          Gallery
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <GalleryRow images={galleryImages} direction="left" />
        <GalleryRow images={galleryImages2} direction="right" />
      </div>
    </section>
  )
}
