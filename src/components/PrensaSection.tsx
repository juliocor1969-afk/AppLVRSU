import React, { useState, useEffect, useMemo } from 'react';
import {
  Newspaper,
  Calendar,
  ExternalLink,
  RefreshCw,
  Loader2,
  AlertCircle,
  Globe,
} from 'lucide-react';

export interface RawPrensaItem {
  id: number | string;
  fecha?: string;
  date?: string;
  medio?: string;
  media?: string;
  fuente?: string;
  periodico?: string;
  titular?: string;
  titulo?: string;
  title?: string;
  headline?: string;
  enlace?: string;
  url?: string;
  link?: string;
  linkUrl?: string;
  resumen?: string;
  summary?: string;
  descripcion?: string;
  texto?: string;
}

export interface PrensaItem {
  id: number;
  date: string;
  media: string;
  headline: string;
  url: string;
  summary?: string;
}

const PRIMARY_URL = 'https://juliocor1969-afk.github.io/AppLVRSU/prensa.json';
const FALLBACK_URL_1 = 'https://juliocor1969-afk.github.io/AppLVRSU/public/prensa.json';
const FALLBACK_URL_2 = 'https://raw.githubusercontent.com/juliocor1969-afk/AppLVRSU/main/public/prensa.json';
const FALLBACK_URL_3 = 'https://raw.githubusercontent.com/juliocor1969-afk/AppLVRSU/main/prensa.json';

// Default initial items while the server JSON is populated
const DEFAULT_PRENSA_ITEMS: PrensaItem[] = [
  {
    id: 5,
    date: 'Febrero 2026',
    media: 'Noticias de Álava',
    headline: 'UGT ratifica la subida salarial vinculada al IPC para la plantilla de Limpieza Viaria y RSU de Vitoria',
    url: 'https://www.noticiasdealava.eus/',
    summary:
      'La representación sindical de UGT en el servicio de limpieza pública viaria y recogida de basuras acuerda la aplicación de las nuevas tablas salariales con efecto retroactivo.',
  },
  {
    id: 4,
    date: 'Noviembre 2025',
    media: 'El Correo',
    headline: 'UGT exige reforzar las medidas de prevención térmica y seguridad laboral en las lonjas de Vitoria',
    url: 'https://www.elcorreo.com/alava/',
    summary:
      'El sindicato demanda a través del Comité de Seguridad y Salud protocolos más estrictos ante condiciones climatológicas adversas y adecuación ergonómica.',
  },
  {
    id: 3,
    date: 'Agosto 2025',
    media: 'Gasteiz Hoy',
    headline: 'UGT destaca la profesionalidad del personal de limpieza durante las Fiestas de La Blanca',
    url: 'https://www.gasteizhoy.com/',
    summary:
      'Reconocimiento al sobreesfuerzo de los equipos de barrido y recogida tras los actos multitudinarios de las fiestas patronales.',
  },
  {
    id: 2,
    date: 'Mayo 2025',
    media: 'Cadena SER',
    headline: 'Acuerdo para la homologación y estabilidad de la contrata de limpieza de Vitoria-Gasteiz',
    url: 'https://cadenaser.com/radio-vitoria/',
    summary:
      'UGT Servicios Públicos logra un marco de garantías para consolidar derechos laborales y conciliación para toda la plantilla.',
  },
  {
    id: 1,
    date: 'Febrero 2025',
    media: 'El Correo',
    headline: 'Plan de choque para la renovación de EPIs y calzado ergonómico en la contrata municipal',
    url: 'https://www.elcorreo.com/alava/',
    summary:
      'La interlocución sindical de UGT consigue el compromiso de renovación de uniformidad y calzado con mayor amortiguación.',
  },
];

// Badge styling helper according to the media outlet
function getMediaBadgeStyle(mediaName: string): { bg: string; text: string; border: string } {
  const m = mediaName.toLowerCase();
  if (m.includes('correo')) {
    return { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' };
  }
  if (m.includes('noticias') || m.includes('álava') || m.includes('alava')) {
    return { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' };
  }
  if (m.includes('gasteiz') || m.includes('hoy')) {
    return { bg: 'bg-amber-50', text: 'text-amber-800', border: 'border-amber-200' };
  }
  if (m.includes('ser') || m.includes('cadena')) {
    return { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200' };
  }
  if (m.includes('eitb') || m.includes('radio')) {
    return { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200' };
  }
  return { bg: 'bg-red-50', text: 'text-[#D3122A]', border: 'border-red-100' };
}

export const PrensaSection: React.FC = () => {
  const [news, setNews] = useState<PrensaItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPrensa = async () => {
    setLoading(true);
    setError(null);

    const urls = [PRIMARY_URL, FALLBACK_URL_1, FALLBACK_URL_2, FALLBACK_URL_3];
    let fetchedData: RawPrensaItem[] | null = null;
    let lastErrorMsg = '';

    for (const url of urls) {
      try {
        const response = await fetch(url, { cache: 'no-cache' });
        if (response.ok) {
          const json = await response.json();
          if (Array.isArray(json) && json.length > 0) {
            fetchedData = json;
            break;
          }
        } else {
          lastErrorMsg = `HTTP ${response.status}`;
        }
      } catch (err: any) {
        lastErrorMsg = err?.message || 'Error de conexión';
      }
    }

    if (!fetchedData) {
      // Check localStorage cache
      try {
        const cached = localStorage.getItem('ugt_prensa_cache');
        if (cached) {
          const parsed = JSON.parse(cached);
          if (Array.isArray(parsed) && parsed.length > 0) {
            fetchedData = parsed;
          }
        }
      } catch (e) {
        // ignore
      }
    }

    if (fetchedData && fetchedData.length > 0) {
      try {
        localStorage.setItem('ugt_prensa_cache', JSON.stringify(fetchedData));
      } catch (e) {
        // ignore
      }

      // Normalize items
      const normalized: PrensaItem[] = fetchedData.map((raw, index) => {
        const idNum = typeof raw.id === 'number' ? raw.id : parseInt(String(raw.id), 10) || (index + 1);
        const dateStr = raw.fecha || raw.date || '';
        const mediaStr = raw.medio || raw.media || raw.fuente || raw.periodico || 'Prensa';
        const headlineStr = raw.titular || raw.titulo || raw.title || raw.headline || 'Noticia de prensa';
        const urlStr = raw.enlace || raw.url || raw.link || raw.linkUrl || 'https://ugt-sp.es/';
        const summaryStr = raw.resumen || raw.summary || raw.descripcion || raw.texto || '';

        return {
          id: idNum,
          date: dateStr,
          media: mediaStr,
          headline: headlineStr,
          url: urlStr,
          summary: summaryStr,
        };
      });

      // Sort by id descending (highest id first)
      normalized.sort((a, b) => b.id - a.id);

      setNews(normalized);
      setLoading(false);
    } else {
      // Fallback to default items if endpoint is empty/404 during server upload
      setNews(DEFAULT_PRENSA_ITEMS);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrensa();
  }, []);

  // Display 5 latest items by id descending
  const displayedItems = useMemo(() => {
    return [...news].sort((a, b) => b.id - a.id).slice(0, 5);
  }, [news]);

  return (
    <div className="space-y-4 pb-12">
      {/* Header Card */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-xs border border-slate-200">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-[#D3122A] shrink-0">
              <Newspaper className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                PRENSA
              </h2>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                Últimas noticias en los medios de comunicación
              </p>
            </div>
          </div>

          <button
            onClick={fetchPrensa}
            disabled={loading}
            title="Recargar noticias de prensa"
            className="p-2 text-slate-600 hover:text-[#D3122A] hover:bg-red-50 rounded-xl transition-colors cursor-pointer disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-[#D3122A]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Loading State */}
      {loading && news.length === 0 && (
        <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 flex flex-col items-center justify-center gap-3">
          <Loader2 className="w-6 h-6 animate-spin text-[#D3122A]" />
          <p className="text-xs sm:text-sm font-bold text-slate-700">Cargando noticias de prensa...</p>
        </div>
      )}

      {/* Error state */}
      {error && news.length === 0 && (
        <div className="bg-white rounded-2xl p-6 text-center border-2 border-red-100 space-y-3">
          <div className="w-10 h-10 rounded-full bg-red-50 text-[#D3122A] flex items-center justify-center mx-auto">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">No se pudieron cargar las noticias</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">{error}</p>
          </div>
          <button
            onClick={fetchPrensa}
            className="px-4 py-2 bg-[#D3122A] hover:bg-red-700 text-white rounded-xl text-xs font-bold transition-colors shadow-xs inline-flex items-center gap-1.5 cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reintentar</span>
          </button>
        </div>
      )}

      {/* News List */}
      <div className="space-y-3.5">
        {!loading && displayedItems.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 text-center border border-slate-200">
            <p className="text-sm font-bold text-slate-800">No hay noticias con este criterio</p>
            <p className="text-xs text-slate-500 mt-1">
              Prueba buscando por otro medio de comunicación o palabra clave.
            </p>
          </div>
        ) : (
          displayedItems.map((item) => {
            const badge = getMediaBadgeStyle(item.media);

            return (
              <article
                key={item.id}
                className="bg-white rounded-2xl p-4 sm:p-5 shadow-xs border border-slate-200 hover:border-slate-300 transition-all space-y-3"
              >
                {/* Top Row: Media Badge + Date */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span
                    className={`px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wide border ${badge.bg} ${badge.text} ${badge.border}`}
                  >
                    {item.media}
                  </span>

                  {item.date && (
                    <div className="flex items-center gap-1 text-xs text-slate-500 font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-[#D3122A]" />
                      <span>{item.date}</span>
                    </div>
                  )}
                </div>

                {/* Headline (Titular bien visible) */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {item.headline}
                </h3>

                {/* Optional Summary */}
                {item.summary && (
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.summary}
                  </p>
                )}

                {/* Bottom Row: External Link Button */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-3 flex-wrap">
                  <span className="text-[11px] text-slate-400 font-medium">
                    Sección Sindical UGT · Vitoria
                  </span>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-900 hover:bg-[#D3122A] text-white rounded-xl text-xs font-bold transition-all shadow-xs group cursor-pointer"
                  >
                    <span>Abrir noticia completa</span>
                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </article>
            );
          })
        )}
      </div>
    </div>
  );
};

// Also export alias for compatibility
export const FotografiasPrensaSection = PrensaSection;
