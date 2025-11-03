
import React from 'react';

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-brand-gold bg-brand-gold/10 p-1.5 rounded-full">
        <path d="M20 6 9 17l-5-5"></path>
    </svg>
);


const About: React.FC = () => {
  return (
    <section id="o-mnie" className="py-20 md:py-32 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          
          <div className="lg:col-span-2">
            <div className="rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img 
                src="/Gemini_Generated_Image_1mle4l1mle4l1mle.png"
                alt="Ryszard Frelich" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-brand-gold text-base font-semibold mb-3 tracking-wider uppercase">O Mnie</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6 leading-tight">
              Ryszard Frelich – Twój Partner w Bezpieczeństwie
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed border-l-4 border-brand-gold pl-6">
              Z wieloletnim doświadczeniem w branży, pomagam firmom tworzyć bezpieczne i zgodne z przepisami środowisko pracy.
            </p>
            <p className="text-gray-700 mb-10 leading-relaxed">
               Moja misja to nie tylko spełnienie wymogów prawnych, ale realne podniesienie świadomości i kultury bezpieczeństwa w każdej organizacji, z którą współpracuję. Wierzę, że prewencja i edukacja to klucz do minimalizowania ryzyka i ochrony najcenniejszego kapitału – Twoich pracowników.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0"><CheckIcon/></div>
                    <div>
                        <h3 className="font-bold text-lg text-brand-dark mb-1">Indywidualne Podejście</h3>
                        <p className="text-gray-600 text-sm">Dopasowuję strategie i szkolenia do unikalnych potrzeb Twojej organizacji.</p>
                    </div>
                </div>
                 <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0"><CheckIcon/></div>
                    <div>
                        <h3 className="font-bold text-lg text-brand-dark mb-1">Aktualna Wiedza</h3>
                        <p className="text-gray-600 text-sm">Zapewniam usługi na najwyższym poziomie, zgodne z najnowszymi przepisami.</p>
                    </div>
                </div>
                 <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0"><CheckIcon/></div>
                    <div>
                        <h3 className="font-bold text-lg text-brand-dark mb-1">Praktyczne Metody</h3>
                        <p className="text-gray-600 text-sm">Skupiam się na angażujących szkoleniach, które przynoszą realne rezultaty.</p>
                    </div>
                </div>
                 <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0"><CheckIcon/></div>
                    <div>
                        <h3 className="font-bold text-lg text-brand-dark mb-1">Partnerstwo i Zaufanie</h3>
                        <p className="text-gray-600 text-sm">Buduję długofalowe relacje oparte na zaufaniu, przejrzystości i wspólnym celu.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;