import React from 'react';
import { Scale, Calculator, ShieldCheck, HeartPulse, Users, Briefcase, BookOpen, UserCheck } from 'lucide-react';
import { UNION_SERVICES } from '../data/mockData';

export const AfiliadosSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scale':
        return <Scale className="w-5 h-5 text-[#D3122A]" />;
      case 'Calculator':
        return <Calculator className="w-5 h-5 text-[#D3122A]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#D3122A]" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-[#D3122A]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#D3122A]" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-[#D3122A]" />;
      default:
        return <BookOpen className="w-5 h-5 text-[#D3122A]" />;
    }
  };

  return (
    <div className="space-y-4 pb-12">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-[#D3122A] shrink-0">
            <UserCheck className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-semibold text-[#D3122A] uppercase tracking-wider">
              Ventajas y Coberturas
            </span>
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Servicios para Afiliados/afiliadas
            </h2>
          </div>
        </div>
        <p className="text-xs text-slate-600 mt-2 leading-relaxed">
          Catálogo de coberturas, asesoría y servicios exclusivos a disposición de las personas afiliadas a UGT en el centro de trabajo y a nivel general.
        </p>
      </div>

      {/* Union Services Catalog */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide px-1">
          Servicios del Sindicato UGT para Afiliados/afiliadas
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {UNION_SERVICES.map((srv, idx) => (
            <div
              key={idx}
              className="p-4 bg-white rounded-2xl shadow-sm border border-slate-200 flex gap-3.5"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                {getIcon(srv.iconName)}
              </div>
              <div className="space-y-1">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">{srv.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{srv.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
