import React from 'react';
import { Phone, MessageCircle, MapPin, Mail, Clock, Shield, AlertTriangle, ArrowUp } from 'lucide-react';
import { COMPANY_INFO, createWhatsAppLink } from '../data/companyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contato" className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Upper Action Banner */}
      <div className="bg-amber-500 text-slate-950 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <span className="text-xs font-black uppercase tracking-wider bg-slate-950 text-amber-400 px-3 py-0.5 rounded-full">
              Plantão 24 Horas em Santa Helena de Goiás
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
              Precisa de um Munck ou Guincho Emergencial Agora?
            </h3>
            <p className="text-xs sm:text-sm text-slate-900 font-semibold">
              Deslocamento rápido para lavouras, indústrias, rodovias (GO-210 / BR-452) e cidades vizinhas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phoneEmergencyDisplay.replace(/\D/g, '')}`}
              className="bg-red-700 hover:bg-red-800 text-white font-extrabold px-5 py-3 rounded-xl text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span>Ligar Plantão: {COMPANY_INFO.phoneEmergencyDisplay}</span>
            </a>

            <a
              href={createWhatsAppLink('Olá! Preciso de atendimento da Teixeira Munck em Santa Helena de Goiás.')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-950 hover:bg-slate-900 text-white font-extrabold px-6 py-3 rounded-xl text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-500" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Summary */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500 text-slate-950 rounded-lg flex items-center justify-center font-black">
                <svg
                  className="w-6 h-6 text-slate-950"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 22h16" />
                  <path d="M6 22V6l10 5" />
                  <path d="M16 11v5" />
                  <path d="M14 16h4" />
                  <circle cx="16" cy="18" r="1.5" />
                  <path d="M6 10l8-4" />
                  <circle cx="6" cy="6" r="1.5" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-black text-white uppercase tracking-tight block">
                  Teixeira <span className="text-amber-400">Munck</span>
                </span>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  Locação de Munck e Auto Socorro
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Empresa sediada em Santa Helena de Goiás especializada em locação de guindautos articulados (munck), movimentação de cargas pesadas, montagem de galpões e auto socorro rodoviário 24 horas no Sudoeste Goiano.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div><strong className="text-slate-300">CNPJ:</strong> {COMPANY_INFO.cnpj}</div>
              <div><strong className="text-slate-300">Base Operacional:</strong> Santa Helena de Goiás - GO</div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400">
              <Shield className="w-4 h-4 shrink-0" />
              <span>Operadores certificados e cargas com apólice de seguro ativa.</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Navegação</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#inicio" className="hover:text-amber-400 transition-colors">Início</a></li>
              <li><a href="#fotos-icamentos" className="hover:text-amber-400 transition-colors">Fotos de Içamentos</a></li>
              <li><a href="#servicos" className="hover:text-amber-400 transition-colors">Nossos Serviços</a></li>
              <li><a href="#simulador" className="hover:text-amber-400 transition-colors">Simulador de Munck</a></li>
              <li><a href="#regiao" className="hover:text-amber-400 transition-colors">Região Atendida</a></li>
              <li><a href="#seguranca" className="hover:text-amber-400 transition-colors">Segurança &amp; Normas</a></li>
              <li><a href="#orcamento" className="hover:text-amber-400 transition-colors">Solicitar Orçamento</a></li>
            </ul>
          </div>

          {/* Services list */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Principais Atividades</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>• Locação de Munck com Operador NR-11</li>
              <li>• Içamento de Transformadores &amp; Silos</li>
              <li>• Montagem de Galpões e Pré-Moldados</li>
              <li>• Apoio à Safra &amp; Usinas Sucroalcooleiras</li>
              <li>• Resgate Pesado e Destombamento</li>
              <li>• Auto Socorro e Guincho Plataforma 24h</li>
              <li>• Manutenção com Cesto Aéreo (NR-35)</li>
            </ul>
          </div>

          {/* Direct Contacts & Address */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Contatos Diretos</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2.5 bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Responsável Geral:</span>
                  <strong className="text-white text-sm">{COMPANY_INFO.contactPerson}</strong>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.fullAddress}</span>
              </li>

              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 font-bold text-white transition-colors"
                >
                  WhatsApp: {COMPANY_INFO.phoneDisplay}
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-red-400 shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phoneEmergencyDisplay.replace(/\D/g, '')}`}
                  className="hover:text-red-400 font-bold text-white transition-colors"
                >
                  Plantão 24h: {COMPANY_INFO.phoneEmergencyDisplay}
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Telefone Fixo: {COMPANY_INFO.phoneLandlineDisplay}</span>
              </li>

              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Plantão 24 Horas para Emergências</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} <strong>{COMPANY_INFO.name}</strong>. Todos os direitos reservados. Santa Helena de Goiás - GO.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/site-teixeiramunck.zip"
              download="site-teixeiramunck.zip"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-3 py-1.5 rounded-lg text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors shadow-sm"
              title="Baixar pacote .zip para arrastar no Netlify"
            >
              <span>📦 Baixar Arquivo .ZIP (Para Netlify)</span>
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-amber-400 transition-colors"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
