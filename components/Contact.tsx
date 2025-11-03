
import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., send to an API
        console.log('Form data submitted:', formData);
        setSubmitted(true);
    };

  return (
    <section id="kontakt" className="py-20 md:py-32 bg-brand-dark text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold">Skontaktuj się</h2>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">Masz pytania lub chcesz umówić się na szkolenie? Wypełnij formularz.</p>
        </div>
        
        <div className="max-w-2xl mx-auto">
            {submitted ? (
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-md text-center" role="alert">
                    <p className="font-bold">Dziękuję za wiadomość!</p>
                    <p>Skontaktuję się z Tobą najszybciej jak to możliwe.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Imię i nazwisko</label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            required 
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold" 
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Adres email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            required 
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold" 
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Wiadomość</label>
                        <textarea 
                            name="message" 
                            id="message" 
                            rows={5} 
                            required 
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold"
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="bg-brand-gold text-white font-bold py-3 px-12 rounded-md text-lg uppercase tracking-wider hover:bg-brand-gold-dark transition-colors duration-300">
                            Wyślij
                        </button>
                    </div>
                </form>
            )}
            <div className="mt-16 text-center text-gray-400">
                <p>Możesz także skontaktować się bezpośrednio:</p>
                <p className="mt-2">
                    <a href="mailto:kontakt@ryszardfrelich.pl" className="hover:text-brand-gold transition-colors">kontakt@ryszardfrelich.pl</a>
                    <span className="mx-3">|</span>
                    <a href="tel:+48123456789" className="hover:text-brand-gold transition-colors">+48 123 456 789</a>
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
