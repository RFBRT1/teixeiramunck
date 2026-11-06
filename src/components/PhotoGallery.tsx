import React, { useState } from 'react';
import { Camera, Eye, MapPin, Weight, ArrowUpRight, MessageCircle, X, ShieldCheck, CheckCircle2, SlidersHorizontal } from 'lucide-react';
import { GALLERY_PHOTOS, PhotoItem, createWhatsAppLink } from '../data/companyData';

interface PhotoGalleryProps {
  onSelectPhotoForQuote?: (photo: PhotoItem) => void;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos os Içamentos' },
    { id: 'estruturas', label: 'Montagem de Estruturas' },
    { id: 'agro', label: 'Agronegócio & Campo' },
    { id: 'industrial', label: 'Usinas & Indústria' },
    { id: 'resgate', label: 'Auto Socorro & Resgate 24h' }
  ];

  const filteredPhotos = activeCategory === 'todos'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => {
        if (activeCategory === 'industrial') {
          return p.category === 'industrial' || p.category === 'icamentos';
        }
        return p.category === activeCategory;
      });

  return (
    <section id="fotos-icamentos" className="py-20 bg-slate-900 text-white relative border-b border-slate-800">
      {/* Decorative top pattern */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 text-amber-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>Galeria de Operações Reais</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
              Caminhões em Ação: <span className="text-amber-400">Içamentos &amp; Resgates</span>
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base">
              Confira registros reais de operações realizadas pela equipe da <strong>Teixeira Munck</strong> em canteiros de obras, fazendas, usinas sucroalcooleiras e rodovias de <strong>Santa Helena de Goiás e região</strong>.
            </p>
          </div>

          <a
            href={createWhatsAppLink('Olá! Gostaria de consultar a disponibilidade de caminhão munck para uma operação semelhante às fotos da galeria.')}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-3 rounded-xl text-sm flex items-center gap-2 shrink-0 self-start md:self-auto shadow-lg shadow-emerald-950/40 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
            <span>Consultar Disponibilidade</span>
          </a>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-800">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/60 shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
            >
              {/* Photo Image with Overlay */}
              <div
                className="relative h-64 w-full overflow-hidden cursor-pointer"
                onClick={() => setSelectedPhoto(photo)}
              >
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="bg-slate-950/80 backdrop-blur-md text-amber-400 font-bold text-[11px] px-2.5 py-1 rounded-md border border-slate-700/80 uppercase tracking-wide">
                    {photo.category === 'agro' && 'Agronegócio'}
                    {photo.category === 'estruturas' && 'Estruturas Metálicas'}
                    {photo.category === 'industrial' && 'Usina & Indústria'}
                    {photo.category === 'resgate' && 'Auto Socorro 24h'}
                    {photo.category === 'icamentos' && 'Içamento Pesado'}
                  </span>

                  <span className="bg-amber-500 text-slate-950 font-black text-[11px] px-2 py-0.5 rounded shadow">
                    {photo.weight}
                  </span>
                </div>

                {/* Hover Quick Action */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/40">
                  <span className="bg-amber-500 text-slate-950 font-extrabold text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-xl">
                    <Eye className="w-4 h-4" />
                    Ver Detalhes Técnicos
                  </span>
                </div>

                {/* Bottom Location Tag */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1 text-[11px] text-slate-300 bg-slate-900/90 backdrop-blur-sm px-2.5 py-1 rounded-md border border-slate-800">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="truncate">{photo.location}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-base text-white group-hover:text-amber-400 transition-colors line-clamp-2">
                    {photo.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-400 line-clamp-2">
                    {photo.description}
                  </p>
                </div>

                {/* Tech Specs Micro-bar */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-1.5 text-[11px] text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Equipamento:</span>
                    <span className="font-semibold text-slate-200 text-right truncate max-w-[190px]">
                      {photo.equipment}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Alcance/Elevação:</span>
                    <span className="font-semibold text-amber-400">{photo.height}</span>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedPhoto(photo)}
                    className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold py-2 rounded-lg text-xs transition-colors"
                  >
                    Ficha Técnica
                  </button>

                  <a
                    href={createWhatsAppLink(`Olá! Vi no site a foto da operação "${photo.title}" em ${photo.location} e gostaria de solicitar um orçamento para um serviço similar.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold p-2 rounded-lg text-xs flex items-center justify-center transition-colors"
                    title="Pedir orçamento deste tipo de içamento no WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Bottom Banner */}
        <div className="mt-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-6 sm:p-8 text-slate-950 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-black uppercase tracking-wider bg-slate-950 text-amber-400 px-3 py-1 rounded-full">
              Precisa de içamento em local de difícil acesso?
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
              Avaliamos seu canteiro de obras ou lavoura sem compromisso
            </h3>
            <p className="text-sm text-slate-900 font-medium">
              Nossos operadores e técnicos orientam sobre o melhor modelo de munck e plano de içamento para evitar paradas indesejadas.
            </p>
          </div>

          <a
            href={createWhatsAppLink('Olá! Preciso de uma avaliação técnica para içamento com caminhão munck em Santa Helena de Goiás.')}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-950 hover:bg-slate-900 text-white font-extrabold px-6 py-4 rounded-xl text-sm uppercase tracking-wider flex items-center gap-2 shrink-0 shadow-xl hover:scale-105 transition-all"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <span>Falar com Técnico no WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Lightbox / Details Inspection Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in">
          <div className="bg-slate-900 border border-slate-700 max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl relative max-h-[92vh] flex flex-col">
            {/* Modal Header */}
            <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-amber-400 rounded-full" />
                <span className="text-xs font-extrabold text-amber-400 uppercase tracking-wider">
                  Registro Técnico da Operação
                </span>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="overflow-y-auto p-6 space-y-6">
              {/* Main Image */}
              <div className="relative rounded-xl overflow-hidden border border-slate-800 max-h-96">
                <img
                  src={selectedPhoto.imageUrl}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {selectedPhoto.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {selectedPhoto.description}
                </p>
              </div>

              {/* Technical Specifications Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="space-y-1">
                  <span className="text-slate-400">Caminhão &amp; Munck Utilizado:</span>
                  <div className="font-bold text-white text-sm">{selectedPhoto.equipment}</div>
                </div>
                <div className="space-y-1">
                  <span className="text-slate-400">Tipo de Carga / Equipamento:</span>
                  <div className="font-bold text-amber-400 text-sm">{selectedPhoto.loadType}</div>
                </div>
                <div className="space-y-1">
                  <span className="text-slate-400">Peso Total Içado:</span>
                  <div className="font-bold text-white text-sm">{selectedPhoto.weight}</div>
                </div>
                <div className="space-y-1">
                  <span className="text-slate-400">Altura / Raio da Operação:</span>
                  <div className="font-bold text-white text-sm">{selectedPhoto.height}</div>
                </div>
                <div className="space-y-1 sm:col-span-2">
                  <span className="text-slate-400">Município / Local:</span>
                  <div className="font-bold text-slate-200 text-sm flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <span>{selectedPhoto.location}</span>
                  </div>
                </div>
              </div>

              {/* Safety Badges in Operation */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2 bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Operador NR-11/12</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Carga Segurada RCTR-C</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Laudos de Cintas em Dia</span>
                </div>
              </div>
            </div>

            {/* Modal Footer with Direct WhatsApp Button */}
            <div className="p-4 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold px-4 py-2.5 rounded-xl text-xs transition-colors"
              >
                Fechar Detalhes
              </button>

              <a
                href={createWhatsAppLink(`Olá! Gostaria de um orçamento na Teixeira Munck para um içamento idêntico ou similar à foto "${selectedPhoto.title}" (${selectedPhoto.equipment}).`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold px-6 py-2.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>Pedir Orçamento Deste Içamento no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
