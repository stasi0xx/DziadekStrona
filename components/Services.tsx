import React from 'react';

// Fix: Replaced JSX.Element with React.ReactNode to resolve TypeScript error "Cannot find namespace 'JSX'".
const ServiceCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
    <div className="text-brand-gold mb-4">
        {icon}
    </div>
    <h3 className="text-2xl font-bold font-serif mb-3 text-brand-dark">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const BookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
);

const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
);

const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
);

const Services: React.FC = () => {
  const services = [
    {
      title: 'Szkolenia wstępne',
      description: 'Niezbędne szkolenie dla nowo zatrudnionych pracowników, zapewniające podstawową wiedzę o zasadach BHP na danym stanowisku.',
      icon: <BookIcon />,
    },
    {
      title: 'Szkolenia okresowe',
      description: 'Regularne kursy aktualizujące i utrwalające wiedzę z zakresu BHP, obowiązkowe dla wszystkich pracowników.',
      icon: <UsersIcon />,
    },
    {
      title: 'Ocena ryzyka zawodowego',
      description: 'Kompleksowa analiza i dokumentacja zagrożeń na stanowiskach pracy, kluczowa dla prewencji wypadkowej.',
      icon: <ShieldIcon />,
    },
  ];

  return (
    <section id="uslugi" className="py-20 md:py-32 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark">Zakres Usług</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Oferuję kompleksowe wsparcie w zakresie bezpieczeństwa i higieny pracy.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;