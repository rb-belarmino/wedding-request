'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import imgCasaMae from '../../public/fotos/casa_mae.jpg'
import imgEstreja from '../../public/fotos/estreja.jpg'
import imgShopping from '../../public/fotos/shopping.jpg'

export default function Proposal() {
  return (
    <section className="py-24 px-6 md:py-32 bg-linear-to-b from-background to-pink-light/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-gold tracking-[0.3em] text-sm uppercase font-bold mb-4 block">
            Nossa História
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
            Momentos Inesquecíveis
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
          {/* Imagem Principal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-7 rounded-3xl overflow-hidden shadow-2xl group flex items-start"
          >
            <Image
              src={imgCasaMae}
              alt="Casal no sofá com um cachorro"
              className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          {/* Menores */}
          <div className="md:col-span-5 grid grid-cols-2 md:grid-cols-1 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="rounded-3xl overflow-hidden shadow-xl group flex items-start"
            >
              <Image
                src={imgEstreja}
                alt="Casal no café"
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="rounded-3xl overflow-hidden shadow-xl group flex items-start"
            >
              <Image
                src={imgShopping}
                alt="Alianças"
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
