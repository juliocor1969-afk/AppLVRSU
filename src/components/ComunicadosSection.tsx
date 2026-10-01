import React, { useState, useEffect } from 'react';
import {
  Bell,
  Calendar,
  ChevronDown,
  ChevronUp,
  RefreshCw,
  ImageIcon,
  Maximize2,
  AlertCircle,
  Loader2,
  X,
} from 'lucide-react';

export interface RawComunicado {
  id: number | string;
  fecha?: string;
  date?: string;
  titulo?: string;
  title?: string;
  texto?: string;
  summary?: string;
  fullContent?: string;
  imagen?: string;
  image?: string;
}

export interface ComunicadoItem {
  id: number;
  date: string;
  title: string;
  text: string;
  image?: string;
}

const PRIMARY_URL = 'https://juliocor1969-afk.github.io/AppLVRSU/comunicados.json';
const FALLBACK_URL_1 = 'https://juliocor1969-afk.github.io/AppLVRSU/public/comunicados.json';
const FALLBACK_URL_2 = 'https://raw.githubusercontent.com/juliocor1969-afk/AppLVRSU/main/public/comunicados.json';

// Helper to score dates for sorting: highest score = most recent date
function parseDateScore(dateStr?: string): number {
  if (!dateStr) return 0;
  const cleaned = dateStr.trim();
  // Format DD/MM/YYYY or DD-MM-YYYY
  const dmyMatch = cleaned.match(/^(\d{1,2})[/.-](\d{1,2})[/.-](\d{4})$/);
  if (dmyMatch) {
    const day = parseInt(dmyMatch[1], 10);
    const month = parseInt(dmyMatch[2], 10);
    const year = parseInt(dmyMatch[3], 10);
    return year * 10000 + month * 100 + day;
  }
  // Format YYYY-MM-DD
  const ymdMatch = cleaned.match(/^(\d{4})[/.-](\d{1,2})[/.-](\d{1,2})$/);
  if (ymdMatch) {
    const year = parseInt(ymdMatch[1], 10);
    const month = parseInt(ymdMatch[2], 10);
    const day = parseInt(ymdMatch[3], 10);
    return year * 10000 + month * 100 + day;
  }
  const timestamp = Date.parse(cleaned);
  return isNaN(timestamp) ? 0 : timestamp;
}

export const ComunicadosSection: React.FC = () => {
  const [comunicados, setComunicados] = useState<ComunicadoItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [expandedIds, setExpandedIds] = useState<Record<number, boolean>>({});
  const [selectedModalImage, setSelectedModalImage] = useState<string | null>(null);

  // Fetch comunicados with multi-source fallback
  const fetchComunicados = async () => {
    setLoading(true);
    setError(null);

    const urls = [PRIMARY_URL, FALLBACK_URL_1, FALLBACK_URL_2];
    let fetchedData: RawComunicado[] | null = null;
    let lastErrorMsg = '';

    for (const url of urls) {
      try {
        const response = await fetch(url, { cache: 'no-cache' });
        if (response.ok) {
          const json = await response.json();
          if (Array.isArray(json)) {
            fetchedData = json;
            break;
          }
        } else {
          lastErrorMsg = `HTTP ${response.status} en ${url}`;
        }
      } catch (err: any) {
        lastErrorMsg = err?.message || 'Error de conexión';
      }
    }

    if (!fetchedData) {
      // Check if we have cached data in localStorage
      try {
        const cached = localStorage.getItem('ugt_comunicados_cache');
        if (cached) {
          const parsed = JSON.parse(cached);
          if (Array.isArray(parsed) && parsed.length > 0) {
            fetchedData = parsed;
          }
        }
      } catch (e) {
        // ignore storage error
      }
    }

    if (fetchedData) {
      try {
        localStorage.setItem('ugt_comunicados_cache', JSON.stringify(fetchedData));
      } catch (e) {
        // ignore storage error
      }

      // Normalize items with their position in feed
      const normalized = fetchedData.map((raw, index) => {
        const idNum = typeof raw.id === 'number' ? raw.id : parseInt(String(raw.id), 10) || 0;
        const dateStr = raw.fecha || raw.date || '';
        const titleStr = raw.titulo || raw.title || 'Comunicado';
        const textStr = raw.texto || raw.fullContent || raw.summary || '';
        const imgStr = raw.imagen || raw.image || undefined;

        return {
          id: idNum,
          date: dateStr,
          title: titleStr,
          text: textStr,
          image: imgStr,
          originalIndex: index,
        };
      });

      // Sort from most recent/actual to oldest:
      // 1. By date descending (highest timestamp/score first)
      // 2. If dates are equal or missing, preserve original index order (or lower id first)
      normalized.sort((a, b) => {
        const scoreA = parseDateScore(a.date);
        const scoreB = parseDateScore(b.date);
        if (scoreA !== scoreB) {
          return scoreB - scoreA;
        }
        return a.originalIndex - b.originalIndex;
      });

      const finalItems: ComunicadoItem[] = normalized.map(({ originalIndex, ...rest }) => rest);

      setComunicados(finalItems);
      // Expand the first (most recent) item by default
      if (finalItems.length > 0) {
        setExpandedIds({ [finalItems[0].id]: true });
      }
      setLoading(false);
    } else {
      setError(`No se pudieron cargar los comunicados. (${lastErrorMsg})`);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComunicados();
  }, []);

  const toggleExpand = (id: number) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Normalizes image URLs and falls back to /public/ if needed
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, originalUrl: string) => {
    const target = e.currentTarget;
    if (!target.dataset.triedFallback) {
      target.dataset.triedFallback = '1';
      // If URL is https://juliocor1969-afk.github.io/AppLVRSU/file.png, try inserting public/
      if (originalUrl.includes('AppLVRSU/') && !originalUrl.includes('AppLVRSU/public/')) {
        target.src = originalUrl.replace('AppLVRSU/', 'AppLVRSU/public/');
        return;
      }
      // If that also failed or was different, try raw githubusercontent
      const filename = originalUrl.split('/').pop();
      if (filename) {
        target.src = `https://raw.githubusercontent.com/juliocor1969-afk/AppLVRSU/main/public/${filename}`;
        return;
      }
    }
  };

  return (
    <div className="space-y-4 pb-12">
      {/* Header Card */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-xs border border-slate-200">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-[#D3122A] shrink-0">
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                COMUNICADOS
              </h2>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                Comunicados de la Sección Sindical de UGT
              </p>
            </div>
          </div>

          <button
            onClick={fetchComunicados}
            disabled={loading}
            title="Recargar comunicados"
            className="p-2 text-slate-600 hover:text-[#D3122A] hover:bg-red-50 rounded-xl transition-colors cursor-pointer disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-[#D3122A]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Loading State */}
      {loading && comunicados.length === 0 && (
        <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 flex flex-col items-center justify-center gap-3">
          <Loader2 className="w-6 h-6 animate-spin text-[#D3122A]" />
          <p className="text-xs sm:text-sm font-bold text-slate-700">Cargando comunicados oficiales...</p>
        </div>
      )}

      {/* Error State */}
      {error && comunicados.length === 0 && (
        <div className="bg-white rounded-2xl p-6 text-center border-2 border-red-100 space-y-3">
          <div className="w-10 h-10 rounded-full bg-red-50 text-[#D3122A] flex items-center justify-center mx-auto">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">No se pudieron obtener los comunicados</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">{error}</p>
          </div>
          <button
            onClick={fetchComunicados}
            className="px-4 py-2 bg-[#D3122A] hover:bg-red-700 text-white rounded-xl text-xs font-bold transition-colors shadow-xs inline-flex items-center gap-1.5"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reintentar</span>
          </button>
        </div>
      )}

      {/* Comunicados List */}
      <div className="space-y-3.5">
        {!loading && comunicados.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 text-center border border-slate-200">
            <p className="text-sm font-bold text-slate-800">No hay comunicados disponibles</p>
            <p className="text-xs text-slate-500 mt-1">Pulsa en recargar para comprobar si hay nuevos avisos.</p>
          </div>
        ) : (
          comunicados.map((item) => {
            const isExpanded = !!expandedIds[item.id];

            return (
              <article
                key={item.id}
                className="bg-white rounded-2xl p-4 sm:p-5 shadow-xs border border-slate-200 hover:border-slate-300 transition-all space-y-3"
              >
                {/* Header metadata row with date */}
                {item.date && (
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-[#D3122A]" />
                    <span>{item.date}</span>
                  </div>
                )}

                {/* Title */}
                <h3
                  onClick={() => toggleExpand(item.id)}
                  className="text-base sm:text-lg font-bold text-slate-900 cursor-pointer hover:text-[#D3122A] transition-colors leading-snug"
                >
                  {item.title}
                </h3>

                {/* Content with paragraph structure and line breaks */}
                <div
                  onClick={() => toggleExpand(item.id)}
                  className={`text-xs sm:text-sm text-slate-700 leading-relaxed font-normal whitespace-pre-line cursor-pointer ${
                    !isExpanded ? 'line-clamp-3' : ''
                  }`}
                >
                  {item.text}
                </div>

                {/* Display Image if present */}
                {item.image && (
                  <div className="pt-1">
                    <div
                      onClick={() => setSelectedModalImage(item.image || null)}
                      className="relative rounded-xl overflow-hidden bg-slate-100 border border-slate-200 max-h-80 sm:max-h-96 group cursor-pointer"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        onError={(e) => handleImageError(e, item.image || '')}
                        className="w-full h-auto max-h-80 sm:max-h-96 object-contain bg-slate-50 group-hover:scale-[1.01] transition-transform duration-200"
                        loading="lazy"
                      />
                      <div className="absolute bottom-2.5 right-2.5 bg-black/60 hover:bg-black/80 backdrop-blur-xs text-white px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1.5 transition-colors">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Ver ampliada</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Expand / Collapse Button & Footer */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#D3122A] hover:text-red-800 transition-colors cursor-pointer"
                  >
                    <span>{isExpanded ? 'Mostrar menos' : 'Leer comunicado completo'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <div className="text-[11px] text-slate-400 font-medium">
                    UGT Limpieza y RSU
                  </div>
                </div>
              </article>
            );
          })
        )}
      </div>

      {/* Fullscreen Image Lightbox Modal */}
      {selectedModalImage && (
        <div
          onClick={() => setSelectedModalImage(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl"
          >
            <div className="flex items-center justify-between p-3.5 border-b border-slate-100 bg-slate-50">
              <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <ImageIcon className="w-4 h-4 text-[#D3122A]" />
                <span>Documento adjunto al comunicado</span>
              </span>
              <button
                onClick={() => setSelectedModalImage(null)}
                className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                title="Cerrar imagen"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-auto p-2 bg-slate-900/90 flex items-center justify-center min-h-[300px]">
              <img
                src={selectedModalImage}
                alt="Documento ampliado"
                onError={(e) => handleImageError(e, selectedModalImage || '')}
                className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
