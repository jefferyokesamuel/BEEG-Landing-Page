
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Mission from '@/components/sections/Mission';
import OurModel from '@/components/sections/OurModel';
import Projects from '@/components/sections/Projects';
import TokenSection from '@/components/sections/TokenSection';
import Documents from '@/components/sections/Documents';
import GetInvolved from '@/components/sections/GetInvolved';
import Team from '@/components/sections/Team';
import News from '@/components/sections/News';
import Footer from '@/components/sections/Footer';
import { AboutUs } from '@/components/sections/AboutUs';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <div id="mission">
        <Mission />
      </div>
      <div id="model">
        <OurModel />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="token">
        <TokenSection />
      </div>
      <div id="documents">
        <Documents />
      </div>
      <div id="news">
        <News />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
