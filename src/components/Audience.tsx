import { motion } from 'motion/react';

export default function Audience() {
  const audiences = [
    {
      num: "01",
      title: "Founders & Operators",
      desc: "Men carrying responsibility who need sharper thinking, stronger presence, and higher-level peers."
    },
    {
      num: "02",
      title: "Growth-Minded Professionals",
      desc: "Men who know success is not just strategy. It is communication, identity, discipline, and environment."
    },
    {
      num: "03",
      title: "Leaders Rebuilding Momentum",
      desc: "Men ready to get clear, be challenged, and move with more intention in business, family, and legacy."
    }
  ];

  return (
    <section className="py-32 bg-[#050505] relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
           <span className="font-serif uppercase tracking-[0.2em] text-red-600 text-sm mb-4 block">Who it is for</span>
           <h2 className="font-serif text-3xl md:text-5xl text-white max-w-3xl mx-auto leading-tight">
             For ambitious men who value <span className="italic text-gray-400">the room they are in.</span>
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {audiences.map((audience, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="relative"
            >
              <div className="font-serif text-8xl font-black text-white/5 absolute -top-12 -left-6 select-none leading-none">
                {audience.num}
              </div>
              <div className="relative z-10 pt-4">
                <div className="h-px w-full bg-gradient-to-r from-red-900/50 to-transparent mb-6" />
                <h3 className="font-serif text-2xl text-white mb-4 tracking-wide">{audience.title}</h3>
                <p className="text-gray-400 leading-relaxed font-light">
                  {audience.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
