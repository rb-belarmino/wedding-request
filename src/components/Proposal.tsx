"use client";

import { motion } from "framer-motion";

export default function Proposal() {
  return (
    <section className="py-32 px-6 bg-linear-to-b from-background to-pink-light/60 min-h-[85vh] flex items-center justify-center text-center relative overflow-hidden">
      {/* Efeito de brilho em volta */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white opacity-40 blur-[100px] rounded-full pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <span className="text-gold tracking-[0.3em] text-sm uppercase font-bold mb-6 block">O Pedido</span>
        <h1 className="font-serif text-5xl md:text-7xl text-foreground leading-[1.2] mb-12">
          Jéssica,<br/>
          você aceita casar comigo e formar uma família sob a benção de Deus?
        </h1>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <button 
            onClick={() => alert(`Que Deus abençoe essa união infinitamente! 🎉💍`)} 
            className="group relative px-12 py-5 bg-gold hover:bg-[#c49f2b] text-white rounded-full font-bold uppercase tracking-[0.2em] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
          >
            <span className="relative z-10">Sim, eu aceito!</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
