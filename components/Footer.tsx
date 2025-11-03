
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-gray-700">
      <div className="container mx-auto px-6 py-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Ryszard Frelich - Szkolenia BHP. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
};

export default Footer;
