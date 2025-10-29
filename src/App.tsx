import { Toaster } from './components/ui/sonner';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { RoomsSection } from './components/RoomsSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { JourneySection } from './components/JourneySection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ShareProvider } from './components/share/ShareContext';
import { EnhancedShareDialog } from './components/share/EnhancedShareDialog';

export default function App() {
  return (
    <ShareProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <RoomsSection />
          <WhyChooseUsSection />
          <JourneySection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <Footer />
        <Toaster position="top-right" />
        <EnhancedShareDialog />
      </div>
    </ShareProvider>
  );
}