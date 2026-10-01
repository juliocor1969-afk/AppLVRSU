import React from 'react';
import {
  HeartHandshake,
  ArrowUpRight,
  Globe,
  FileCheck2,
  Layers,
  HeartPulse,
  Info,
} from 'lucide-react';

export const FundacionSanPrudencioSection: React.FC = () => {
  const options = [
    {
      title: 'Web de la Fundación',
      description: 'Acceso al portal general y servicios de la Fundación Laboral San Prudencio.',
      url: 'https://www.lafundacion.com/',
      icon: Globe,
      badge: 'Portal Oficial',
    },
    {
      title: 'Nominativa',
      description: '60 euros para que gastes en un numeroso grupo de empresas y establecimientos.',
      url: 'https://www.lafundacion.com/personas/nominativa/',
      icon: FileCheck2,
      badge: 'Ayuda Directa',
    },
    {
      title: 'Complementaria',
      description: 'Prestaciones complementarias y programas de apoyo para familias y personas trabajadoras.',
      url: 'https://www.lafundacion.com/personas/complementaria/',
      icon: Layers,
      badge: 'Prestaciones',
    },
    {
      title: 'Ayudas salud laboral',
      description: 'Programas específicos de prevención, salud y bienestar en el ámbito laboral.',
      url: 'https://www.lafundacion.com/personas/ayudas-salud-laboral/',
      icon: HeartPulse,
      badge: 'Salud y Bienestar',
    },
  ];

  return (
    <div className="space-y-4 pb-12">
      {/* Title Header Card */}
      <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center text-[#D3122A] shrink-0">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
              FUNDACIÓN LABORAL SAN PRUDENCIO
            </h2>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Prestaciones, coberturas y ayudas sociales
            </p>
          </div>
        </div>
      </div>

      {/* Options Grid / List */}
      <div className="space-y-3">
        {options.map((opt, idx) => {
          const IconComponent = opt.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 sm:p-5 shadow-xs border border-slate-200 hover:border-[#D3122A] transition-all space-y-3"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-[#D3122A] shrink-0 mt-0.5">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-slate-900 leading-tight">
                        {opt.title}
                      </h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                        {opt.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {opt.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-1 flex justify-end">
                <a
                  href={opt.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#D3122A] hover:bg-[#b50e23] text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
                >
                  <span>Ver web</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mandatory Notice at the bottom */}
      <div className="bg-white rounded-2xl p-5 shadow-xs border-2 border-red-100 space-y-3">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-red-50 text-[#D3122A] flex items-center justify-center shrink-0 mt-0.5">
            <Info className="w-5 h-5" />
          </div>
          <div className="space-y-1.5">
            <span className="text-[10px] font-black uppercase tracking-wider bg-red-100 text-[#D3122A] px-2 py-0.5 rounded-full inline-block">
              Información Importante
            </span>
            <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
              «Todos los trabajadores/trabajadoras con un contrato que se estime superior a un año, podrán solicitar que se les de de alta en la Fundación Laboral San Prudencio.
            </p>
            <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
              Si aún no estás dado de alta o tienes dudas, ponte en contacto con tus delegados/delegadas sindicales»
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
