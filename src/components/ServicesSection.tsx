import React from 'react';
import { Truck, Anchor, Building2, Wheat, ShieldAlert, ArrowUpCircle, CheckCircle, MessageCircle, ChevronRight, Zap } from 'lucide-react';
import { SERVICES_LIST, createWhatsAppLink } from '../data/companyData';

interface ServicesSectionProps {
  onSelectServiceForQuote?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Truck':
        return <Truck className="w-6 h-6" />;
      case 'Anchor':
        return <Anchor className="w-6 h-6" />;
      case 'Building2':
        return <Building2 className="w-6 h-6" />;
      case 'Wheat':
        return <Wheat className="w-6 h-6" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6" />;
      case 'ArrowUpCircle':
        return <ArrowUpCircle className="w-6 h-6" />;
      default:
        return <Truck className="w-6 h-6" />;
    }
  };

  return (
    <section id="servicos" className="py-20 bg-slate-950 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 text-amber-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Nossos Serviços Especializados</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
            Soluções em Munck, Içamentos &amp; <span className="text-amber-400">Socorro Rodoviário</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Equipamentos de alta tecnologia operados por profissionais qualificados para garantir a integridade da sua carga, agilidade nas obras e socorro emergencial 24 horas.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              className={`bg-slate-900 rounded-2xl p-7 border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${
                service.id === 'auto-socorro-guincho'
                  ? 'border-red-500/40 hover:border-red-500 shadow-lg shadow-red-950/20'
                  : 'border-slate-800 hover:border-amber-500/60 shadow-xl'
              }`}
            >
              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center font-bold ${
                      service.id === 'auto-socorro-guincho'
                        ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                        : 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                    }`}
                  >
                    {getIcon(service.iconName)}
                  </div>

                  {service.badge && (
                    <span
                      className={`text-[11px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider ${
                        service.badge.includes('24h')
                          ? 'bg-red-500 text-white animate-pulse'
                          : 'bg-amber-500 text-slate-950'
                      }`}
                    >
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Title & Desc */}
                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {service.shortDesc}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6 text-xs text-slate-300">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Equipment recommendation & WhatsApp CTA */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <div className="text-[11px] text-slate-400 bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
                  <span className="text-amber-400 font-bold block mb-0.5">Equipamento Sugerido:</span>
                  <span>{service.equipmentRecommended}</span>
                </div>

                <a
                  href={createWhatsAppLink(service.whatsappMessage, service.id === 'auto-socorro-guincho')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full font-extrabold py-3 px-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md ${
                    service.id === 'auto-socorro-guincho'
                      ? 'bg-red-600 hover:bg-red-500 text-white shadow-red-950/40'
                      : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-950/40'
                  }`}
                >
                  <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                  <span>Cotar este Serviço no WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
