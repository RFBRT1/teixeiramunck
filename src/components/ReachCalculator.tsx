import React, { useState, useId } from 'react';
import { Calculator, ArrowRight, CheckCircle2, MessageCircle, AlertTriangle, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, createWhatsAppLink } from '../data/companyData';

export const ReachCalculator: React.FC = () => {
  const [weightKg, setWeightKg] = useState<number>(2500);
  const [distanceMeters, setDistanceMeters] = useState<number>(8);
  const [heightMeters, setHeightMeters] = useState<number>(10);
  const [isConfinedSpace, setIsConfinedSpace] = useState<boolean>(false);
  const weightInputId = useId();
  const distanceInputId = useId();
  const heightInputId = useId();

  // Theoretical Moment (Tons * Meters) with 25% safety margin
  const weightTons = weightKg / 1000;
  const calculatedTm = (weightTons * distanceMeters * 1.3).toFixed(1);
  const numericTm = parseFloat(calculatedTm);

  // Determine ideal truck recommendation
  let recommendation = {
    model: 'Munck Articulado 20 Ton/Metro',
    reach: 'Lança até 14 metros',
    idealFor: 'Cargas médias, descarregamento rápido, maquinários leves',
    feasibility: 'Operação Segura e Ágil'
  };

  if (numericTm <= 20) {
    recommendation = {
      model: 'Munck Articulado 20 Ton/Metro',
      reach: 'Lança hidráulica de 14 metros',
      idealFor: 'Cargas médias, motobombas, descarregamento de paletes e pré-moldados leves',
      feasibility: 'Totalmente viável com nosso modelo 20t/m'
    };
  } else if (numericTm <= 36) {
    recommendation = {
      model: 'Munck 35 Ton/Metro Traçado 6x4',
      reach: 'Lança telescópica de 19 metros com guincho de cabo',
      idealFor: 'Galpões metálicos, implementos agrícolas, transformadores de até 4 toneladas',
      feasibility: 'Requer patolamento duplo reforçado'
    };
  } else if (numericTm <= 55) {
    recommendation = {
      model: 'Munck Pesado 45 a 50 Ton/Metro',
      reach: 'Lança hidráulica de 24 metros + Jib articulado',
      idealFor: 'Grandes estruturas industriais, silos, tanques de usinas, montagens de grande porte',
      feasibility: 'Operação técnica de alta precisão com operador sênior'
    };
  } else {
    recommendation = {
      model: 'Munck Super Pesado 57 Ton/Metro ou Duplo Munck Conjugado',
      reach: 'Lança de 26 metros com plano de rigging dedicado',
      idealFor: 'Cargas ultra pesadas, longo alcance ou destombamentos complexos',
      feasibility: 'Necessita validação técnica prévia no local da operação'
    };
  }

  const calculationSummary = `Olá Teixeira Munck! Fiz a simulação no site:
• Carga estimada: ${weightKg.toLocaleString('pt-BR')} kg (${weightTons} toneladas)
• Raio / Distância de trabalho: ${distanceMeters} metros
• Altura estimada: ${heightMeters} metros
• Espaço confinado/difícil: ${isConfinedSpace ? 'Sim' : 'Não'}
• Sugestão do simulador: ${recommendation.model} (${calculatedTm} Ton/Metro)
Gostaria de verificar a viabilidade e agendar uma cotação para Santa Helena de Goiás e região.`;

  return (
    <section id="simulador" className="py-20 bg-slate-900 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 text-amber-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Simulador Técnico de Alcance &amp; Carga</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
            Descubra o <span className="text-amber-400">Munck Ideal</span> para sua Operação
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Ajuste o peso da sua carga e a distância que o caminhão ficará do ponto de içamento para identificar o equipamento mais seguro e econômico.
          </p>
        </div>

        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Sliders Input Column */}
            <div className="lg:col-span-7 space-y-7">
              {/* Weight Slider */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor={weightInputId} className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Peso Estimado da Carga
                  </label>
                  <span className="text-lg font-black text-amber-400 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
                    {weightKg >= 1000 ? `${(weightKg / 1000).toFixed(1)} Toneladas` : `${weightKg} kg`}
                    <span className="text-xs text-slate-400 font-normal ml-1.5">({weightKg} kg)</span>
                  </span>
                </div>
                <input
                  id={weightInputId}
                  type="range"
                  min="300"
                  max="12000"
                  step="100"
                  value={weightKg}
                  onChange={(e) => setWeightKg(Number(e.target.value))}
                  className="w-full accent-amber-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>300 kg</span>
                  <span>3.000 kg</span>
                  <span>6.000 kg</span>
                  <span>12.000 kg</span>
                </div>
              </div>

              {/* Distance Slider */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor={distanceInputId} className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Raio / Distância Horizontal do Caminhão
                  </label>
                  <span className="text-lg font-black text-white bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
                    {distanceMeters} Metros
                  </span>
                </div>
                <input
                  id={distanceInputId}
                  type="range"
                  min="2"
                  max="24"
                  step="1"
                  value={distanceMeters}
                  onChange={(e) => setDistanceMeters(Number(e.target.value))}
                  className="w-full accent-amber-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>2 metros (rente à carroceria)</span>
                  <span>12m</span>
                  <span>24 metros (lança máxima)</span>
                </div>
              </div>

              {/* Height Slider */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor={heightInputId} className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Altura Aproximada do Içamento
                  </label>
                  <span className="text-lg font-black text-white bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
                    {heightMeters} Metros
                  </span>
                </div>
                <input
                  id={heightInputId}
                  type="range"
                  min="2"
                  max="26"
                  step="1"
                  value={heightMeters}
                  onChange={(e) => setHeightMeters(Number(e.target.value))}
                  className="w-full accent-amber-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>Térreo / Carroceria</span>
                  <span>14m (2º pavimento/galpão)</span>
                  <span>26m (telhados/silos)</span>
                </div>
              </div>

              {/* Checkbox for Confined Space */}
              <label className="flex items-center gap-3 p-3 bg-slate-900 rounded-xl border border-slate-800 cursor-pointer hover:border-slate-700 transition-colors">
                <input
                  type="checkbox"
                  checked={isConfinedSpace}
                  onChange={(e) => setIsConfinedSpace(e.target.checked)}
                  className="w-4 h-4 accent-amber-500 rounded"
                />
                <span className="text-xs text-slate-300">
                  Local com interferência aérea (fiação, telhado, galpão fechado ou terreno de terra/lavoura)
                </span>
              </label>
            </div>

            {/* Results Card (Right Column) */}
            <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-[11px] uppercase font-bold text-slate-400">
                    Momento de Carga Estimado
                  </span>
                  <span className="text-xs font-extrabold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                    ~ {calculatedTm} Toneladas/Metro
                  </span>
                </div>

                <div className="mt-4">
                  <span className="text-xs text-slate-400 uppercase font-semibold">
                    Equipamento Recomendado:
                  </span>
                  <h3 className="text-xl font-black text-white mt-1 text-amber-400">
                    {recommendation.model}
                  </h3>
                  <div className="text-xs text-slate-300 mt-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{recommendation.reach}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
                    {recommendation.idealFor}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-2 text-xs text-emerald-400">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>{recommendation.feasibility}</span>
                </div>
              </div>

              {/* Send Simulation to WhatsApp Button */}
              <div className="pt-2">
                <a
                  href={createWhatsAppLink(calculationSummary)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 transition-all hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                  <span>Enviar Cálculo no WhatsApp da Teixeira</span>
                </a>
                <span className="block text-center text-[10px] text-slate-500 mt-2">
                  Nosso engenheiro/operador confere a tabela de carga exata e responde com o valor!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
