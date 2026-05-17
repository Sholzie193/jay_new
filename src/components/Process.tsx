import { motion } from 'motion/react';

export default function Process() {
  return (
    <section id="how" className="py-32 relative bg-[#030303]">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="sticky top-32"
            >
              <span className="font-serif uppercase tracking-[0.2em] text-red-600 text-sm mb-4 block">How it works</span>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-8">
                Simple <span className="italic text-gray-500">Next Steps.</span>
              </h2>
              <p className="text-gray-400 text-lg mb-12">
                Built for men who are done growing alone. A private environment for growth, not another noisy online group.
              </p>
              
              <a href="#apply" className="btn-primary px-8 py-4 inline-flex items-center justify-center w-full sm:w-auto">
                Join the List
              </a>
            </motion.div>
          </div>

          <div className="space-y-16">
            {[
              { title: "Request Access", desc: "Submit your details so Jay's team knows you are interested." },
              { title: "Get the Invite", desc: "Receive next-step details for the community, events, or application flow." },
              { title: "Enter the Room", desc: "Join the conversations, coaching, and accountability designed to create momentum." }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative pl-12"
              >
                {/* Timeline Line */}
                <div className="absolute left-[11px] top-10 bottom-[-64px] w-px bg-white/10 hidden md:block" />
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full border border-red-800 bg-[#030303] flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-red-600" />
                </div>
                
                <span className="font-serif text-sm text-red-500 mb-2 block tracking-widest uppercase">Phase 0{i + 1}</span>
                <h3 className="font-serif text-2xl text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed font-light">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
