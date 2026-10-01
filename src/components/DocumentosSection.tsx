import React, { useState } from 'react';
import { Folder, Download, FileText, Award, Shield, Search, CheckCircle, ExternalLink } from 'lucide-react';
import { LEGAL_DOCUMENTS } from '../data/mockData';
import { LegalDocument } from '../types';

export const DocumentosSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  const filteredDocs = LEGAL_DOCUMENTS.filter(
    (doc) =>
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDownload = (doc: LegalDocument) => {
    const content = `DOCUMENTO OFICIAL UGT VITORIA-GASTEIZ\n` +
      `Título: ${doc.title}\n` +
      `Categoría: ${doc.category}\n` +
      `Fecha/Vigencia: ${doc.date}\n\n` +
      `Descripción:\n${doc.description}\n\n` +
      `Texto regulatorio y normativo en custodia de la Sección Sindical de UGT (Limpieza Viaria y RSU Vitoria-Gasteiz).`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${doc.title.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadToast(doc.title);
    setTimeout(() => setDownloadToast(null), 3000);
  };

  return (
    <div className="space-y-4 pb-12">
      {/* Header */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-[#D3122A] shrink-0">
            <Folder className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-semibold text-[#D3122A] uppercase tracking-wider">
              Repositorio Documental
            </span>
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Disposiciones Legales
            </h2>
          </div>
        </div>
        <p className="text-xs text-slate-600 mt-2 leading-relaxed">
          Biblioteca de normativas laborales, protocolos vigentes y guías para el reconocimiento oficial de tus competencias y experiencia profesional.
        </p>

        {/* Search Input */}
        <div className="mt-3 relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar documento por palabra o categoría..."
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#D3122A]"
          />
        </div>
      </div>

      {downloadToast && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Descargando documento: {downloadToast}</span>
        </div>
      )}

      {/* Special Feature: Acreditación de Competencias Profesionales Lanbide */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-sm space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#D3122A] flex items-center justify-center">
              <Award className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="text-[10px] text-red-300 font-bold uppercase tracking-wider">
                Reconocimiento Oficial
              </span>
              <h3 className="text-sm sm:text-base font-bold text-white">
                Acreditación de Competencias (Lanbide / SEPE)
              </h3>
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          Si llevas años trabajando en Limpieza Viaria o RSU pero careces de titulación oficial, este procedimiento te permite obtener el <strong>Certificado de Profesionalidad</strong> reconociendo tu experiencia laboral real.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-xs">
          <div className="bg-white/10 p-2.5 rounded-xl">
            <span className="font-bold text-white block text-[11px]">1. Requisito Experiencia</span>
            <span className="text-slate-300 text-[11px] mt-0.5 block">
              3 años (mínimo 2.000 h trabajadas) en los últimos 15 años.
            </span>
          </div>
          <div className="bg-white/10 p-2.5 rounded-xl">
            <span className="font-bold text-white block text-[11px]">2. Fases del Proceso</span>
            <span className="text-slate-300 text-[11px] mt-0.5 block">
              Asesoramiento inicial, evaluación curricular y acreditación oficial.
            </span>
          </div>
          <div className="bg-white/10 p-2.5 rounded-xl">
            <span className="font-bold text-white block text-[11px]">3. Ayuda de UGT</span>
            <span className="text-slate-300 text-[11px] mt-0.5 block">
              Te preparamos el dossier laboral y te acompañamos en todo el trámite.
            </span>
          </div>
        </div>

        <div className="pt-2">
          <a
            href="https://wa.me/34648928661?text=Hola,%20necesito%20informacion%20y%20ayuda%20para%20la%20Acreditacion%20de%20Competencias%20Profesionales."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 bg-[#D3122A] hover:bg-[#b50e23] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
          >
            <span>Pedir Asesoramiento para Acreditación</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Downloadable Documents Repository */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide px-1">
          Documentos y Modelos Disponibles ({filteredDocs.length})
        </h3>

        <div className="grid grid-cols-1 gap-2.5">
          {filteredDocs.map((doc) => (
            <div
              key={doc.id}
              className="p-4 bg-white rounded-2xl shadow-sm border border-slate-200 hover:border-slate-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#D3122A] flex items-center justify-center shrink-0 mt-0.5">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-[#D3122A] uppercase">
                      {doc.category}
                    </span>
                    <span className="text-slate-300">·</span>
                    <span className="text-[11px] text-slate-500">{doc.date}</span>
                    <span className="text-slate-300">·</span>
                    <span className="text-[11px] text-slate-400 font-mono">{doc.fileSize}</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 mt-1">
                    {doc.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    {doc.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                <button
                  onClick={() => handleDownload(doc)}
                  className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-[#D3122A]" />
                  <span>Descargar</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
