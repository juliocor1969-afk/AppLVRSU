import React, { useState } from 'react';
import { School, Calendar, MapPin, Clock, CheckCircle2, Download, AlertCircle, BookmarkPlus } from 'lucide-react';
import { ESCUELAS_SINDICALES } from '../data/mockData';
import { EscuelaGroup } from '../types';

export const EscuelasSection: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<EscuelaGroup>(ESCUELAS_SINDICALES[0]);
  const [addedToast, setAddedToast] = useState(false);

  const handleDownloadCalendar = (group: EscuelaGroup) => {
    // Generate .ics calendar content
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//UGT Vitoria//Escuelas Sindicales 2026//ES',
      'CALSCALE:GREGORIAN',
      ...group.dates.map((d, index) => {
        return [
          'BEGIN:VEVENT',
          `SUMMARY:Escuela Sindical UGT - ${group.name}`,
          `DESCRIPTION:Sesión formativa UGT Limpieza y RSU. Fecha: ${d} 2026. Permiso retribuido.`,
          `LOCATION:${group.location}`,
          `UID:ugt-escuela-${group.id}-${index}@ugtvitoria.org`,
          'STATUS:CONFIRMED',
          'END:VEVENT',
        ].join('\n');
      }),
      'END:VCALENDAR',
    ].join('\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Escuelas_Sindicales_2026_${group.id}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 3000);
  };

  return (
    <div className="space-y-4 pb-12">
      {/* Header Info */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-[#D3122A] shrink-0">
            <School className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-semibold text-[#D3122A] uppercase tracking-wider">
              Formación Sindical
            </span>
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Escuelas Sindicales 2026
            </h2>
          </div>
        </div>
        <p className="text-xs text-slate-600 mt-2 leading-relaxed">
          Programa formativo anual para afiliados/afiliadas del servicio de Limpieza Viaria y RSU de Vitoria-Gasteiz. Fechas programadas para el año 2026 distribuidas en tres grupos.
        </p>

        {/* Group Selector Buttons */}
        <div className="mt-4 grid grid-cols-3 gap-2">
          {ESCUELAS_SINDICALES.map((group) => {
            const isSelected = selectedGroup.id === group.id;
            return (
              <button
                key={group.id}
                onClick={() => setSelectedGroup(group)}
                className={`py-2 px-2 rounded-xl text-xs font-bold transition-all text-center ${
                  isSelected
                    ? 'bg-[#D3122A] text-white shadow-sm ring-2 ring-red-200'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {group.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Group Card */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 space-y-4">
        <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <Calendar className="w-3.5 h-3.5 text-[#D3122A]" />
              <span>Día semanal: <strong>{selectedGroup.dayOfWeek}</strong></span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mt-0.5">{selectedGroup.name}</h3>
            {selectedGroup.description ? (
              <p className="text-xs text-slate-600 mt-0.5">{selectedGroup.description}</p>
            ) : null}
          </div>

          <button
            onClick={() => handleDownloadCalendar(selectedGroup)}
            className="px-3 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors shrink-0"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Guardar en Calendario</span>
            <span className="sm:hidden">Guardar</span>
          </button>
        </div>

        {addedToast && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Archivo de calendario (.ics) descargado. Puedes importarlo a Google Calendar o tu móvil.</span>
          </div>
        )}

        {/* Schedule & Location */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
          <div className="p-3 bg-slate-50 rounded-xl flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-[#D3122A] shrink-0" />
            <div>
              <span className="text-slate-500 block text-[11px]">Horario</span>
              <span className="font-semibold text-slate-900">{selectedGroup.schedule}</span>
            </div>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl flex items-center gap-2.5">
            <MapPin className="w-4 h-4 text-[#D3122A] shrink-0" />
            <div>
              <span className="text-slate-500 block text-[11px]">Lugar de impartición</span>
              <span className="font-semibold text-slate-900">{selectedGroup.location}</span>
            </div>
          </div>
        </div>

        {/* 2026 Dates List */}
        <div>
          <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-3 flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-[#D3122A]" />
            Fechas Programadas 2026 ({selectedGroup.dates.length} Sesiones)
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {selectedGroup.dates.map((date, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-red-200 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#D3122A] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">{date}</span>
                  </div>
                </div>
                <BookmarkPlus className="w-4 h-4 text-slate-400" />
              </div>
            ))}
          </div>
        </div>

        {/* Legal Rights Notice */}
        <div className="p-3.5 bg-red-50/70 border border-red-200/70 rounded-xl text-xs text-red-900 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-[#D3122A] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold">Derecho a Formación Sindical Retribuida</p>
            <div className="text-red-800 leading-relaxed space-y-1">
              <p>La asistencia a las Escuelas Sindicales está el Convenio Colectivo.</p>
              <p>El día de asistencia a la escuela sindical tienen la consideración de licencia retribuida.</p>
              <p>Si tienes cualquier duda, consulta con tu delegado/delegada.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
