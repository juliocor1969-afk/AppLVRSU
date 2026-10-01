import React, { useState } from 'react';
import { Calendar, Download, Eye, FileText, Sun, Moon, X, Sparkles } from 'lucide-react';
import { WORK_SHIFT_GROUPS } from '../data/mockData';
import { WorkShiftCategory, WorkShiftGroup } from '../types';

// Month definitions for 2026 (year starts on Thursday)
const MONTHS_2026 = [
  { name: 'Urtarrila Enero', num: 1, days: 31, startDayOfWeek: 3 }, // 0=Mon, 3=Thu
  { name: 'Otsaila Febrero', num: 2, days: 28, startDayOfWeek: 6 }, // Sun
  { name: 'Martxoa Marzo', num: 3, days: 31, startDayOfWeek: 6 }, // Sun
  { name: 'Apirila Abril', num: 4, days: 30, startDayOfWeek: 2 }, // Wed
  { name: 'Maiatza Mayo', num: 5, days: 31, startDayOfWeek: 4 }, // Fri
  { name: 'Ekaina Junio', num: 6, days: 30, startDayOfWeek: 0 }, // Mon
  { name: 'Uztaila Julio', num: 7, days: 31, startDayOfWeek: 2 }, // Wed
  { name: 'Abuztua Agosto', num: 8, days: 31, startDayOfWeek: 5 }, // Sat
  { name: 'Iraila Septiembre', num: 9, days: 30, startDayOfWeek: 1 }, // Tue
  { name: 'Urria Octubre', num: 10, days: 31, startDayOfWeek: 3 }, // Thu
  { name: 'Azaroa Noviembre', num: 11, days: 30, startDayOfWeek: 6 }, // Sun
  { name: 'Abendua Diciembre', num: 12, days: 31, startDayOfWeek: 1 }, // Tue
];

// Official holidays Vitoria-Gasteiz 2026 (turnos diurnos y tiempo parcial)
const HOLIDAYS_2026: { [key: number]: number[] } = {
  1: [1, 6],
  3: [19],
  4: [2, 3, 6, 28],
  5: [1],
  7: [25],
  8: [5, 15],
  10: [12],
  11: [3], // Fiesta del Servicio
  12: [8, 25],
};

// Festivos específicos para turnos nocturnos (únicamente los días en color rojo indicados)
const NOCTURNO_HOLIDAYS: { [key: number]: number[] } = {
  1: [5],
  3: [18],
  4: [1, 2, 5, 27, 30],
  7: [24],
  8: [4, 14],
  10: [11],
  11: [3],
  12: [7, 24, 31],
};

const getShiftHolidays = (groupId: string): { [key: number]: number[] } => {
  if (groupId === 'n-tc-1-julio' || groupId === 'n-tc-2-agosto') {
    return NOCTURNO_HOLIDAYS;
  }
  return HOLIDAYS_2026;
};

interface DecemberExtraConfig {
  days: number[];
  red: number[];
  orange: number[];
}

const getDecemberExtraDays = (groupId: string): DecemberExtraConfig | null => {
  if (groupId === 'n-tc-2-agosto') {
    return {
      days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      red: [5],
      orange: [3, 4, 6, 7, 10, 11],
    };
  }
  if (groupId === 'tc-diurno-2-agosto') {
    return {
      days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      red: [1, 6],
      orange: [4, 5, 7, 8, 11, 12],
    };
  }
  return null;
};

// Turno-specific highlighted days
const getTurnoHighlights = (groupId: string) => {
  const highlights: {
    vacation: { [month: number]: number[] };
    puente: { [month: number]: number[] };
    reduc: { [month: number]: number[] };
  } = { vacation: {}, puente: {}, reduc: {} };

  if (groupId === 'tc-diurno-1-julio') {
    // Primer turno diurno: quitado el color verde al 29 de junio, añadidos 17 y 18 dic en naranja
    highlights.puente[4] = [7, 8, 9, 10]; // Semana Santa
    highlights.vacation[6] = [30];
    highlights.vacation[7] = [1, 2, 3, 6, 7, 8, 9, 10, 13, 14, 15, 16, 17, 20, 21, 22, 23, 24, 27, 28, 29, 30, 31];
    highlights.reduc[12] = [17, 18, 21, 22, 23, 24, 28, 29];
  } else if (groupId === 'tc-diurno-2-agosto') {
    // Segundo turno diurno: 28 y 29 de diciembre en blanco (ordinarios)
    highlights.puente[4] = [27, 29, 30]; // San Prudencio
    highlights.puente[5] = [4];
    highlights.vacation[8] = [3, 4, 6, 7, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21, 24, 25, 26, 27, 28, 31];
    highlights.vacation[9] = [1, 2, 3, 4];
    highlights.reduc[12] = [30, 31];
  } else if (groupId === 'n-tc-1-julio') {
    // Primer turno nocturno
    // Azul: 6, 7, 8 y 9 de abril
    highlights.puente[4] = [6, 7, 8, 9];
    // Verde: 29 y 30 de junio, y 1, 2, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 19, 20, 21, 22, 23, 26, 27, 28, 29 y 30 de julio
    highlights.vacation[6] = [29, 30];
    highlights.vacation[7] = [1, 2, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 19, 20, 21, 22, 23, 26, 27, 28, 29, 30];
    // Naranja: 16, 17, 20, 21, 22, 23, 27 y 28 de diciembre
    highlights.reduc[12] = [16, 17, 20, 21, 22, 23, 27, 28];
  } else if (groupId === 'n-tc-2-agosto') {
    // Segundo turno nocturno
    // Azul: 26, 28 y 29 de abril, y el 3 de mayo
    highlights.puente[4] = [26, 28, 29];
    highlights.puente[5] = [3];
    // Verde: 31 de julio y 2, 3, 5, 6, 9, 10, 11, 12, 13, 16, 17, 18, 19, 20, 23, 24, 25, 26, 27, 30 y 31 de agosto, y 1, 2 y 3 de septiembre
    highlights.vacation[7] = [31];
    highlights.vacation[8] = [2, 3, 5, 6, 9, 10, 11, 12, 13, 16, 17, 18, 19, 20, 23, 24, 25, 26, 27, 30, 31];
    highlights.vacation[9] = [1, 2, 3];
    // Naranja: 29, 30 de diciembre
    highlights.reduc[12] = [29, 30];
  } else if (groupId === 'tp-1-junio-pilar') {
    // Vacaciones mayo: 23 al 31 de mayo (incluye 23 y 24 de mayo)
    highlights.vacation[5] = [23, 24, 25, 26, 27, 28, 29, 30, 31];
    // Vacaciones junio: 1 al 26 de junio (incluye 7, 14, 20, 21, 22, 23, 24, 25 y 26 de junio)
    highlights.vacation[6] = Array.from({ length: 26 }, (_, i) => i + 1);
    // Puente El Pilar: 10 y 11 de octubre además de los existentes (10, 11, 13, 14, 15, 16; 12 fiesta nacional)
    highlights.puente[10] = [10, 11, 13, 14, 15, 16];
  } else if (groupId === 'tp-2-julio-constitucion') {
    // Vacaciones junio: 27, 28, 29 y 30 de junio (añadidos 27 y 28 además de los que estaban)
    highlights.vacation[6] = [27, 28, 29, 30];
    // Vacaciones julio: 1 al 24 y 26 al 31 de julio (25 de julio festivo Santiago)
    highlights.vacation[7] = [
      ...Array.from({ length: 24 }, (_, i) => i + 1),
      26, 27, 28, 29, 30, 31,
    ];
    // Puente Constitución: 4, 5, 6, 7, 9, 10 de diciembre (11 de diciembre en blanco; 8 festivo)
    highlights.puente[12] = [4, 5, 6, 7, 9, 10];
  } else if (groupId === 'tp-3-agosto-carnavales') {
    // Puente Carnavales: 12, 13, 14, 15, 16, 17, 18 de febrero (añadidos 12, 13, 14 y 15)
    highlights.puente[2] = [12, 13, 14, 15, 16, 17, 18];
    // Vacaciones agosto: todo el mes de agosto del 1 al 31 (incluye 2, 9, 16, 23, 27, 28, 29, 30 y 31)
    highlights.vacation[8] = Array.from({ length: 31 }, (_, i) => i + 1);
    // Vacaciones septiembre: 1, 2, 3 y 4 de septiembre
    highlights.vacation[9] = [1, 2, 3, 4];
  } else if (groupId === 'tp-4-septiembre-semana-santa') {
    // Puente Semana Santa: 31 de marzo, 1, 4 y 5 de abril en azul (7, 8, 9 y 10 en blanco)
    highlights.puente[3] = [31];
    highlights.puente[4] = [1, 4, 5];
    // Vacaciones septiembre: 1, 2, 3 y 4 en blanco; 5 al 30 de septiembre en verde
    highlights.vacation[9] = Array.from({ length: 26 }, (_, i) => i + 5);
    // Vacaciones octubre: 1 al 9 de octubre en verde
    highlights.vacation[10] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

  return highlights;
};

export const CalendariosViewer: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<WorkShiftCategory>('tiempo_completo');
  const [viewingCalendarGroup, setViewingCalendarGroup] = useState<WorkShiftGroup | null>(null);

  const currentGroups = WORK_SHIFT_GROUPS.filter((g) => g.category === selectedCategory);

  const handleDownloadPdf = (group: WorkShiftGroup) => {
    const content =
      `LAN EGUTEGUIA / CALENDARIO LABORAL 2026\n` +
      `UGT SERVICIO LIMPIEZA PÚBLICA Y RSU VITORIA-GASTEIZ\n\n` +
      `Turno: ${group.turnoLabel}\n` +
      `Categoría: ${group.category === 'tiempo_completo' ? 'Tiempo Completo' : 'Tiempo Parcial'}\n` +
      `Archivo oficial: ${group.pdfName}\n\n` +
      `PERIODOS Y FECHAS:\n` +
      group.keyDates.map((k) => `• ${k.period}: ${k.detail}`).join('\n') +
      `\n\nFESTIVOS OFICIALES VITORIA-GASTEIZ 2026:\n` +
      `• 1 y 6 de Enero: Año Nuevo y Reyes\n` +
      `• 19 de Marzo: San José\n` +
      `• 2, 3 y 6 de Abril: Jueves Santo, Viernes Santo y Lunes de Pascua\n` +
      `• 28 de Abril: San Prudencio\n` +
      `• 1 de Mayo: Fiesta del Trabajo\n` +
      `• 25 de Julio: Santiago Apóstol\n` +
      `• 5 y 15 de Agosto: Virgen Blanca y Asunción\n` +
      `• 12 de Octubre: Fiesta Nacional\n` +
      `• 3 de Noviembre: Fiesta del Servicio\n` +
      `• 8 y 25 de Diciembre: Inmaculada y Navidad\n\n` +
      `Cómputo anual de jornada ordinaria: 1.592 horas efectivas\n` +
      `Sección Sindical de UGT · Comité de Empresa`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = group.pdfName.replace('.pdf', '.txt');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-4 pb-12">
      {/* Category Tabs: Tiempo Completo vs Tiempo Parcial */}
      <div className="bg-white rounded-2xl p-2 shadow-xs border border-slate-200">
        <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-100 rounded-xl">
          <button
            onClick={() => setSelectedCategory('tiempo_completo')}
            className={`py-2.5 px-3 rounded-lg text-xs sm:text-sm font-bold transition-all ${
              selectedCategory === 'tiempo_completo'
                ? 'bg-[#D3122A] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Tiempo completo
          </button>
          <button
            onClick={() => setSelectedCategory('tiempo_parcial')}
            className={`py-2.5 px-3 rounded-lg text-xs sm:text-sm font-bold transition-all ${
              selectedCategory === 'tiempo_parcial'
                ? 'bg-[#D3122A] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Tiempo parcial
          </button>
        </div>
      </div>

      {/* Header Banner: Clean and exact as requested */}
      <div className="bg-slate-900 text-white rounded-2xl p-4 sm:p-5 shadow-xs flex items-center justify-between">
        <div>
          <span className="text-[11px] font-black text-red-400 uppercase tracking-widest">
            AÑO 2026
          </span>
          <h2 className="text-base sm:text-lg font-bold mt-0.5">
            {selectedCategory === 'tiempo_completo'
              ? 'Tiempo completo'
              : 'Tiempo parcial'}
          </h2>
        </div>
        <Calendar className="w-6 h-6 text-red-400 opacity-80 shrink-0" />
      </div>

      {/* Group Selector Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {currentGroups.map((group) => {
          const isNocturno = group.shiftType === 'nocturno' || group.id.includes('nocturno');

          return (
            <div
              key={group.id}
              onClick={() => setViewingCalendarGroup(group)}
              className="p-4 rounded-2xl border border-slate-200 hover:border-red-300 hover:shadow-md transition-all cursor-pointer bg-white text-left group flex flex-col justify-between"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    isNocturno ? 'bg-indigo-50 text-indigo-700' : 'bg-amber-50 text-amber-700'
                  }`}
                >
                  {isNocturno ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#D3122A] transition-colors">
                    {group.name}
                  </h3>
                  <span className="text-xs text-slate-500 font-medium">{group.subgroup}</span>
                </div>
              </div>

              {/* Action Button: Ver calendario */}
              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[#D3122A] font-bold group-hover:underline transition-all">
                  Ver calendario
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Full Interactive 2026 Calendar Modal */}
      {viewingCalendarGroup && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl w-full max-w-3xl my-auto shadow-2xl flex flex-col overflow-hidden max-h-[95vh]">
            {/* Modal Top Bar */}
            <div className="bg-[#D3122A] text-white p-3.5 sm:p-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <Calendar className="w-5 h-5 text-white" />
                <div>
                  <h3 className="text-sm sm:text-base font-bold leading-tight">
                    {viewingCalendarGroup.name}
                  </h3>
                  <span className="text-xs text-white/90 font-medium">
                    {viewingCalendarGroup.subgroup}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDownloadPdf(viewingCalendarGroup)}
                  className="px-2.5 py-1.5 bg-white/20 hover:bg-white/30 text-white rounded-xl text-xs font-semibold flex items-center gap-1 transition-colors"
                  title="Descargar datos del calendario"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Descargar</span>
                </button>
                <button
                  onClick={() => setViewingCalendarGroup(null)}
                  className="p-1.5 rounded-full hover:bg-black/20 text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Calendar Body (Faithful to the official LAN EGUTEGUIA 2026 sheet) */}
            <div className="p-3 sm:p-5 overflow-y-auto space-y-4 bg-slate-50 flex-1">
              <div className="bg-white p-3 sm:p-5 rounded-2xl shadow-xs border border-slate-200">
                {/* Official Title Header */}
                <div className="flex items-center justify-between pb-3 border-b-2 border-slate-900 mb-4">
                  <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tighter">
                    2026
                  </div>
                  <div className="text-right">
                    <div className="text-xs sm:text-sm font-black text-[#048444] uppercase tracking-wide">
                      LAN EGUTEGUIA
                    </div>
                    <div className="text-xs sm:text-sm font-black text-[#048444] uppercase tracking-wide">
                      CALENDARIO LABORAL
                    </div>
                  </div>
                </div>

                {/* 12 Months Grid */}
                {(() => {
                  const highlights = getTurnoHighlights(viewingCalendarGroup.id);
                  const shiftHolidays = getShiftHolidays(viewingCalendarGroup.id);
                  const extraConfig = getDecemberExtraDays(viewingCalendarGroup.id);
                  const isTiempoCompleto = viewingCalendarGroup.category === 'tiempo_completo';
                  const isTiempoParcial = viewingCalendarGroup.category === 'tiempo_parcial';
                  const isNocturno =
                    viewingCalendarGroup.shiftType === 'nocturno' ||
                    viewingCalendarGroup.id.startsWith('n-') ||
                    viewingCalendarGroup.id.includes('nocturno') ||
                    viewingCalendarGroup.name.toLowerCase().includes('nocturno') ||
                    viewingCalendarGroup.turnoLabel.toLowerCase().includes('nocturno');

                  const isRestDayForShift = (dayOfWeek: number) => {
                    if (isNocturno) {
                      // Turnos nocturnos: descansan viernes en lugar de domingos
                      return isTiempoCompleto
                        ? (dayOfWeek === 4 || dayOfWeek === 5)
                        : (dayOfWeek === 4);
                    } else {
                      // Turnos diurnos: sábados y domingos en tiempo completo, domingos en tiempo parcial
                      return isTiempoCompleto
                        ? (dayOfWeek === 5 || dayOfWeek === 6)
                        : (dayOfWeek === 6);
                    }
                  };

                  return (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {MONTHS_2026.map((m) => {
                        const daysInMonth = Array.from({ length: m.days }, (_, i) => i + 1);
                        const emptyLeadingDays = Array.from({ length: m.startDayOfWeek }, (_, i) => i);

                        return (
                          <div
                            key={m.num}
                            className="border border-slate-200 rounded-xl p-2 bg-white text-center"
                          >
                            <h4 className="text-[11px] font-bold text-slate-900 mb-1.5 pb-1 border-b border-slate-100">
                              {m.name}
                            </h4>

                            {/* Days of week headers */}
                            <div className="grid grid-cols-7 text-[9px] font-semibold mb-1">
                              <span className="text-slate-400">L</span>
                              <span className="text-slate-400">M</span>
                              <span className="text-slate-400">X</span>
                              <span className="text-slate-400">J</span>
                              <span className={isNocturno ? 'text-slate-800 font-bold bg-slate-100 rounded' : 'text-slate-400'}>V</span>
                              <span className={isTiempoCompleto ? 'text-slate-800 font-bold bg-slate-100 rounded' : 'text-slate-400'}>S</span>
                              <span className={!isNocturno ? 'text-slate-800 font-bold bg-slate-100 rounded' : 'text-slate-400'}>D</span>
                            </div>

                            {/* Calendar Days */}
                            <div className="grid grid-cols-7 gap-0.5 text-[10px]">
                              {emptyLeadingDays.map((_, idx) => (
                                <span key={`empty-${idx}`} />
                              ))}

                              {daysInMonth.map((day) => {
                                const dayOfWeek = (m.startDayOfWeek + (day - 1)) % 7;
                                const isRestDay = isRestDayForShift(dayOfWeek);
                                const isSunday = dayOfWeek === 6;

                                const isOfficialHoliday = shiftHolidays[m.num]?.includes(day);
                                const isVacation = highlights.vacation[m.num]?.includes(day);
                                const isPuente = highlights.puente[m.num]?.includes(day);
                                const isReduction = highlights.reduc[m.num]?.includes(day);

                                let bgClass = 'hover:bg-slate-100 text-slate-800';
                                if (isOfficialHoliday) {
                                  bgClass = 'bg-[#D3122A] text-white font-bold rounded';
                                } else if (isVacation) {
                                  bgClass = 'bg-[#048444] text-white font-bold rounded';
                                } else if (isPuente) {
                                  bgClass = 'bg-[#009BEF] text-white font-bold rounded';
                                } else if (isReduction) {
                                  bgClass = 'bg-[#F58220] text-white font-bold rounded';
                                } else if (isTiempoParcial && isSunday) {
                                  bgClass = 'bg-[#D3122A] text-white font-bold rounded';
                                } else if (isRestDay) {
                                  bgClass = 'bg-slate-300 text-slate-800 font-bold rounded';
                                }

                                return (
                                  <span
                                    key={day}
                                    className={`py-0.5 flex items-center justify-center font-mono ${bgClass}`}
                                  >
                                    {day}
                                  </span>
                                );
                              })}

                              {/* Extra days following day 31 of December */}
                              {m.num === 12 &&
                                extraConfig &&
                                extraConfig.days.map((day) => {
                                  const dayIndex = 31 + (day - 1);
                                  const dayOfWeek = (m.startDayOfWeek + dayIndex) % 7;
                                  const isRestDay = isRestDayForShift(dayOfWeek);

                                  const isHoliday = extraConfig.red.includes(day);
                                  const isReduction = extraConfig.orange.includes(day);

                                  let bgClass = 'hover:bg-slate-100 text-slate-800';
                                  if (isHoliday) {
                                    bgClass = 'bg-[#D3122A] text-white font-bold rounded';
                                  } else if (isReduction) {
                                    bgClass = 'bg-[#F58220] text-white font-bold rounded';
                                  } else if (isRestDay) {
                                    bgClass = 'bg-slate-300 text-slate-800 font-bold rounded';
                                  }

                                  return (
                                    <span
                                      key={`extra-${day}`}
                                      className={`py-0.5 flex items-center justify-center font-mono ${bgClass}`}
                                    >
                                      {day}
                                    </span>
                                  );
                                })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })()}

                {/* Official Legend Matching User PDF */}
                <div className="mt-4 pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex flex-wrap items-center gap-3 font-semibold">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3.5 h-3.5 bg-[#D3122A] rounded-xs shrink-0" />
                      <span>Festivos</span>
                    </div>
                    {viewingCalendarGroup.category !== 'tiempo_parcial' && (
                      <div className="flex items-center gap-1.5">
                        <span className="w-3.5 h-3.5 bg-slate-300 rounded-xs shrink-0" />
                        <span>Descanso semanal</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1.5">
                      <span className="w-3.5 h-3.5 bg-[#048444] rounded-xs shrink-0" />
                      <span>Vacaciones</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-3.5 h-3.5 bg-[#009BEF] rounded-xs shrink-0" />
                      <span>Puentes</span>
                    </div>
                    {viewingCalendarGroup.category !== 'tiempo_parcial' && (
                      <div className="flex items-center gap-1.5">
                        <span className="w-3.5 h-3.5 bg-[#F58220] rounded-xs shrink-0" />
                        <span>Reducción jornada</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Turno Tag */}
                <div className="mt-4 p-3 bg-black text-white rounded-xl text-center">
                  <div className="text-xs sm:text-sm font-black uppercase tracking-wider">
                    {viewingCalendarGroup.turnoLabel}
                  </div>
                  <div className="text-[11px] text-slate-300 font-semibold mt-0.5">
                    {viewingCalendarGroup.category === 'tiempo_completo'
                      ? 'TIEMPO COMPLETO'
                      : 'TIEMPO PARCIAL'}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Bottom Bar */}
            <div className="p-3 bg-white border-t border-slate-200 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-semibold">
                {viewingCalendarGroup.subgroup}
              </span>
              <button
                onClick={() => setViewingCalendarGroup(null)}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold transition-colors cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
