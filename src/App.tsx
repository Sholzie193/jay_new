import Hero from './components/Hero';
import Pillars from './components/Pillars';
import Audience from './components/Audience';
import Process from './components/Process';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-red-900/50">
      <Hero />
      <Pillars />
      <Audience />
      <Process />
      <Footer />
    </div>
  );
}
