'use client'

import { motion } from 'framer-motion'

export default function FaithSection() {
  return (
    <section className="py-28 bg-pink-light/30 px-6 relative flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="max-w-4xl mx-auto"
      >
        <svg
          className="w-10 h-10 text-gold mx-auto mb-10 opacity-70"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>

        <p className="font-serif text-2xl md:text-4xl italic leading-relaxed mb-8 px-4 text-gray-700">
          "Por essa razão, o homem deixará pai e mãe e se unirá à sua mulher, e
          eles se tornarão uma só carne."
        </p>
        <span className="block text-gold tracking-widest uppercase text-sm font-semibold mb-16">
          Gênesis 2:24
        </span>

        <p className="font-serif text-2xl md:text-4xl italic leading-relaxed mb-8 px-4 text-gray-700">
          "Assim, eles já não são dois, mas sim uma só carne. Portanto, o que
          Deus uniu, ninguém o separe."
        </p>
        <span className="block text-gold tracking-widest uppercase text-sm font-semibold mb-16">
          Mateus 19:6
        </span>
        <p className="font-serif text-2xl md:text-4xl italic leading-relaxed mb-8 px-4 text-gray-700">
          "Acima de tudo, porém, revistam-se do amor, que é o elo perfeito."
        </p>
        <span className="block text-gold tracking-widest uppercase text-sm font-semibold mb-16">
          Colossenses 3:14
        </span>
      </motion.div>
    </section>
  )
}
