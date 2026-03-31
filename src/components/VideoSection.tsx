'use client'

import { motion } from 'framer-motion'
import { useRef, useState } from 'react'

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
      
      // Maximize the video only on mobile devices (width < 768px)
      if (window.innerWidth < 768) {
        const videoElement = videoRef.current as any
        if (videoElement.requestFullscreen) {
          videoElement.requestFullscreen().catch((err: any) => console.log(err))
        } else if (videoElement.webkitRequestFullscreen) {
          videoElement.webkitRequestFullscreen() /* Safari */
        } else if (videoElement.webkitEnterFullscreen) {
          videoElement.webkitEnterFullscreen() /* iOS Safari fallback */
        }
      }
    }
  }

  const handleEnded = () => {
    setIsPlaying(false)
    
    // Minimize the video only on mobile devices (width < 768px)
    if (window.innerWidth < 768) {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch((err: any) => console.log(err))
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen() /* Safari */
      } else if (videoRef.current) {
        const videoElement = videoRef.current as any
        if (videoElement.webkitExitFullscreen) {
          videoElement.webkitExitFullscreen() /* iOS Safari fallback */
        }
      }
    }
  }

  return (
    <section className="py-32 bg-background px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6 leading-tight">
          Alguém muito especial tem um recado importante para a mamãe...
        </h2>
        <div className="h-[2px] w-16 bg-gold mx-auto mt-6 mb-16 rounded-full"></div>

        <div className="relative w-full aspect-9/16 md:aspect-video rounded-3xl md:rounded-4xl overflow-hidden shadow-2xl border-4 border-white group cursor-pointer transition-transform hover:scale-[1.02] duration-500">
          <video
            ref={videoRef}
            src="/lolinha.mp4"
            className="w-full h-full object-cover object-center"
            playsInline
            controls={isPlaying}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={handleEnded}
          />
          {!isPlaying && (
            <div
              className="absolute inset-0 bg-black/30 flex items-center justify-center transition-colors group-hover:bg-black/20"
              onClick={handlePlay}
            >
              <button className="w-20 h-20 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-white/60">
                <svg
                  className="w-10 h-10 ml-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          )}
        </div>
        {!isPlaying && (
          <p className="mt-6 text-sm text-gray-400 tracking-wide font-light">
            (Clique no vídeo para assistir)
          </p>
        )}
      </motion.div>
    </section>
  )
}
