import React, { useState, useMemo } from 'react';
import {
  Download,
  FileText,
  Check,
  BookOpen,
  Share2,
  ChevronDown,
} from 'lucide-react';
import { CONVENIO_OFICIAL_ARTICLES, CONVENIO_INFO } from '../data/convenioOficialData';
import { ConvenioArticle } from '../types';

export const ConvenioViewer: React.FC = () => {
  const [selectedChapter, setSelectedChapter] = useState<string>('todos');
  const [isPdfMode, setIsPdfMode] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [jumpArticleId, setJumpArticleId] = useState<string>('');

  // Extract unique chapters
  const chapters = useMemo(() => {
    const list = Array.from(new Set(CONVENIO_OFICIAL_ARTICLES.map((a) => a.chapter)));
    return ['todos', ...list];
  }, []);

  // Filtered articles by chapter
  const filteredArticles = useMemo(() => {
    return CONVENIO_OFICIAL_ARTICLES.filter((art) => {
      return selectedChapter === 'todos' || art.chapter === selectedChapter;
    });
  }, [selectedChapter]);

  const handleCopyArticle = (art: ConvenioArticle) => {
    const label = art.articleLabel || `Artículo ${art.articleNumber}`;
    const text = `${label}. ${art.title}\n${art.chapter}\n\n${art.content}\n\n(Convenio Colectivo FCC - Limpieza y RSU Vitoria-Gasteiz • BOTHA Núm. 140)`;
    navigator.clipboard.writeText(text);
    setCopiedId(art.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDownloadFullDocument = () => {
    const element = document.createElement('a');
    const headerText = `${CONVENIO_INFO.boletin.toUpperCase()}\n${CONVENIO_INFO.fechaPublicacion} • ${CONVENIO_INFO.numeroBoletin}\nCódigo oficial: ${CONVENIO_INFO.codigoOficial}\n\n${CONVENIO_INFO.titulo}\n\n================================================================================\n\n`;

    const bodyText = CONVENIO_OFICIAL_ARTICLES.map((a) => {
      const label = a.articleLabel || `ARTÍCULO ${a.articleNumber}`;
      return `${label}. ${a.title.toUpperCase()}\n${a.chapter}\n\n${a.content}\n\n--------------------------------------------------------------------------------\n\n`;
    }).join('');

    const file = new Blob([headerText + bodyText], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = 'Convenio_Colectivo_FCC_Limpieza_RSU_Vitoria_Gasteiz_BOTHA_140.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleJumpToArticle = (id: string) => {
    setJumpArticleId(id);
    setSelectedChapter('todos');
    setTimeout(() => {
      const elem = document.getElementById(id);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  return (
    <div className="space-y-4 pb-12">
      {/* Official Header Banner BOTHA */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
          <div>
            <h2 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
              Convenio Colectivo Limpieza Pública y RSU de Vitoria-Gasteiz
            </h2>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed max-w-2xl">
              Publicado en el {CONVENIO_INFO.boletin}. Empresa adjudicataria y personal adscrito, con
              homologación a condiciones de empleados/as municipales y vigencia en ultraactividad.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0 self-start">
            <button
              onClick={() => setIsPdfMode(!isPdfMode)}
              className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                isPdfMode
                  ? 'bg-[#D3122A] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {isPdfMode ? <BookOpen className="w-3.5 h-3.5" /> : <FileText className="w-3.5 h-3.5" />}
              <span>{isPdfMode ? 'Vista Normal' : 'Vista Oficial BOTHA'}</span>
            </button>

            <button
              onClick={handleDownloadFullDocument}
              title="Descargar texto íntegro del convenio oficial"
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Navigator Jump Dropdown */}
        <div className="mt-3 pt-3 border-t border-slate-100">
          <div className="relative w-full">
            <select
              value={jumpArticleId}
              onChange={(e) => handleJumpToArticle(e.target.value)}
              className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#D3122A] pr-8 font-medium cursor-pointer"
            >
              <option value="">Ir directo a un artículo o anexo...</option>
              {CONVENIO_OFICIAL_ARTICLES.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.articleLabel || `Art. ${a.articleNumber}`} - {a.title}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* Chapters horizontal pills */}
        <div className="mt-3 flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {chapters.map((ch) => (
            <button
              key={ch}
              onClick={() => setSelectedChapter(ch)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors shrink-0 cursor-pointer ${
                selectedChapter === ch
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {ch === 'todos' ? 'Todos los Capítulos y Anexos' : ch.replace('Capítulo ', 'Cap. ')}
            </button>
          ))}
        </div>
      </div>

      {/* Official BOTHA Simulation Mode */}
      {isPdfMode ? (
        <div className="bg-slate-800 rounded-2xl p-3 sm:p-5 text-white shadow-md">
          {/* BOTHA Header bar */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-700 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-bold text-red-400">ALHAO / BOTHA</span>
              <span className="text-slate-400">|</span>
              <span className="text-slate-300">Núm. 140 · 10/12/2014</span>
            </div>
            <span className="text-[11px] text-slate-400">Documento Oficial</span>
          </div>

          {/* Paper View Container */}
          <div className="mt-4 bg-white text-slate-900 rounded-xl p-6 sm:p-10 shadow-lg font-serif text-sm leading-relaxed overflow-x-auto">
            <div className="max-w-3xl mx-auto space-y-6">
              {/* Seal of Botha */}
              <div className="border-b-2 border-slate-800 pb-4 text-center font-sans">
                <span className="text-xs uppercase tracking-widest text-slate-500 font-bold block">
                  BOLETÍN OFICIAL DEL TERRITORIO HISTÓRICO DE ÁLAVA
                </span>
                <span className="text-xs text-slate-600 block mt-0.5">
                  ARABAKO LURRALDE HISTORIKOAREN ALDIZKARI OFIZIALA
                </span>
                <span className="text-xs font-mono text-slate-700 font-semibold block mt-1">
                  Miércoles, 10 de diciembre de 2014 • Núm. 140
                </span>
              </div>

              {/* Title inside document */}
              <div className="text-center font-sans mb-8">
                <h3 className="text-base sm:text-lg font-black text-slate-900 uppercase tracking-tight max-w-2xl mx-auto">
                  Convenio colectivo de la empresa FCC, SA y su personal adscrito al servicio de
                  limpieza pública y recogida y transporte de residuos sólidos urbanos de la ciudad de
                  Vitoria-Gasteiz 2014 – 2016
                </h3>
                <p className="text-xs text-slate-600 mt-2 font-medium">
                  Negociado en homologación con las condiciones laborales de los empleados/as municipales
                </p>
              </div>

              {/* Articles Body */}
              <div className="space-y-6 text-justify">
                {filteredArticles.map((art) => {
                  const label = art.articleLabel || `Artículo ${art.articleNumber}`;
                  return (
                    <div key={art.id} id={art.id} className="pt-2">
                      <h4 className="font-sans font-bold text-slate-900 text-sm border-b border-slate-200 pb-1 flex items-baseline justify-between">
                        <span>
                          <strong className="text-red-700 font-black mr-2">{label}.</strong>
                          {art.title}
                        </span>
                        <span className="text-[10px] text-slate-500 font-mono font-normal">
                          {art.chapter}
                        </span>
                      </h4>
                      <p className="mt-2 text-slate-800 whitespace-pre-line text-xs sm:text-sm leading-relaxed">
                        {art.content}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Document Signatures Seal */}
              <div className="mt-12 pt-6 border-t-2 border-slate-300 font-sans grid grid-cols-2 gap-6 text-center text-xs text-slate-700">
                <div className="p-3 bg-slate-50 rounded border border-slate-200">
                  <p className="font-bold text-slate-900">Por la Representación Social</p>
                  <p className="text-red-700 font-bold text-[11px] mt-0.5">Sección Sindical UGT</p>
                  <p className="text-[10px] text-slate-500 italic mt-1">Comité de Empresa LV-RSU Vitoria-Gasteiz</p>
                </div>
                <div className="p-3 bg-slate-50 rounded border border-slate-200">
                  <p className="font-bold text-slate-900">Por la Empresa Concesionaria</p>
                  <p className="text-slate-800 font-bold text-[11px] mt-0.5">Fomento de Construcciones y Contratas, SA</p>
                  <p className="text-[10px] text-slate-500 italic mt-1">Delegación de Vitoria-Gasteiz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Regular Card Flow */
        <div className="space-y-3">
          {filteredArticles.length === 0 ? (
            <div className="bg-white rounded-2xl p-8 text-center border border-slate-200">
              <p className="text-sm font-bold text-slate-800">No hay artículos en este capítulo</p>
              <button
                onClick={() => setSelectedChapter('todos')}
                className="mt-3 text-xs font-bold text-[#D3122A] hover:underline cursor-pointer"
              >
                Ver todos los capítulos
              </button>
            </div>
          ) : (
            filteredArticles.map((art) => {
              const label = art.articleLabel || `Art. ${art.articleNumber}`;
              return (
                <div
                  key={art.id}
                  id={art.id}
                  className="bg-white rounded-2xl p-4 sm:p-5 shadow-xs border border-slate-200/90 hover:border-red-200 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                        {art.chapter}
                      </span>
                      <h3 className="text-sm sm:text-base font-black text-slate-900 mt-0.5">
                        <span className="text-[#D3122A] mr-1.5">{label}:</span>
                        {art.title}
                      </h3>
                    </div>

                    <button
                      onClick={() => handleCopyArticle(art)}
                      title="Copiar texto del artículo"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors shrink-0 cursor-pointer"
                    >
                      {copiedId === art.id ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Share2 className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  <div className="text-xs sm:text-sm text-slate-700 mt-3 leading-relaxed whitespace-pre-line">
                    {art.content}
                  </div>

                  {/* Keywords tags */}
                  {art.keywords && art.keywords.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] uppercase font-semibold text-slate-400 mr-1">
                        Materias:
                      </span>
                      {art.keywords.map((k, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] text-slate-600 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100 font-medium"
                        >
                          #{k}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};
