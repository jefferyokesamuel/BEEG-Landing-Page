
import { Button } from '@/components/ui/button';
import { ChevronRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#22513B] via-[#1A1C1E] to-[#22513B] text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <video className="absolute inset-0 w-full h-full object-cover opacity-70" src="/lovable-uploads/solar.mp4" autoPlay loop muted playsInline></video>

      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
          Powering Public Institutions with
          <span className="text-[#FFD600] block mt-1 sm:mt-2">Carbon-Backed Clean Energy</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Smart energy. Verra carbon credits. Tokenized impact.
        </p>
        
        <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12">
          <Button 
            size="lg" 
            className="bg-[#FFD600] text-[#1A1C1E] hover:bg-[#FFD600]/90 px-6 sm:px-8 py-3 text-sm sm:text-base lg:text-lg font-semibold w-full max-w-xs sm:max-w-none sm:w-auto"
            onClick={() => document.getElementById('model')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Our Model
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          
          <Button 
            variant="outline"
            size="lg" 
            className="border-white hover:bg-white text-[#1A1C1E] px-6 sm:px-8 py-3 text-sm sm:text-base lg:text-lg font-semibold w-full max-w-xs sm:max-w-none sm:w-auto"
            onClick={() => window.open('https://tally.so/r/wa187E', '_blank')}
          >
            <Play className="mr-2 h-4 w-4" />
            Join Our Low Carbon Economy
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
          <div className="text-center bg-black/20 rounded-lg p-4 sm:p-6 backdrop-blur-sm">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#FFD600] mb-1">50+</div>
            <div className="text-xs sm:text-sm text-gray-300">Projects Pipeline</div>
          </div>
          <div className="text-center bg-black/20 rounded-lg p-4 sm:p-6 backdrop-blur-sm">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#FFD600] mb-1">735K</div>
            <div className="text-xs sm:text-sm text-gray-300">VCUs Projected</div>
          </div>
          <div className="text-center bg-black/20 rounded-lg p-4 sm:p-6 backdrop-blur-sm">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#FFD600] mb-1">$205</div>
            <div className="text-xs sm:text-sm text-gray-300">Token Buyback Model</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
