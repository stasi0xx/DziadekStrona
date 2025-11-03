
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations shortly after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white text-center overflow-hidden">
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out ${isLoaded ? 'scale-100' : 'scale-105'}`} 
        style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}
      ></div>
      <div className="absolute inset-0 bg-brand-dark opacity-60"></div>
      <div className="relative z-10 px-6">
        <h1 className={`text-5xl md:text-7xl font-serif font-extrabold mb-4 leading-tight drop-shadow-md transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Profesjonalne Szkolenia BHP
        </h1>
        <p className={`text-lg md:text-2xl mb-8 max-w-3xl mx-auto font-light drop-shadow-sm transition-all duration-1000 ease-out delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Zapewnij bezpieczeństwo w swojej firmie z ekspertem. Twój sukces zaczyna się od bezpiecznego miejsca pracy.
        </p>
        <a href="#kontakt" className={`inline-block bg-brand-gold text-white font-bold py-3 px-8 rounded-md text-lg uppercase tracking-wider hover:bg-brand-gold-dark transition-all duration-1000 ease-out delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Skontaktuj się
        </a>
      </div>
    </section>
  );
};

export default Hero;
