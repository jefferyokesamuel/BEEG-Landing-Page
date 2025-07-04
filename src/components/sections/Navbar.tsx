
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: 'Mission', href: '#mission' },
    { label: 'Our Model', href: '#model' },
    { label: 'Projects', href: '#projects' },
    { label: 'About Us', href: '#about' },
    { label: 'Token', href: '#token' },
    { label: 'Documents', href: '#documents' },
    { label: 'News', href: '#news' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-[#22513B]' : 'text-white'
            }`}>BEEG</span>
            <span className={`text-sm ml-2 transition-colors duration-300 ${
              isScrolled ? 'text-[#555555]' : 'text-gray-200'
            }`}>Energy</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`transition-colors font-large duration-300 ${
                  isScrolled 
                    ? 'text-[#555555] hover:text-[#22513B]' 
                    : 'text-gray-200 hover:text-[#FFD600]'
                }`}
              >
                {item.label}
              </button>
            ))}
         
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors duration-300 ${
                isScrolled 
                  ? 'text-[#22513B] hover:text-[#555555]' 
                  : 'text-white hover:text-[#FFD600]'
              }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden py-4 backdrop-blur-sm rounded-lg mt-2 ${
            isScrolled ? 'bg-white border border-gray-200' : 'bg-black/80'
          }`}>
            <div className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-left transition-colors font-medium py-2 duration-300 ${
                    isScrolled 
                      ? 'text-[#555555] hover:text-[#22513B]' 
                      : 'text-gray-200 hover:text-[#FFD600]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('#get-involved')}
                className="bg-[#FFD600] text-[#212121] hover:bg-[#FFD600]/90 font-semibold w-full mt-4"
              >
                Get Involved
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
