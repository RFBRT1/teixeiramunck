import React from 'react';
import { Shield, MessageCircle, Phone, ArrowDown, CheckCircle2, AlertTriangle, Truck, Award, Sparkles } from 'lucide-react';
import { COMPANY_INFO, createWhatsAppLink } from '../data/companyData';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="inicio" className="relative bg-slate-950 text-white overflow-hidden border-b border-slate-800">
      {/* Background Graphic & Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d0fbb180c5f2?auto=format&fit=crop&w=2000&q=80"
          alt="Operação de caminhão munck e içamento pesado"
          className="w-full h-full object-cover object-center opacity-25 filter brightness-75 scale-105 transform motion-safe:animate-pulse-subtle"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />
        {/* Industrial Diagonal Stripes Pattern Accent */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #f59e0b 0, #f59e0b 20px, transparent 20px, transparent 40px)`
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 sm:pt-16 sm:pb-28">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/40 text-amber-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span>Santa Helena de Goiás & Região</span>
          </div>

          <div className="inline-flex items-center gap-1.5 bg-slate-800/80 border border-slate-700 text-slate-300 px-3 py-1.5 rounded-full text-xs font-medium">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>Operadores Certificados NR-11 / 12 / 35</span>
          </div>

          <div className="inline-flex items-center gap-1.5 bg-red-950/60 border border-red-500/30 text-red-300 px-3 py-1.5 rounded-full text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
            <span>Auto Socorro 24 Horas Ativo</span>
          </div>
        </div>

        {/* Main Headings */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] uppercase">
              Locação de <span className="text-amber-400">Munck</span> &amp; Içamentos Pesados com <span className="text-white underline decoration-amber-500 decoration-4 underline-offset-8">Auto Socorro 24h</span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal">
              A <strong className="text-white font-semibold">{COMPANY_INFO.name}</strong>, sob coordenação de <strong className="text-amber-400 font-semibold">{COMPANY_INFO.contactPerson}</strong>, oferece capacidade, agilidade e rigor técnico para usinas, agronegócio, montagem de estruturas e resgates rodoviários em <strong className="text-white font-semibold">Santa Helena de Goiás</strong>, Rio Verde e cidades vizinhas.
            </p>

            {/* Quick Benefits Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Muncks modernos de 15t a 57t/m com controle sem fio</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Seguro RCTR-C total para carga durante a operação</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Atendimento na lavoura (caminhões 6x4 traçados)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Guincho pesado e plataforma para resgates rápidos</span>
              </div>
            </div>

            {/* Main Action CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={createWhatsAppLink('Olá! Gostaria de fazer um orçamento com a Teixeira Munck para Santa Helena de Goiás.')}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold px-6 py-4 rounded-xl text-base flex items-center justify-center gap-3 shadow-xl shadow-emerald-950/50 hover:shadow-emerald-600/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-6 h-6 fill-white text-emerald-600 shrink-0" />
                <div className="text-left">
                  <div className="leading-tight">Fazer Orçamento no WhatsApp</div>
                  <div className="text-[11px] font-normal text-emerald-100">Atendimento rápido &amp; sem compromisso</div>
                </div>
              </a>

              <button
                onClick={onOpenQuoteModal}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-6 py-4 rounded-xl text-base flex items-center justify-center gap-2 shadow-xl shadow-amber-950/40 transition-all hover:-translate-y-0.5"
              >
                <span>Solicitação Rápida</span>
              </button>

              <a
                href="#fotos-icamentos"
                className="bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 px-5 py-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <span>Ver Fotos dos Caminhões</span>
                <ArrowDown className="w-4 h-4 text-amber-400" />
              </a>
            </div>

            {/* Emergency Hotline bar */}
            <div className="pt-2 flex items-center gap-3 text-xs sm:text-sm text-slate-400">
              <span className="text-red-400 font-bold uppercase tracking-wider flex items-center gap-1">
                <AlertTriangle className="w-4 h-4 text-red-500" />
                Plantão 24h Guincho:
              </span>
              <a
                href={`tel:${COMPANY_INFO.phoneEmergencyDisplay.replace(/\D/g, '')}`}
                className="text-white hover:text-amber-400 font-bold underline decoration-red-500 underline-offset-4"
              >
                {COMPANY_INFO.phoneEmergencyDisplay}
              </a>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Deslocamento imediato em rodovias e estradas rurais</span>
            </div>
          </div>

          {/* Right Highlight Box / Quick Credentials Card */}
          <div className="lg:col-span-4">
            <div className="bg-slate-900/95 border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-2xl relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                <div>
                  <span className="text-xs uppercase font-extrabold text-amber-400 tracking-wider">
                    Base Santa Helena de Goiás
                  </span>
                  <h3 className="text-lg font-bold text-white">{COMPANY_INFO.contactPerson}</h3>
                  <span className="text-xs text-emerald-400 font-bold block">WhatsApp: {COMPANY_INFO.phoneDisplay}</span>
                </div>
                <div className="bg-amber-500/20 text-amber-400 p-2.5 rounded-lg">
                  <Truck className="w-6 h-6" />
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3 bg-slate-950/70 p-3 rounded-lg border border-slate-800">
                  <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white">Frota Própria e Revisada</h4>
                    <p className="text-xs text-slate-400">
                      Capacidade de içamento de 15 a 57 Ton/Metro com patolamento longo e alta estabilidade.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-950/70 p-3 rounded-lg border border-slate-800">
                  <Shield className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white">Segurança Documentada</h4>
                    <p className="text-xs text-slate-400">
                      Plano de rigging, laudos das cintas e manilhas, e operadores com reciclagem em dia.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-950/70 p-3 rounded-lg border border-slate-800">
                  <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white">Atendimento Rural &amp; Usinas</h4>
                    <p className="text-xs text-slate-400">
                      Facilidade de entrada nas usinas do Sudoeste Goiano e suporte na colheita e plantio.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800">
                <a
                  href="#orcamento"
                  className="w-full bg-slate-800 hover:bg-slate-700 text-amber-400 border border-amber-500/30 hover:border-amber-400 py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                >
                  <span>Simular Orçamento Abaixo</span>
                  <ArrowDown className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Live Counters / Proof Grid */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-black text-amber-400">24 HORAS</div>
            <div className="text-xs text-slate-400 uppercase font-semibold mt-1">Plantão Auto Socorro</div>
          </div>
          <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-black text-white">57 TON/M</div>
            <div className="text-xs text-slate-400 uppercase font-semibold mt-1">Capacidade Máxima</div>
          </div>
          <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-black text-amber-400">100%</div>
            <div className="text-xs text-slate-400 uppercase font-semibold mt-1">Cargas com Seguro</div>
          </div>
          <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-black text-white">SANTA HELENA</div>
            <div className="text-xs text-slate-400 uppercase font-semibold mt-1">&amp; Todo Sudoeste Goiano</div>
          </div>
        </div>
      </div>
    </section>
  );
};
