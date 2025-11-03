
import React from 'react';

// Keyframes for a seamless scroll based on duplicating content.
// The animation needs to move by 50% of the total width (which is 2 * original content width).
const animationKeyframes = `
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`;

const testimonialsData = [
    {
        quote: "Szkolenie przeprowadzone przez Pana Ryszarda było niezwykle merytoryczne i angażujące. Pełen profesjonalizm!",
        author: "Jan Kowalski",
        company: "CEO, BuildCorp S.A."
    },
    {
        quote: "Dzięki wdrożonym sugestiom znacząco poprawiliśmy bezpieczeństwo w naszym zakładzie produkcyjnym. Polecam!",
        author: "Anna Nowak",
        company: "Manager ds. Produkcji, Metalex Sp. z o.o."
    },
    {
        quote: "Kompleksowa obsługa i zawsze aktualna wiedza. Współpraca z Panem Ryszardem to czysta przyjemność i gwarancja spokoju.",
        author: "Piotr Wiśniewski",
        company: "Właściciel, LogiTrans"
    },
    {
        quote: "Profesjonalne podejście i ogromna wiedza praktyczna. Szkolenia, które realnie wpływają na kulturę bezpieczeństwa.",
        author: "Katarzyna Zielińska",
        company: "HR Manager, Creativio"
    },
    {
        quote: "Rzetelność, terminowość i doskonały kontakt. Pan Ryszard to ekspert, któremu można w pełni zaufać.",
        author: "Tomasz Wójcik",
        company: "Dyrektor Operacyjny, InnoTech"
    }
];


const QuoteIcon = () => (
    <svg className="w-12 h-12 text-brand-gold opacity-20" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
);


const TestimonialCard: React.FC<{ quote: string; author: string; company: string }> = ({ quote, author, company }) => (
  <figure className="relative bg-white p-8 rounded-lg shadow-lg text-center h-full flex flex-col justify-center">
    <QuoteIcon />
    <blockquote className="my-4 flex-grow">
      <p className="text-lg italic text-gray-700 whitespace-normal">"{quote}"</p>
    </blockquote>
    <figcaption className="mt-6">
      <div className="font-bold text-brand-dark">{author}</div>
      <div className="text-sm text-gray-500">{company}</div>
    </figcaption>
  </figure>
);

const Testimonials: React.FC = () => {
  // We need to double the data for a seamless infinite scroll effect
  const duplicatedTestimonials = [...testimonialsData, ...testimonialsData];

  return (
    <section id="opinie" className="py-20 md:py-32 bg-white overflow-hidden">
      <style>{animationKeyframes}</style>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark">Co Mówią Klienci</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Zaufanie i satysfakcja moich partnerów biznesowych to najlepsza rekomendacja.</p>
        </div>
      </div>
      
      <div 
          className="relative group w-full"
          aria-roledescription="carousel"
          aria-label="Opinie klientów"
      >
          <div 
              className="flex whitespace-nowrap group-hover:[animation-play-state:paused]"
              style={{ animation: `scroll ${testimonialsData.length * 8}s linear infinite` }}
          >
              {duplicatedTestimonials.map((testimonial, index) => (
                  <div 
                      className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-2" 
                      key={index}
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`${index % testimonialsData.length + 1} z ${testimonialsData.length}`}
                  >
                      <TestimonialCard {...testimonial} />
                  </div>
              ))}
          </div>
      </div>
    </section>
  );
};

export default Testimonials;
