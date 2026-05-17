import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="apply" className="bg-[#000000] border-t border-red-900/30 pt-32 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#1a0000] via-[#000000] to-[#000000] opacity-60 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-red-900 to-red-950 border border-red-800 rounded-full flex items-center justify-center mb-8">
            <div className="w-8 h-8 flex items-center justify-center">
              <span className="font-serif font-bold text-white text-xl">L</span>
            </div>
          </div>
          
          <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">
            Request your invite <br/>
            <span className="italic text-gray-500">to Lion's Den.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            If the message resonates, submit your details. This is the natural next step to receive updates, invites, and access details as the community opens.
          </p>

          <form className="max-w-md mx-auto flex flex-col gap-4 mb-24" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4 text-white focus:outline-none focus:border-red-500 transition-colors font-light"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4 text-white focus:outline-none focus:border-red-500 transition-colors font-light"
            />
            <button className="btn-primary w-full py-4 mt-4 flex justify-center items-center gap-2 group">
              Submit Details
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-xs text-gray-600 mt-2">
              Share your details once. Jay's team will follow up when the next access window opens.
            </p>
          </form>
        </motion.div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-serif text-white tracking-[0.2em] uppercase text-sm">
            Lion's Den
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <span>Private mentoring.</span>
            <span>Clear standards.</span>
            <span>Better rooms.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
