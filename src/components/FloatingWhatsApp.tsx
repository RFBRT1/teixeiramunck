import React, { useState } from 'react';
import { MessageCircle, X, ChevronRight, Phone, Clock, FileText, AlertCircle } from 'lucide-react';
import { COMPANY_INFO, createWhatsAppLink } from '../data/companyData';

interface FloatingWhatsAppProps {
  onOpenQuoteModal: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenQuoteModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expandable Quick Action Box */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Card Header */}
          <div className="bg-emerald-600 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">
                  <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-slate-900 rounded-full" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight text-white flex items-center gap-1.5">
                  <span>Dirceu Teixeira Belai</span>
                </h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span>WhatsApp: (64) 99236-1831</span>
                </p>
                <p className="text-[10px] text-emerald-200">
                  Teixeira Munck &amp; Auto Socorro • Santa Helena - GO
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-emerald-100 hover:text-white p-1 rounded-lg hover:bg-emerald-700/50 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Option Buttons */}
          <div className="p-4 bg-slate-950 space-y-2.5 text-xs">
            <p className="text-slate-400 text-[11px] mb-3">
              Fale direto com <strong className="text-white">Dirceu Teixeira Belai</strong> pelo WhatsApp oficial:
            </p>

            <a
              href={createWhatsAppLink('Olá Dirceu! Gostaria de fazer um orçamento para locação de caminhão munck em Santa Helena de Goiás ou região.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white p-3 rounded-xl border border-slate-800 flex items-center justify-between transition-colors group"
            >
              <div className="flex items-center gap-2.5 text-left">
                <span className="w-2 h-2 rounded-full bg-amber-400 group-hover:scale-125 transition-transform" />
                <span className="font-semibold">Fazer Orçamento de Munck</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400" />
            </a>

            <a
              href={createWhatsAppLink('URGENTE: Olá Dirceu, preciso de AUTO SOCORRO / GUINCHO 24H na rodovia / cidade!', true)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-red-950/50 hover:bg-red-900/60 text-red-200 hover:text-white p-3 rounded-xl border border-red-500/30 flex items-center justify-between transition-colors group"
            >
              <div className="flex items-center gap-2.5 text-left">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span className="font-semibold">Auto Socorro Emergencial 24h</span>
              </div>
              <ChevronRight className="w-4 h-4 text-red-400" />
            </a>

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full bg-slate-900 hover:bg-slate-800 text-amber-400 hover:text-amber-300 p-3 rounded-xl border border-amber-500/30 flex items-center justify-between transition-colors group"
            >
              <div className="flex items-center gap-2.5 text-left">
                <FileText className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-semibold">Formulário Rápido de Serviços</span>
              </div>
              <ChevronRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>

          {/* Bottom Direct Call Bar */}
          <div className="bg-slate-900 p-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
            <span>Plantão 24h: {COMPANY_INFO.phoneEmergencyDisplay}</span>
            <a
              href={`tel:${COMPANY_INFO.phoneEmergencyDisplay.replace(/\D/g, '')}`}
              className="text-amber-400 hover:underline font-bold"
            >
              Ligar Agora
            </a>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <div className="relative group">
        {!isOpen && (
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden md:flex items-center bg-slate-900 text-white text-xs font-semibold py-2 px-3.5 rounded-xl shadow-xl border border-slate-700 whitespace-nowrap pointer-events-none group-hover:block transition-all">
            <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 inline-block animate-ping" />
            <span>Fazer Orçamento no WhatsApp (Plantão 24h)</span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-emerald-600 hover:bg-emerald-500 text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-2xl shadow-emerald-950/60 transition-transform hover:scale-110 active:scale-95 animate-pulse-subtle border-2 border-white/20"
          aria-label="Abrir WhatsApp da Teixeira Munck"
        >
          {isOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <MessageCircle className="w-8 h-8 fill-white text-emerald-600" />
          )}
        </button>
      </div>
    </div>
  );
};
