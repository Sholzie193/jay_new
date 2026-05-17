import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#2a0202] via-[#050505] to-[#050505] opacity-80" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-screen pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-4 mb-6 opacity-80">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-red-600" />
            <span className="font-serif uppercase tracking-[0.3em] text-red-500 text-sm">Mentorship</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-red-600" />
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl flex flex-col items-center leading-none tracking-tight">
            <span className="text-gradient">Lion's Den</span>
          </h1>
          <p className="font-serif uppercase tracking-[0.2em] text-sm md:text-base mt-6 text-gray-400">
            Brotherhood <span className="text-red-700 mx-2">•</span> Breakthroughs <span className="text-red-700 mx-2">•</span> Blessings
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto mt-12"
        >
          <p className="text-xl md:text-3xl font-light text-gray-300 leading-relaxed">
            A private brotherhood for men building their <span className="italic text-white font-serif">next chapter.</span>
          </p>
          <p className="mt-8 text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Led by Jay Dhahan, Lion's Den brings live mentorship, accountability, and high-standard conversations for ambitious men ready to grow in business, leadership, and life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 flex flex-col sm:flex-row gap-6"
        >
          <a href="#apply" className="btn-primary px-8 py-4 flex items-center justify-center gap-2 group">
            Request Access
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#inside" className="btn-secondary px-8 py-4 flex items-center justify-center">
            See What's Inside
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" />
      </motion.div>
    </section>
  );
}
