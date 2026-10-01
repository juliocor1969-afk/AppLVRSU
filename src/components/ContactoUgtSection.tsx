import React, { useState } from 'react';
import { Phone, MapPin, MessageCircle, Navigation, Download, Check, Building2 } from 'lucide-react';

export const ContactoUgtSection: React.FC = () => {
  const [vcfSaved, setVcfSaved] = useState(false);

  // Generate vCard (.vcf) for instant contact import in mobile devices
  const handleSaveContactVcf = () => {
    const vcard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'FN:UGT Sección Sindical LV-RSU',
      'N:LV-RSU;Sección Sindical;UGT;;',
      'ORG:UGT Servicios Públicos Euskadi',
      'TITLE:Sección Sindical Limpieza Viaria y RSU Vitoria-Gasteiz',
      'TEL;TYPE=CELL,VOICE,PREF:648928661',
      'TEL;TYPE=WORK,VOICE:945150438',
      'ADR;TYPE=WORK:;;San Antonio, 45 1ª planta oficina 12;Vitoria-Gasteiz;Álava;01005;España',
      'NOTE:Memorizado para recibir las comunicaciones oficiales por WhatsApp.',
      'END:VCARD',
    ].join('\r\n');

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'UGT_Seccion_Sindical_LV_RSU.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setVcfSaved(true);
    setTimeout(() => setVcfSaved(false), 3000);
  };

  const phoneNumbers = [
    {
      label: 'Centralita',
      number: '945150438',
      display: '945 150 438',
      hasWhatsApp: false,
    },
    {
      label: 'Federación de Servicios Públicos',
      number: '607536691',
      display: '607 536 691',
      hasWhatsApp: false,
    },
    {
      label: 'Sección Sindical y lista de difusión',
      number: '648928661',
      display: '648 928 661',
      hasWhatsApp: true,
      isPrimary: true,
    },
    {
      label: 'Sección Sindical',
      number: '630764182',
      display: '630 764 182',
      hasWhatsApp: false,
    },
  ];

  return (
    <div className="space-y-4 pb-12">
      {/* Title Header Card */}
      <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center text-[#D3122A] shrink-0">
            <Phone className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
              CONTACTO
            </h2>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              UGT Servicios Públicos Euskadi · Vitoria-Gasteiz
            </p>
          </div>
        </div>
      </div>

      {/* Mandatory WhatsApp Notice Card */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-5 shadow-md space-y-3">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="text-[10px] uppercase font-black bg-white text-[#D3122A] px-2 py-0.5 rounded-full inline-block">
              Aviso Importante
            </span>
            <p className="text-xs sm:text-sm font-bold text-white mt-1.5 leading-snug">
              «Recuerda que tienes que tener memorizado en tu teléfono el número de la Sección Sindical LV-RSU para recibir las comunicaciones por whatsapp.»
            </p>
            <p className="text-[11px] text-white/90 mt-1">
              Número oficial: <strong>648 928 661</strong>
            </p>
          </div>
        </div>

        <div className="pt-1 flex flex-col sm:flex-row gap-2">
          <button
            onClick={handleSaveContactVcf}
            className="flex-1 py-2.5 bg-white text-[#D3122A] hover:bg-slate-100 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
          >
            {vcfSaved ? <Check className="w-4 h-4 text-emerald-600" /> : <Download className="w-4 h-4" />}
            <span>{vcfSaved ? '¡Contacto Guardado!' : 'Guardar en mi Agenda (648 928 661)'}</span>
          </button>

          <a
            href="https://wa.me/34648928661"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Sede Card */}
      <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200 space-y-3">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
          <div className="w-9 h-9 rounded-xl bg-red-50 text-[#D3122A] flex items-center justify-center shrink-0">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-black text-slate-900 leading-tight">
              Sede
            </h3>
            <span className="text-[11px] text-slate-500 font-medium">UGT Vitoria-Gasteiz</span>
          </div>
        </div>

        <div className="p-3.5 bg-slate-50 rounded-xl space-y-1 text-xs text-slate-700">
          <p className="font-bold text-slate-900 text-sm">
            San Antonio, 45 1ª planta oficina 12
          </p>
          <p className="text-slate-600 font-medium">
            01005 Vitoria-Gasteiz
          </p>
        </div>

        <a
          href="https://www.google.com/maps/search/?api=1&query=San+Antonio+45+Vitoria-Gasteiz"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-xs"
        >
          <Navigation className="w-4 h-4 text-red-400" />
          <span>Abrir Ubicación en Google Maps</span>
        </a>
      </div>

      {/* Teléfonos Card */}
      <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200 space-y-3">
        <div className="pb-2 border-b border-slate-100">
          <h3 className="text-base font-black text-slate-900 leading-tight">
            Teléfonos de Contacto
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Llama directamente pulsando sobre cualquiera de las líneas
          </p>
        </div>

        <div className="space-y-2.5">
          {phoneNumbers.map((p, idx) => (
            <div
              key={idx}
              className={`p-3.5 sm:p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                p.isPrimary
                  ? 'bg-red-50/50 border-red-200 ring-1 ring-red-100'
                  : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    {p.label}
                  </h4>
                </div>
                <div className="font-mono font-bold text-sm sm:text-base text-slate-900 mt-1">
                  {p.display}
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
                {p.hasWhatsApp && (
                  <a
                    href={`https://wa.me/34${p.number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                )}
                <a
                  href={`tel:${p.number}`}
                  className="py-2.5 px-3.5 bg-[#D3122A] hover:bg-[#b50e23] text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Llamar</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
