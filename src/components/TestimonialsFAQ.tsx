import React, { useState } from 'react';
import { Star, MessageCircle, HelpCircle, ChevronDown, ChevronUp, Quote } from 'lucide-react';
import { FAQS, createWhatsAppLink } from '../data/companyData';

export const TestimonialsFAQ: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const testimonials = [
    {
      name: 'Carlos Eduardo Mendes',
      role: 'Gerente de Manutenção Industrial',
      company: 'Indústria & Usina Sucroalcooleira - Santa Helena de Goiás',
      content: 'Contratamos a Teixeira Munck para a troca de um transformador de 7 toneladas e montagem de tubulações de vapor na safra. Equipe muito pontual, munck com laudos rigorosos e operador que conhece o padrão de segurança da usina.',
      rating: 5,
      date: 'Cliente há 3 anos'
    },
    {
      name: 'Marcelo Rezende Fontes',
      role: 'Produtor Rural & Engenheiro Agrônomo',
      company: 'Fazenda Santa Maria - Região de Turvelândia / Santa Helena',
      content: 'Nossa colheitadeira quebrou o eixo no meio da colheita de soja. O caminhão traçado da Teixeira entrou na terra fofa sem problemas, içou a plataforma com precisão e nos economizou dias de atraso na colheita.',
      rating: 5,
      date: 'Safra 2025/2026'
    },
    {
      name: 'Valter Silva Guimarães',
      role: 'Construtor Civil & Montador Metálico',
      company: 'Estruturas & Galpões Pré-Moldados - Rio Verde / Santa Helena',
      content: 'Excelente atendimento! Montamos um galpão graneleiro de 1.800m² em Santa Helena de Goiás. O operador possui controle remoto moderno, o que agilizou o assentamento das tesouras metálicas sem risco para a equipe.',
      rating: 5,
      date: 'Parceiro Frequente'
    },
    {
      name: 'Rogério de Souza',
      role: 'Motorista Carreteiro Bitrem',
      company: 'Transportadora de Grãos - Resgate na GO-210',
      content: 'Tive um problema na suspensão na rodovia GO-210 perto da entrada de Santa Helena de Goiás às 23h. O plantão 24h de auto socorro atendeu no WhatsApp na hora e o guincho chegou rápido. Recomendo demais!',
      rating: 5,
      date: 'Atendimento Plantão 24h'
    }
  ];

  return (
    <section className="py-20 bg-slate-950 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials Block */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase font-extrabold text-amber-400 tracking-wider bg-amber-500/15 border border-amber-500/30 px-3.5 py-1 rounded-full">
              Depoimentos de Quem Confia
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mt-3">
              Reconhecimento de <span className="text-amber-400">Clientes &amp; Parceiros</span>
            </h2>
            <p className="mt-2 text-slate-300 text-sm">
              Veja a opinião de engenheiros, produtores rurais e motoristas atendidos pela Teixeira Munck no Sudoeste Goiano.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-slate-900/90 rounded-2xl p-6 sm:p-7 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                      {t.date}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                    "{t.content}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-white">{t.name}</h4>
                    <p className="text-xs text-amber-400 font-medium">{t.role}</p>
                    <p className="text-[11px] text-slate-400">{t.company}</p>
                  </div>
                  <Quote className="w-8 h-8 text-slate-700/60 shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase font-extrabold text-amber-400 tracking-wider bg-amber-500/15 border border-amber-500/30 px-3.5 py-1 rounded-full">
              Tire Suas Dúvidas
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mt-3">
              Perguntas Frequentes sobre Nossos Serviços
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-amber-400 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-amber-400 shrink-0" />
                      <span>{faq.q}</span>
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-amber-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick FAQ CTA */}
          <div className="mt-8 text-center bg-slate-900/50 p-6 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <h5 className="font-bold text-white text-sm">Tem outra pergunta específica sobre sua carga?</h5>
              <p className="text-xs text-slate-400">Nossa equipe de atendimento responde de imediato no WhatsApp.</p>
            </div>
            <a
              href={createWhatsAppLink('Olá! Tenho uma dúvida sobre locação de caminhão munck em Santa Helena de Goiás.')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 shrink-0 transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>Perguntar no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
