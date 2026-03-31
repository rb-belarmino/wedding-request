'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative w-full h-dvh flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/fotos/igreja.jpg"
          alt="Rodrigo e Jéssica"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Overlay escuro para destacar o texto */}
        <div className="absolute inset-0 bg-black/10 bg-linear-to-t from-black/60 to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="font-serif text-5xl md:text-7xl text-[#FDFBF7] drop-shadow-lg leading-tight">
          O início do
          <br />
          nosso para sempre
        </h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 text-white/90 flex flex-col items-center animate-bounce"
        >
          <span className="text-xs md:text-sm tracking-[0.2em] uppercase font-light">
            Role para baixo
          </span>
          <svg
            className="w-5 h-5 mt-3 opacity-80"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
