import { Button } from '@/components/ui/button';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const navItems = [
    { label: 'Mission', href: '#mission' },
    { label: 'Our Model', href: '#model' },
    { label: 'Projects', href: '#projects' },
    { label: 'Token', href: '#token' },
    { label: 'Documents', href: '#documents' },
    { label: 'Team', href: '#team' },
    { label: 'News', href: '#news' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1A1C1E] text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          <div>
            <h3 className="text-xl font-bold text-[#FFD600] mb-2">BEEG Energy</h3>
            <p className="text-gray-400 text-sm max-w-md">
              Powering Africa's Clean Energy Future through innovative Virtual Power Plants and tokenized carbon credits.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6">
            {navItems.map(item => (
              <button 
                key={item.label}
                onClick={() => scrollToSection(item.href)} 
                className="text-gray-300 hover:text-[#FFD600] transition-colors text-sm"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 pt-6 border-t border-gray-700 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-[#FFD600] p-2">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-[#FFD600] p-2">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-[#FFD600] p-2">
              <Instagram className="h-4 w-4" />
            </Button>
          </div>
          
          <p className="text-xs text-gray-500">© 2025 BEEG Energy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
