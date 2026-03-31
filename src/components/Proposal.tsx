"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
          {/* Imagem Principal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-7 relative aspect-4/5 md:aspect-square lg:aspect-4/3 rounded-3xl overflow-hidden shadow-2xl group"
          >
            <Image
              src="/fotos/couple_beach_1774986435944.png"
              alt="Casal na praia"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </motion.div>

          {/* Menores */}
          <div className="md:col-span-5 grid grid-cols-2 md:grid-cols-1 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative aspect-square md:aspect-4/3 rounded-3xl overflow-hidden shadow-xl group"
            >
              <Image
                src="/fotos/couple_cafe_1774986452559.png"
                alt="Casal no café"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 40vw"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative aspect-square md:aspect-4/3 rounded-3xl overflow-hidden shadow-xl group"
            >
              <Image
                src="/fotos/couple_hands_1774986467633.png"
                alt="Alianças"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 40vw"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
