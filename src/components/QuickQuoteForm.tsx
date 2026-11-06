import React, { useState } from 'react';
import { MessageCircle, Send, Copy, Check, Sparkles, AlertCircle, MapPin, Truck, Calendar, User, Phone, FileText, ChevronRight } from 'lucide-react';
import { COMPANY_INFO, createWhatsAppLink } from '../data/companyData';

interface QuickQuoteFormProps {
  isModal?: boolean;
  onClose?: () => void;
  defaultService?: string;
}

export const QuickQuoteForm: React.FC<QuickQuoteFormProps> = ({
  isModal = false,
  onClose,
  defaultService = 'Locação de Caminhão Munck',
}) => {
  const [serviceType, setServiceType] = useState(defaultService);
  const [cityLocation, setCityLocation] = useState('Santa Helena de Goiás - GO');
  const [specificLocation, setSpecificLocation] = useState('');
  const [loadDescription, setLoadDescription] = useState('');
  const [estimatedWeight, setEstimatedWeight] = useState('');
  const [urgency, setUrgency] = useState('Hoje ou mais breve possível');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [copied, setCopied] = useState(false);

  // Generate structured message
  const generatedMessage = `*SOLICITAÇÃO DE ORÇAMENTO - TEIXEIRA MUNCK*
----------------------------------------
👤 *Aos cuidados de:* Dirceu Teixeira Belai (WhatsApp: 64 99236-1831)
👤 *Cliente:* ${clientName || 'Não informado'}
📱 *WhatsApp/Contato do Cliente:* ${clientPhone || 'Não informado'}
🏗️ *Tipo de Serviço:* ${serviceType}
📍 *Localização:* ${cityLocation} ${specificLocation ? `(${specificLocation})` : ''}
📦 *Carga / Veículo:* ${loadDescription || 'A definir na conversa'}
⚖️ *Peso / Dimensões:* ${estimatedWeight ? `${estimatedWeight}` : 'A avaliar no local'}
⏱️ *Urgência / Previsão:* ${urgency}
${additionalNotes ? `📝 *Observações:* ${additionalNotes}` : ''}
----------------------------------------
_Enviado via site oficial para Dirceu Teixeira Belai - Teixeira Locação de Munck & Auto Socorro (Santa Helena de Goiás - GO)_`;

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const url = createWhatsAppLink(generatedMessage, urgency.includes('URGENTE'));
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const serviceOptions = [
    'Locação de Caminhão Munck',
    'Içamento de Cargas Pesadas / Transformador / Silo',
    'Montagem de Estruturas Metálicas / Pré-moldados',
    'Apoio ao Agro / Colheitadeira / Pivô / Usina',
    'Auto Socorro / Guincho 24h (Veículo Quebrado ou Acidentado)',
    'Destombamento / Resgate Pesado em Rodovia',
    'Serviços com Cesto Aéreo (NR-35 em Altura)',
    'Outro serviço sob consulta'
  ];

  const cityOptions = [
    'Santa Helena de Goiás - GO (Sede)',
    'Rio Verde - GO',
    'Maurilândia - GO',
    'Turvelândia - GO',
    'Acreúna - GO',
    'Porteirão - GO',
    'Santo Antônio da Barra - GO',
    'Montividiu - GO',
    'Rodovia GO-210 (Santa Helena / Rio Verde)',
    'Rodovia BR-452',
    'Zona Rural / Fazenda na Região de Santa Helena',
    'Outro município no Sudoeste Goiano'
  ];

  const urgencyOptions = [
    'URGENTE 24H (Preciso de atendimento imediato)',
    'Hoje ou mais breve possível',
    'Amanhã / Próximos dias',
    'Agendamento com antecedência (planejamento de obra)'
  ];

  return (
    <div className={`w-full ${isModal ? 'p-0' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'}`} id="orcamento">
      {!isModal && (
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 text-amber-500 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Orçamento Rápido &amp; Direto no WhatsApp</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight">
            Solicite seu <span className="text-amber-500">Orçamento Sem Compromisso</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Preencha os dados abaixo e clique para abrir a conversa no WhatsApp oficial da <strong>Teixeira Locação de Munck e Auto Socorro</strong> com todas as informações prontas para cálculo de valor e disponibilidade imediata.
          </p>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Form Header Strip */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800">
          <div>
            <div className="text-xs uppercase font-extrabold text-amber-400 tracking-wider flex items-center gap-2">
              <span>Teixeira Munck e Auto Socorro</span>
              <span>•</span>
              <span className="text-white">Contato: Dirceu Teixeira Belai</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Formulário Rápido de Serviços &amp; Cotação
            </h3>
            <p className="text-xs text-slate-300 mt-0.5">
              Envio instantâneo para o WhatsApp oficial <strong>(64) 99236-1831</strong> (Dirceu Teixeira Belai)
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs bg-slate-800 px-3.5 py-2 rounded-lg border border-slate-700 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Atendimento Comercial &amp; Plantão 24h</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Main Form Fields (Left Column) */}
          <form onSubmit={handleSendWhatsApp} className="lg:col-span-7 p-6 sm:p-8 space-y-5">
            {/* 1. Service Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-amber-500" />
                <span>1. Tipo de Serviço Solicitado *</span>
              </label>
              <select
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 font-medium focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none"
                required
              >
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* 2. City & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-amber-500" />
                  <span>2. Município / Região *</span>
                </label>
                <select
                  value={cityLocation}
                  onChange={(e) => setCityLocation(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 font-medium focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none"
                  required
                >
                  {cityOptions.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Bairro, Fazenda ou Rodovia
                </label>
                <input
                  type="text"
                  placeholder="Ex: Fazenda São Bento / Setor Industrial / km 12"
                  value={specificLocation}
                  onChange={(e) => setSpecificLocation(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none"
                />
              </div>
            </div>

            {/* 3. Load / Vehicle details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-amber-500" />
                  <span>3. O que será içado ou socorrido? *</span>
                </label>
                <input
                  type="text"
                  placeholder="Ex: Plataforma de colheitadeira, Vigas de galpão, Hilux no acostamento..."
                  value={loadDescription}
                  onChange={(e) => setLoadDescription(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Peso Estimado
                </label>
                <input
                  type="text"
                  placeholder="Ex: 3 toneladas, 500 kg..."
                  value={estimatedWeight}
                  onChange={(e) => setEstimatedWeight(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none"
                />
              </div>
            </div>

            {/* 4. Urgency */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-amber-500" />
                <span>4. Para quando você precisa do serviço? *</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {urgencyOptions.map((opt) => (
                  <label
                    key={opt}
                    className={`flex items-center gap-2 p-3 rounded-xl border text-xs cursor-pointer font-medium transition-all ${
                      urgency === opt
                        ? opt.includes('URGENTE')
                          ? 'border-red-500 bg-red-50 text-red-950 font-bold ring-1 ring-red-400'
                          : 'border-amber-500 bg-amber-50 text-slate-950 font-bold ring-1 ring-amber-400'
                        : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <input
                      type="radio"
                      name="urgency"
                      value={opt}
                      checked={urgency === opt}
                      onChange={() => setUrgency(opt)}
                      className="text-amber-500 focus:ring-amber-500"
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 5. Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <User className="w-4 h-4 text-amber-500" />
                  <span>Seu Nome ou Empresa *</span>
                </label>
                <input
                  type="text"
                  placeholder="Ex: João da Silva / Usina Santa Helena"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-amber-500" />
                  <span>Seu WhatsApp com DDD *</span>
                </label>
                <input
                  type="tel"
                  placeholder="Ex: (64) 99999-0000"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none"
                  required
                />
              </div>
            </div>

            {/* Additional Details */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Detalhes adicionais (opcional: altura do içamento, raio, condições do terreno)
              </label>
              <textarea
                rows={2}
                placeholder="Ex: Içamento a 12 metros de altura em piso de terra compactado; entrada permitida para caminhão pesado..."
                value={additionalNotes}
                onChange={(e) => setAdditionalNotes(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none"
              />
            </div>

            {/* Action Buttons on Mobile / Left */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-4 px-6 rounded-xl text-base flex items-center justify-center gap-3 shadow-xl shadow-emerald-950/20 hover:scale-[1.01] active:scale-[0.99] transition-all"
              >
                <MessageCircle className="w-6 h-6 fill-white text-emerald-600 shrink-0" />
                <span>Enviar Orçamento Direto no WhatsApp</span>
                <ChevronRight className="w-5 h-5" />
              </button>
              <p className="text-center text-xs text-slate-500 mt-2">
                Você será direcionado para o aplicativo do WhatsApp com a mensagem pronta. Sem cadastro prévio.
              </p>
            </div>
          </form>

          {/* Right Column: Real-time WhatsApp Preview & Trust Badges */}
          <div className="lg:col-span-5 bg-slate-900 text-slate-200 p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-800">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase font-extrabold text-amber-400 tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  Mensagem Formatada no WhatsApp
                </span>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-2.5 py-1.5 rounded-lg border border-slate-700 flex items-center gap-1 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar Texto</span>
                    </>
                  )}
                </button>
              </div>

              {/* Simulated WhatsApp Chat Bubble */}
              <div className="bg-[#0b141a] rounded-2xl p-4 border border-slate-800 font-mono text-xs leading-relaxed text-emerald-200 shadow-inner relative overflow-hidden">
                <div className="absolute top-2 right-2 text-[10px] text-slate-500 font-sans">
                  Prévia em tempo real
                </div>
                <pre className="whitespace-pre-wrap font-sans text-xs text-slate-100">
                  {generatedMessage}
                </pre>
              </div>

              {/* Safety & Guarantee Highlights */}
              <div className="mt-6 space-y-3">
                <div className="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3 flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  <div>
                    <h5 className="text-xs font-bold text-white uppercase tracking-wider">
                      Orçamento Transparente
                    </h5>
                    <p className="text-[11px] text-slate-400">
                      Valores claros por hora, diária ou pacote com operador certificado e combustível incluso.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3 flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <div>
                    <h5 className="text-xs font-bold text-white uppercase tracking-wider">
                      Seguro de Cargas RCTR-C
                    </h5>
                    <p className="text-[11px] text-slate-400">
                      Proteção total para maquinários agrícolas, estruturas e equipamentos industriais de alto valor.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3 flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-400 mt-1.5 shrink-0" />
                  <div>
                    <h5 className="text-xs font-bold text-white uppercase tracking-wider">
                      Plantão 24 Horas em Santa Helena
                    </h5>
                    <p className="text-[11px] text-slate-400">
                      Socorro rodoviário na GO-210 e desobstrução rápida com guincho e munck pesado.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Direct Links */}
            <div className="mt-8 pt-6 border-t border-slate-800">
              <div className="text-xs text-slate-400 mb-3 text-center sm:text-left">
                Prefere ligar diretamente para nossa equipe?
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href={`tel:${COMPANY_INFO.phoneDisplay.replace(/\D/g, '')}`}
                  className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-2.5 px-3 rounded-lg text-center border border-slate-700 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Comercial</span>
                </a>
                <a
                  href={`tel:${COMPANY_INFO.phoneEmergencyDisplay.replace(/\D/g, '')}`}
                  className="bg-red-950/70 hover:bg-red-900/80 text-red-200 font-bold py-2.5 px-3 rounded-lg text-center border border-red-500/30 transition-colors flex items-center justify-center gap-1.5"
                >
                  <AlertCircle className="w-3.5 h-3.5 text-red-400" />
                  <span>Plantão 24h</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
