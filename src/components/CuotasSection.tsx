import React from 'react';
import { CreditCard, Info, MessageCircle, PhoneCall, CheckCircle2 } from 'lucide-react';

export const CuotasSection: React.FC = () => {
  return (
    <div className="space-y-4 pb-12">
      {/* Title Header Card */}
      <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center text-[#D3122A] shrink-0">
            <CreditCard className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
              CUOTAS
            </h2>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Cuotas de afiliación sindical UGT
            </p>
          </div>
        </div>
      </div>

      {/* 1. Cuota Básica Card */}
      <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-100">
          <h3 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D3122A]" />
            Cuota Básica
          </h3>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 text-[#D3122A] rounded-xl font-black text-sm sm:text-base self-start sm:self-auto">
            <span>16,50 euros mensuales</span>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
          Cuota ordinaria general para personas trabajadoras afiliadas a UGT.
        </p>
      </div>

      {/* 2. Cuota Reducida Card */}
      <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-100">
          <h3 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            Cuota Reducida
          </h3>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-800 rounded-xl font-black text-sm sm:text-base self-start sm:self-auto">
            <span>11,35 euros mensuales</span>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
          Esta cuota reducida es para aquellos trabajadores/trabajadoras cuyos ingresos anuales íntegros sean iguales o inferiores de 14.000€.
        </p>
      </div>

      {/* 3. Cuotas Especiales para Jubilados y Parados (tipo D) Card */}
      <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-100">
          <h3 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
            Cuotas Especiales para Jubilados y Parados (tipo D)
          </h3>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 rounded-xl font-black text-sm sm:text-base self-start sm:self-auto">
            <span>4,75 euros mensuales</span>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
          Se aplicará a las personas cuyos ingresos anuales íntegros sean inferiores a 1,50 veces el Salario Mínimo Interprofesional y a los afiliados/afiliadas que se encuentren en situación de paro y carezcan de ingresos o prestaciones.
        </p>
      </div>

      {/* Notice on IRPF Tax Deduction */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 flex items-start gap-3">
        <div className="w-8 h-8 rounded-xl bg-slate-200 flex items-center justify-center shrink-0 mt-0.5 text-slate-700">
          <Info className="w-4 h-4" />
        </div>
        <div className="space-y-1 text-xs text-slate-600 leading-relaxed">
          <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
            100% Desgravable en la Declaración de la Renta
          </h4>
          <p>
            Recuerda que la cuota satisfecha a sindicatos es íntegramente deducible en el IRPF (Hacienda Foral de Álava), por lo que el coste real neto es aún menor.
          </p>
        </div>
      </div>

      {/* Contact / Join Action */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-5 shadow-sm space-y-3">
        <div className="space-y-1">
          <h4 className="text-sm sm:text-base font-bold text-white">
            ¿Deseas afiliarte?
          </h4>
          <p className="text-xs text-white/90 leading-relaxed">
            Contacta con los delegados/delegadas de la Sección Sindical de Limpieza Viaria y RSU en Vitoria-Gasteiz.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <a
            href="tel:648928661"
            className="px-3.5 py-2 bg-white text-[#D3122A] hover:bg-slate-100 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Llamar (648 928 661)</span>
          </a>

          <a
            href="https://wa.me/34648928661?text=Hola,%20deseo%20informaci%C3%B3n%20sobre%20las%20cuotas%20y%20afiliaci%C3%B3n%20a%20UGT."
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp Sección Sindical</span>
          </a>
        </div>
      </div>
    </div>
  );
};
