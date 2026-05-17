import { motion } from 'motion/react';
import { Target, Users, Key, Zap } from 'lucide-react';

export default function Pillars() {
  const pillars = [
    {
      title: "Private Brotherhood",
      desc: "A trusted circle of driven men who hold higher standards and support honest growth.",
      icon: Users
    },
    {
      title: "Weekly Coaching",
      desc: "Guided sessions, exercises, and conversations led by Jay to turn insight into action.",
      icon: Target
    },
    {
      title: "Influence & Communication",
      desc: "Training around presence, body language, confidence, leadership, and authentic connection.",
      icon: Zap
    },
    {
      title: "Exclusive Resources",
      desc: "Frameworks, events, community touchpoints, and member-only opportunities as the ecosystem expands.",
      icon: Key
    }
  ];

  return (
    <section id="inside" className="py-32 relative bg-[#030303] z-10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                The Three Pillars: <br/>
                <span className="text-gradient-red italic">Brotherhood, Blessings, Breakthroughs.</span>
              </h2>
              <div className="h-px w-24 bg-red-900 my-8" />
              <p className="text-gray-400 text-lg leading-relaxed">
                Lion's Den combines live mentorship, peer accountability, practical influence training, and a private network designed to help men move faster with more clarity.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-glass p-8 rounded-2xl hover:border-red-900/50 transition-colors group"
              >
                <div className="h-12 w-12 rounded-full bg-red-950/40 border border-red-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <pillar.icon className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="font-serif text-xl text-white mb-3 tracking-wide">{pillar.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
