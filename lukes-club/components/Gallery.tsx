'use client'
import { useRef, useState, useEffect } from 'react'

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&q=80', alt: 'Luxury car' },
  { url: 'https://images.unsplash.com/photo-1555529669-2269763671c0?w=600&q=80', alt: 'Luxury store' },
  { url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', alt: 'Fine dining' },
  { url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80', alt: 'Luxury villa' },
  { url: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80', alt: 'Private jet' },
  { url: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80', alt: 'Luxury hotel' },
  { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', alt: 'Watch collection' },
  { url: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80', alt: 'Sneaker collection' },
]

const galleryImages2 = [
  { url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', alt: 'Mountain retreat' },
  { url: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80', alt: 'Gourmet food' },
  { url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', alt: 'Mountain lake' },
  { url: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80', alt: 'Travel first class' },
  { url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80', alt: 'Graduation event' },
  { url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80', alt: 'Tech setup' },
  { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', alt: 'Business portrait' },
  { url: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=600&q=80', alt: 'Business meeting' },
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
            style={{ width: '320px', height: '220px' }}
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
        <h2
          className="font-display font-light text-white"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
        >
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
