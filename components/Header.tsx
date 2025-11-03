import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '#o-mnie', label: 'O Mnie' },
    { href: '#uslugi', label: 'Usługi' },
    { href: '#opinie', label: 'Opinie' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    
    if (!targetId) return;

    // Handle logo click to scroll to top
    if (targetId === '#home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      // Approximate header height in pixels to offset the scroll
      const headerOffset = 80; 
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" onClick={handleNavClick} className={`text-2xl font-serif font-bold transition-colors ${scrolled ? 'text-brand-dark' : 'text-white'}`}>
          Ryszard Frelich
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={handleNavClick} className={`text-sm font-medium tracking-wider uppercase transition-colors cursor-pointer ${scrolled ? 'text-brand-dark hover:text-brand-gold' : 'text-white hover:text-gray-200'}`}>
              {link.label}
            </a>
          ))}
        </nav>
        <button className="md:hidden">
          <svg className={`w-6 h-6 ${scrolled ? 'text-brand-dark' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </header>
  );
};

export default Header;