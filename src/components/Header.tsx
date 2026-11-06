import React, { useState } from 'react';
import { Phone, MessageCircle, Clock, MapPin, Menu, X, Shield, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, createWhatsAppLink } from '../data/companyData';

interface HeaderProps {
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Fotos de Içamentos', href: '#fotos-icamentos' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Simulador de Munck', href: '#simulador' },
    { label: 'Região Atendida', href: '#regiao' },
    { label: 'Segurança & Normas', href: '#seguranca' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950 text-white shadow-xl border-b border-slate-800">
      {/* Top Notice Bar */}
      <div className="bg-amber-500 text-slate-950 px-4 py-1.5 text-xs sm:text-sm font-semibold">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-red-600 animate-ping" />
            <span className="uppercase tracking-wider font-extrabold text-[11px] sm:text-xs">
              Plantão 24h Santa Helena de Goiás e Região
            </span>
            <span className="hidden md:inline text-slate-800">|</span>
            <span className="hidden md:inline font-bold text-slate-900">
              Contato: {COMPANY_INFO.contactPerson}
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:underline text-slate-950 font-extrabold"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-slate-950 text-amber-500" />
              <span>WhatsApp: {COMPANY_INFO.phoneDisplay} ({COMPANY_INFO.contactPerson})</span>
            </a>
            <span className="hidden lg:inline text-slate-800">•</span>
            <span className="hidden lg:flex items-center gap-1 text-slate-900 font-medium">
              <MapPin className="w-3.5 h-3.5" />
              Santa Helena de Goiás - GO
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-amber-500 text-slate-950 rounded-lg flex items-center justify-center font-black shadow-lg shadow-amber-500/20 group-hover:bg-amber-400 transition-colors">
              <svg
                className="w-7 h-7 text-slate-950"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Stylized crane hook & boom */}
                <path d="M4 22h16" />
                <path d="M6 22V6l10 5" />
                <path d="M16 11v5" />
                <path d="M14 16h4" />
                <circle cx="16" cy="18" r="1.5" />
                <path d="M6 10l8-4" />
                <circle cx="6" cy="6" r="1.5" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-amber-400 transition-colors uppercase">
                Teixeira <span className="text-amber-400">Munck</span>
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-slate-400 uppercase flex items-center gap-1">
                <span>Locação de Munck & Auto Socorro</span>
                <span className="w-1 h-1 bg-amber-400 rounded-full" />
                <span className="text-amber-400">Santa Helena - GO</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-amber-400 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-amber-400 after:absolute after:bottom-0 after:left-0 after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="bg-slate-800 hover:bg-slate-700 text-amber-400 border border-amber-500/40 hover:border-amber-400 px-3.5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
            >
              Formulário Rápido
            </button>

            <a
              href={createWhatsAppLink('Olá! Gostaria de solicitar um orçamento para serviço de caminhão munck / auto socorro em Santa Helena de Goiás.')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2.5 rounded-lg text-sm flex items-center gap-2 shadow-lg shadow-emerald-900/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>Orçamento WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={createWhatsAppLink('Olá! Preciso de um orçamento rápido para munck em Santa Helena de Goiás.')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white p-2.5 rounded-lg"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 rounded-lg flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
            >
              <span>Preencher Formulário de Orçamento</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={createWhatsAppLink('Olá! Gostaria de um orçamento para serviço de caminhão munck em Santa Helena de Goiás.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 text-sm"
            >
              <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
              <span>Chamar no WhatsApp Oficial</span>
            </a>

            <div className="flex items-center justify-between text-xs text-slate-400 pt-2 px-1">
              <span>Plantão 24h: {COMPANY_INFO.phoneEmergencyDisplay}</span>
              <span>Santa Helena - GO</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
