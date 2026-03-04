'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react'

interface Certificate {
  title: string
  issuer: string
  thumbnail: string
  fileUrl: string
  isPdf: boolean
}

const certificates: Certificate[] = [
  { title: 'Alibaba Cloud Certified Developer', issuer: 'Alibaba Cloud', thumbnail: '/sertifikat hafsah/alibaba.jpg', fileUrl: '/sertifikat hafsah/alibaba.jpg', isPdf: false },
  { title: 'Competitive Programming Basic Training', issuer: 'CPC UPI', thumbnail: '/sertifikat hafsah/cpc.png', fileUrl: '/sertifikat hafsah/cpc.png', isPdf: false },
  { title: 'Participant of GEMASTIK XVIII', issuer: 'KEMDIKBUDRISTEK', thumbnail: '/sertifikat hafsah/gemastik.png', fileUrl: '/sertifikat hafsah/gemastik.png', isPdf: false },
  { title: 'Participant Indie Game Ignite COMPFEST 16', issuer: 'COMPFEST', thumbnail: '/sertifikat hafsah/compfest.png', fileUrl: '/sertifikat hafsah/compfest.png', isPdf: false },
  { title: 'IT Staff & Web Developer P2M', issuer: 'KEMAKOM UPI', thumbnail: '/sertifikat hafsah/p2m.png', fileUrl: '/sertifikat hafsah/p2m.png', isPdf: false },
  { title: 'Graphic Design Staff PARAMPA', issuer: 'BEM KEMA FPMIPA UPI', thumbnail: '/sertifikat hafsah/parampa.png', fileUrl: '/sertifikat hafsah/parampa.png', isPdf: false },
  { title: 'Graphic Design Staff Dinamik 19', issuer: 'KEMAKOM UPI', thumbnail: '/sertifikat hafsah/dinamik 19.png', fileUrl: '/sertifikat hafsah/dinamik 19.png', isPdf: false },
  { title: 'General Treasurer A-Storia', issuer: 'KEMAKOM UPI', thumbnail: '/sertifikat hafsah/astoria.png', fileUrl: '/sertifikat hafsah/astoria.png', isPdf: false },
  { title: 'Entrepreneurship Training', issuer: 'FPMIPA UPI', thumbnail: '/sertifikat hafsah/pelatihan kewirausahaan.png', fileUrl: '/sertifikat hafsah/pelatihan kewirausahaan.png', isPdf: false },
  { title: 'Bina Kader Tutorial PAI', issuer: 'Tutorial PAI-SPAI UPI', thumbnail: '/sertifikat hafsah/binder.png', fileUrl: '/sertifikat hafsah/binder.png', isPdf: false },
  { title: 'Arkavidia Participant', issuer: 'ITB', thumbnail: '/sertifikat hafsah/arkavidia.png', fileUrl: '/sertifikat hafsah/arkavidia.png', isPdf: false },
  { title: 'PKM RSH Team', issuer: 'KEMDIKBUDRISTEK', thumbnail: '/sertifikat hafsah/pkm rsh.png', fileUrl: '/sertifikat hafsah/pkmrsh.png', isPdf: false },
]

export function CertificateSlider() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener('resize', checkScroll)
    return () => window.removeEventListener('resize', checkScroll)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      const newScrollLeft =
        direction === 'left'
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      })

      setTimeout(checkScroll, 300)
    }
  }

  return (
    <section className="py-24 px-6 md:px-12 bg-foreground/[0.01]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="space-y-4 text-center mb-16">
          <div className="inline-flex items-center gap-2 text-primary uppercase tracking-[0.3em] text-xs font-bold">
            <span className="w-12 h-px bg-primary/30" />
            Showcase
          </div>
          <h3 className="text-3xl md:text-5xl font-serif text-amber-900 dark:text-amber-50">
            Certificates & Achievements
          </h3>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Professional certifications, recognitions, and volunteer contributions
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Left Navigation Button */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 p-3 rounded-full glass-panel border-none shadow-xl hover:scale-110 transition-transform duration-300 group"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-primary group-hover:text-primary transition-colors" />
            </button>
          )}

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="overflow-x-auto scroll-smooth scrollbar-hide"
            style={{ 
              WebkitOverflowScrolling: 'touch',
              willChange: 'scroll-position'
            }}
          >
            <div className="flex gap-6 pb-4 min-w-min px-2">
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex-shrink-0 w-80 group cursor-pointer"
                  onClick={() => setSelectedCertificate(cert)}
                >
                  {/* Certificate Card */}
                  <div 
                    className="relative h-64 rounded-2xl overflow-hidden glass-panel border-none shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                    style={{ willChange: 'transform' }}
                  >
                    {/* Image */}
                    <Image
                      src={cert.thumbnail}
                      alt={cert.title}
                      fill
                      quality={60}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 320px"
                      loading="lazy"
                      className="object-cover transition-opacity duration-300 group-hover:opacity-80 pointer-events-none"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />

                    {/* Hover Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="p-3 rounded-full bg-background/95 backdrop-blur-sm shadow-lg">
                        <ZoomIn className="w-6 h-6 text-primary" />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h4 className="font-serif font-bold text-sm line-clamp-2 mb-1.5 text-white">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-slate-300 uppercase tracking-wider">{cert.issuer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Navigation Button */}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 p-3 rounded-full glass-panel border-none shadow-xl hover:scale-110 transition-transform duration-300 group"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-primary group-hover:text-primary transition-colors" />
            </button>
          )}
        </div>

        {/* Certificate Count */}
        <div className="mt-12 text-center">
          <p className="text-xs text-muted-foreground uppercase tracking-[0.2em]">
            {certificates.length} certificates and achievements
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedCertificate(null)}
        >
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute -top-12 right-0 p-2.5 rounded-full glass-panel border-none shadow-lg hover:scale-110 transition-transform duration-300 group"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
            </button>

            {/* Image Container */}
            <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden glass-panel border-none shadow-2xl">
              <Image
                src={selectedCertificate.fileUrl}
                alt={selectedCertificate.title}
                fill
                quality={85}
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
                className="object-contain pointer-events-none"
              />
            </div>

            {/* Certificate Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/95 via-slate-900/80 to-transparent p-6 rounded-b-2xl">
              <h3 className="text-xl md:text-2xl font-serif font-bold mb-2 text-white">
                {selectedCertificate.title}
              </h3>
              <p className="text-sm text-slate-300 uppercase tracking-wider">{selectedCertificate.issuer}</p>
            </div>
          </motion.div>
        </div>
      )}

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
