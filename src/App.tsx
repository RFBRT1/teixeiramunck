import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PhotoGallery } from './components/PhotoGallery';
import { ServicesSection } from './components/ServicesSection';
import { ReachCalculator } from './components/ReachCalculator';
import { QuickQuoteForm } from './components/QuickQuoteForm';
import { CoverageSection } from './components/CoverageSection';
import { SafetyTrust } from './components/SafetyTrust';
import { TestimonialsFAQ } from './components/TestimonialsFAQ';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { X } from 'lucide-react';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string>('Locação de Caminhão Munck');

  const handleOpenQuoteModal = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForModal(serviceName);
    }
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950 font-sans antialiased">
      {/* Fixed / Sticky Navigation Header */}
      <Header onOpenQuoteModal={() => handleOpenQuoteModal()} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Section of Photos of Trucks Performing Lifts (Requested by user) */}
        <PhotoGallery />

        {/* Detailed Services Section */}
        <ServicesSection onSelectServiceForQuote={(srv) => handleOpenQuoteModal(srv)} />

        {/* Interactive Reach & Capacity Estimator */}
        <ReachCalculator />

        {/* Quick Service Request Form & WhatsApp Direct Quoter (Requested by user) */}
        <section className="bg-slate-900 py-12 border-b border-slate-800">
          <QuickQuoteForm defaultService={selectedServiceForModal} />
        </section>

        {/* Coverage Map: Santa Helena de Goiás and Surrounding Municipalities */}
        <CoverageSection />

        {/* Safety, Certifications & Trust Badges */}
        <SafetyTrust />

        {/* Testimonials from Clients & FAQ */}
        <TestimonialsFAQ />
      </main>

      {/* Comprehensive Footer with all contacts */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Full Modal for Quick Service Quote */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
          <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[95vh] flex flex-col">
            {/* Modal Close Button */}
            <button
              onClick={handleCloseQuoteModal}
              className="absolute top-4 right-4 z-20 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 p-2 rounded-xl transition-colors"
              aria-label="Fechar formulário"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="overflow-y-auto">
              <QuickQuoteForm
                isModal={true}
                onClose={handleCloseQuoteModal}
                defaultService={selectedServiceForModal}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
