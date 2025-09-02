import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Timeline from '@/components/Timeline';
import ComingSoon from '@/components/ComingSoon';
import Gallery from '@/components/Gallery';

export default function Home() {
  return (
    <main className="min-h-screen section-smooth">
      <Navigation />
      <Hero />
      <About />
      <Timeline />
      <Gallery />
      <ComingSoon />
    </main>
  );
}
