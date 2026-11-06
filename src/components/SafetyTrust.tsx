import React from 'react';
import { ShieldCheck, FileCheck, CheckCircle2, Award, HardHat, FileText, AlertOctagon, HeartHandshake } from 'lucide-react';
import { TRUST_PILLARS, createWhatsAppLink } from '../data/companyData';

export const SafetyTrust: React.FC = () => {
  const certifications = [
    {
      title: 'Norma Regulamentadora NR-11',
      desc: 'Transporte, movimentação, armazenagem e manuseio seguro de materiais e cargas pesadas.'
    },
    {
      title: 'Norma Regulamentadora NR-12',
      desc: 'Segurança no trabalho em máquinas, proteção de pontos móveis e comandos operacionais.'
    },
    {
      title: 'Norma Regulamentadora NR-35',
      desc: 'Capacitação completa para trabalhos em altura com cesto aéreo acoplado ao munck.'
    },
    {
      title: 'Apólice de Seguro de Cargas RCTR-C',
      desc: 'Cobertura securitária durante todo o transporte e içamento contra riscos e imprevistos.'
    },
    {
      title: 'Laudos de Estanqueidade & Cintas Certificadas',
      desc: 'Inspeções anuais dos cilindros hidráulicos e acessórios de amarração com plaqueta Inmetro.'
    },
    {
      title: 'ASO e Exames Ocupacionais Atualizados',
      desc: 'Equipe 100% apta e com documentação exigida pelas usinas sucroalcooleiras e multinacionais de grãos.'
    }
  ];

  return (
    <section id="seguranca" className="py-20 bg-slate-900 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Padrão de Excelência &amp; Confiança</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
            Segurança Operacional em <span className="text-amber-400">Primeiro Lugar</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Movimentar cargas pesadas exige responsabilidade e conformidade legal. Na <strong>Teixeira Locação de Munck</strong>, cada operação é planejada para garantir zero acidentes e total integridade do seu patrimônio.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {TRUST_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-colors shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center font-bold mb-4 border border-amber-500/30">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Regulatory Compliance Matrix */}
        <div className="bg-slate-950 rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-8">
            <div>
              <span className="text-xs font-extrabold uppercase text-amber-400 tracking-wider">
                Exigências Industriais &amp; Usinas
              </span>
              <h3 className="text-2xl font-black text-white">
                Prontidão para Integração em Grandes Empresas
              </h3>
            </div>
            <div className="flex items-center gap-2 bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 px-3.5 py-2 rounded-xl text-xs font-semibold">
              <FileCheck className="w-4 h-4 text-emerald-400" />
              <span>Documentação Aprovada nos Maiores Grupos de GO</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((item, idx) => (
              <div key={idx} className="bg-slate-900/70 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-400 text-center sm:text-left">
              Sua empresa exige emissão de ART (Anotação de Responsabilidade Técnica) ou Plano de Rigging? Nós providenciamos.
            </p>

            <a
              href={createWhatsAppLink('Olá! Gostaria de consultar os laudos técnicos e documentação para contratação do caminhão munck pela nossa empresa.')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider transition-colors shrink-0 flex items-center gap-2"
            >
              <span>Solicitar Documentos no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
