import React from 'react';
import { Users } from 'lucide-react';
import { DELEGATES } from '../data/mockData';

export const DelegadosSection: React.FC = () => {
  return (
    <div className="space-y-4 pb-12">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-xs border border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-[#D3122A] shrink-0">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-semibold text-[#D3122A] uppercase tracking-wider">
              Representación Sindical UGT
            </span>
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Delegados/delegadas sindicales
            </h2>
          </div>
        </div>
        <p className="text-xs text-slate-600 mt-2 leading-relaxed">
          Tus compañeras y compañeros delegados/delegadas de UGT en el servicio de Limpieza Viaria y RSU del Ayuntamiento de Vitoria-Gasteiz a tu disposición.
        </p>
      </div>

      {/* Delegates Grid: showing solely name and role (no photos, no initial icons) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {DELEGATES.map((del, idx) => (
          <div
            key={idx}
            className="p-4 bg-white rounded-2xl shadow-xs border border-slate-200 transition-all hover:border-[#D3122A]/40"
          >
            <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
              {del.name}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-[#D3122A] mt-1 leading-snug">
              {del.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
