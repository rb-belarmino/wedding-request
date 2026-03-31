'use client'

import { motion } from 'framer-motion'
import { title } from 'process'

const events = [
  {
    year: 'Faculdade',
    title: 'Alunos',
    description:
      'De início éramos apenas colegas de classe, mas Deus já tinha um plano para nós.'
  },
  {
    year: 'O Encontro',
    title: 'Amigos',
    description:
      'Tudo começou como uma linda amizade. Sorrisos sinceros e conversas que pareciam não ter fim nos conectaram.'
  },
  {
    year: 'O Sentimento',
    title: 'Aquele Instante',
    description:
      'Nossos olhares se cruzaram de maneira diferente. Foi quando percebemos que Deus já estava escrevendo a nossa história.'
  },
  {
    year: 'A Jornada',
    title: 'Construindo uma Vida',
    description:
      'Desde aquele momento, cada riso, cada abraço e até os desafios serviram para nos fortalecer ainda mais.'
  },
  {
    year: 'Hoje',
    title: 'O Propósito',
    description:
      'Chegou a hora de dar o nosso passo mais importante e transformar nossos sonhos na mais linda realidade.'
  }
]

export default function Timeline() {
  return (
    <section className="py-24 bg-background px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-foreground text-center">
            Nossa Trajetória
          </h2>
          <div className="h-[2px] w-16 bg-gold mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[2px] before:bg-linear-to-b before:from-gold before:via-pink-dry before:to-pink-light">
          {events.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group md:mx-auto w-full md:w-[85%]"
            >
              {/* Marcador Central */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-gold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10 absolute left-0 md:left-1/2">
                <div className="w-2.5 h-2.5 rounded-full bg-background" />
              </div>

              {/* Caixa de Texto */}
              <div className="w-[calc(100%-3.5rem)] md:w-[calc(50%-3rem)] ml-14 md:ml-0 p-8 rounded-3xl bg-white shadow-sm border border-pink-light/30 hover:shadow-md transition-shadow">
                <span className="text-gold font-bold tracking-[0.2em] text-xs uppercase block mb-2">
                  {item.year}
                </span>
                <h3 className="font-serif text-2xl text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
