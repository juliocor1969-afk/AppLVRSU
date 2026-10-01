import React, { useState } from 'react';
import {
  Building2,
  Phone,
  MapPin,
  Bot,
  Navigation,
  Hospital,
  Mail,
  Printer,
  Clock,
  AlertTriangle,
  MessageCircle,
} from 'lucide-react';

interface Props {
  initialTab?: 'empresa' | 'mutua';
}

export const ContactoAccionaSection: React.FC<Props> = ({ initialTab = 'empresa' }) => {
  const [activeTab, setActiveTab] = useState<'empresa' | 'mutua'>(initialTab);

  return (
    <div className="space-y-4 pb-12">
      {/* Title Header Card */}
      <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center text-[#D3122A] shrink-0">
            {activeTab === 'empresa' ? (
              <Building2 className="w-6 h-6" />
            ) : (
              <Hospital className="w-6 h-6" />
            )}
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
              EMPRESA Y MUTUA
            </h2>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Acciona Servicios Urbanos y MC-MUTUAL
            </p>
          </div>
        </div>
      </div>

      {/* Segmented Tab Switcher */}
      <div className="grid grid-cols-2 p-1 bg-slate-200/90 rounded-2xl gap-1">
        <button
          onClick={() => setActiveTab('empresa')}
          className={`py-3 px-4 rounded-xl font-black text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
            activeTab === 'empresa'
              ? 'bg-white text-slate-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Building2 className={`w-4 h-4 ${activeTab === 'empresa' ? 'text-[#D3122A]' : 'text-slate-500'}`} />
          <span>Empresa</span>
        </button>

        <button
          onClick={() => setActiveTab('mutua')}
          className={`py-3 px-4 rounded-xl font-black text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
            activeTab === 'mutua'
              ? 'bg-white text-slate-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Hospital className={`w-4 h-4 ${activeTab === 'mutua' ? 'text-[#D3122A]' : 'text-slate-500'}`} />
          <span>Mutua</span>
        </button>
      </div>

      {/* EMPRESA TAB CONTENT */}
      {activeTab === 'empresa' && (
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200 space-y-4">
            <div>
              <span className="text-[11px] font-black text-[#D3122A] uppercase tracking-wider">
                Empresa
              </span>
              <h3 className="text-lg font-black text-slate-900 mt-1">
                Acciona Servicios Urbanos, S.L.
              </h3>
            </div>

            {/* Dirección */}
            <div className="p-3.5 bg-slate-50 rounded-xl space-y-1 text-xs text-slate-700">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D3122A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900 text-sm">Calle Aguirrelanda, 4,</p>
                  <p className="text-slate-600 font-medium">01013 – vitoria-Gasteiz</p>
                </div>
              </div>
            </div>

            {/* Teléfonos Empresa */}
            <div className="space-y-2.5">
              {/* Teléfono */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs text-slate-500 font-bold block">
                    Teléfono:
                  </span>
                  <div className="font-mono font-bold text-base text-slate-900 mt-0.5">
                    679526007
                  </div>
                </div>

                <a
                  href="tel:679526007"
                  className="py-2.5 px-4 bg-[#D3122A] hover:bg-[#b50e23] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-xs self-start sm:self-center shrink-0"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Llamar (679526007)</span>
                </a>
              </div>

              {/* Asistente virtual */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs text-slate-500 font-bold block">
                    Asistente virtual:
                  </span>
                  <div className="font-mono font-bold text-base text-slate-900 mt-0.5">
                    932075053
                  </div>
                </div>

                <a
                  href="https://wa.me/34932075053"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-xs self-start sm:self-center shrink-0"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Mapa Ubicación */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Calle+Aguirrelanda+4+Vitoria-Gasteiz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors block text-center"
            >
              <Navigation className="w-3.5 h-3.5 text-[#D3122A] inline" />
              <span>Ver Ubicación en Google Maps (Aguirrelanda, 4)</span>
            </a>
          </div>
        </div>
      )}

      {/* MUTUA TAB CONTENT */}
      {activeTab === 'mutua' && (
        <div className="space-y-4">
          {/* Main Mutua Card */}
          <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200 space-y-4">
            <div>
              <span className="text-[11px] font-black text-[#D3122A] uppercase tracking-wider">
                Mutua
              </span>
              <h3 className="text-lg font-black text-slate-900 mt-1">
                Centro asistencial - MC Mutual
              </h3>
            </div>

            {/* Dirección */}
            <div className="p-3.5 bg-slate-50 rounded-xl space-y-1 text-xs text-slate-700">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D3122A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900 text-sm">
                    Pintor Ignacio Díaz de Olano, 7-9
                  </p>
                  <p className="text-slate-600 font-medium">01008 Vitoria-Gasteiz</p>
                </div>
              </div>
            </div>

            {/* Teléfono, Fax, Email */}
            <div className="space-y-2.5">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
                <div>
                  <span className="text-xs text-slate-500 font-bold block">Teléfono:</span>
                  <div className="font-mono font-bold text-base text-slate-900">945 150 850</div>
                </div>
                <a
                  href="tel:945150850"
                  className="py-2 px-3.5 bg-[#D3122A] hover:bg-[#b50e23] text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Llamar</span>
                </a>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-slate-500 font-bold block">Fax:</span>
                  <span className="font-mono font-semibold text-slate-800">945 146 614</span>
                </div>
                <Printer className="w-4 h-4 text-slate-400" />
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-slate-500 font-bold block">E-mail:</span>
                  <a
                    href="mailto:vitoria@mc-mutual.com"
                    className="font-medium text-[#D3122A] hover:underline"
                  >
                    vitoria@mc-mutual.com
                  </a>
                </div>
                <Mail className="w-4 h-4 text-slate-400" />
              </div>
            </div>

            {/* Horarios */}
            <div className="space-y-2 pt-1 text-xs">
              <div className="p-3.5 bg-slate-50 rounded-xl space-y-1">
                <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#D3122A]" />
                  Horario atención asistencial:
                </span>
                <p className="text-slate-700 leading-relaxed font-medium">
                  De 8:00 a 17:30 de lunes a jueves. Viernes de 8:00 a 14:30
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl space-y-1">
                <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-600" />
                  Horario oficinas:
                </span>
                <p className="text-slate-700 leading-relaxed font-medium">
                  De 8:00 a 18:00 de lunes a jueves. Viernes de 8:00 a 15:00
                </p>
              </div>
            </div>

            {/* Google maps link */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Calle+Pintor+Ignacio+Diaz+de+Olano+7+Vitoria-Gasteiz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors block text-center"
            >
              <Navigation className="w-3.5 h-3.5 text-[#D3122A] inline" />
              <span>Ver Ubicación Centro Asistencial (Google Maps)</span>
            </a>
          </div>

          {/* Urgencias Quirón Card */}
          <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200 space-y-4">
            <div>
              <span className="text-[11px] font-black text-[#D3122A] uppercase tracking-wider">
                Urgencias
              </span>
              <h3 className="text-lg font-black text-slate-900 mt-1">
                Hospital Quirón - La Esperanza - Vitoria-Gasteiz
              </h3>
            </div>

            {/* Dirección Quirón */}
            <div className="p-3.5 bg-slate-50 rounded-xl space-y-1 text-xs text-slate-700">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D3122A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900 text-sm">La Esperanza, 3</p>
                  <p className="text-slate-600 font-medium">01002 Vitoria-Gasteiz</p>
                </div>
              </div>
            </div>

            {/* Teléfono Urgencias */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
              <div>
                <span className="text-xs text-slate-500 font-bold block">Teléfono:</span>
                <div className="font-mono font-bold text-base text-slate-900">945 252 500</div>
              </div>
              <a
                href="tel:945252500"
                className="py-2 px-3.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Llamar Urgencias</span>
              </a>
            </div>

            {/* Servicios */}
            <div className="p-3.5 bg-slate-50 rounded-xl space-y-1 text-xs text-slate-700">
              <span className="font-bold text-slate-900 block">Servicios:</span>
              <p className="font-medium text-slate-700 leading-relaxed">
                Rehabilitación / Fisioterapia, Consultas externas, Urgencias 24 horas
              </p>
            </div>

            {/* Horario atención asistencial & Volante */}
            <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl space-y-1 text-xs text-red-950">
              <span className="font-bold text-[#D3122A] block flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-[#D3122A]" />
                Horario atención asistencial:
              </span>
              <p className="font-bold leading-relaxed">
                Urgencias 24 h Sin Hospitalización. Imprescindible acudir con volante de asistencia
              </p>
            </div>

            {/* Google maps link Quirón */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Calle+La+Esperanza+3+Vitoria-Gasteiz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors block text-center"
            >
              <Navigation className="w-3.5 h-3.5 text-[#D3122A] inline" />
              <span>Ver Ubicación Hospital Quirón (Google Maps)</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
