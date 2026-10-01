import React, { useState } from 'react';
import {
  ChevronRight,
  MessageCircle,
  PhoneCall,
  Mail,
  BookOpen,
  Calendar,
  GraduationCap,
  Award,
  Users,
  CreditCard,
  HeartHandshake,
  Scale,
  ShieldCheck,
  Phone,
  Building2,
  Bell,
  Camera,
  Newspaper,
} from 'lucide-react';

import { ScreenId } from './types';
import { AndroidStatusBar } from './components/AndroidStatusBar';
import { AndroidNavBar } from './components/AndroidNavBar';
import { Header } from './components/Header';
import { ConvenioViewer } from './components/ConvenioViewer';
import { CalendariosViewer } from './components/CalendariosViewer';
import { ComunicadosSection } from './components/ComunicadosSection';
import { EscuelasSection } from './components/EscuelasSection';
import { FormacionSection } from './components/FormacionSection';
import { AfiliadosSection } from './components/AfiliadosSection';
import { MutuaSection } from './components/MutuaSection';
import { DelegadosSection } from './components/DelegadosSection';
import { CuotasSection } from './components/CuotasSection';
import { DocumentosSection } from './components/DocumentosSection';
import { GuiaServiciosSection } from './components/GuiaServiciosSection';
import { ContactoUgtSection } from './components/ContactoUgtSection';
import { ContactoAccionaSection } from './components/ContactoAccionaSection';
import { FundacionSanPrudencioSection } from './components/FundacionSanPrudencioSection';
import { PrensaSection } from './components/PrensaSection';

interface MainButton {
  id: ScreenId;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  externalUrl?: string;
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('home');
  const [isDeviceMode, setIsDeviceMode] = useState(true);

  const mainButtons: MainButton[] = [
    { id: 'convenio', title: 'Convenio', icon: BookOpen },
    { id: 'calendarios', title: 'Calendarios', icon: Calendar },
    { id: 'escuelas', title: 'Escuelas', icon: GraduationCap },
    { id: 'formacion', title: 'Formación', icon: Award },
    { id: 'comunicados', title: 'Comunicados', icon: Bell },
    { id: 'fotografias_prensa', title: 'Prensa', icon: Newspaper },
    { id: 'delegados', title: 'Delegados/delegadas', icon: Users },
    { id: 'cuotas', title: 'Cuotas', icon: CreditCard },
    { id: 'fundacion_san_prudencio', title: 'Fundación Laboral San Prudencio', icon: HeartHandshake },
    {
      id: 'documentos',
      title: 'Disposiciones legales',
      icon: Scale,
      externalUrl: 'https://euskadi.ugt-sp.es/wp-content/uploads/Disposiciones-Legales-2026_compressed_compressed.pdf',
    },
    { id: 'guia_servicios', title: 'Guía de servicios', icon: ShieldCheck },
    { id: 'contacto_ugt', title: 'Contacto', icon: Phone },
    { id: 'contacto_acciona', title: 'Empresa y Mutua', icon: Building2 },
  ];

  const getScreenTitle = (screen: ScreenId): string => {
    switch (screen) {
      case 'convenio':
        return 'Convenio';
      case 'calendarios':
        return 'Calendarios';
      case 'escuelas':
        return 'Escuelas';
      case 'formacion':
        return 'Formación';
      case 'comunicados':
        return 'Comunicados';
      case 'fotografias_prensa':
        return 'Prensa';
      case 'afiliados':
        return 'Afiliados/afiliadas';
      case 'mutua':
        return 'Mutua';
      case 'delegados':
        return 'Delegados/delegadas';
      case 'cuotas':
        return 'Cuotas';
      case 'fundacion_san_prudencio':
        return 'Fundación San Prudencio';
      case 'documentos':
        return 'Disposiciones legales';
      case 'guia_servicios':
        return 'Guía de servicios';
      case 'contacto_ugt':
        return 'Contacto';
      case 'contacto_acciona':
        return 'Empresa y Mutua';
      default:
        return 'UGT Limpieza y RSU';
    }
  };

  // Render current screen content
  const renderScreen = () => {
    switch (currentScreen) {
      case 'convenio':
        return <ConvenioViewer />;
      case 'calendarios':
        return <CalendariosViewer />;
      case 'escuelas':
        return <EscuelasSection />;
      case 'formacion':
        return <FormacionSection />;
      case 'comunicados':
        return <ComunicadosSection />;
      case 'fotografias_prensa':
        return <PrensaSection />;
      case 'afiliados':
        return <AfiliadosSection />;
      case 'mutua':
        return <MutuaSection />;
      case 'delegados':
        return <DelegadosSection />;
      case 'cuotas':
        return <CuotasSection />;
      case 'fundacion_san_prudencio':
        return <FundacionSanPrudencioSection />;
      case 'documentos':
        return <GuiaServiciosSection source="documentos" />;
      case 'guia_servicios':
        return <GuiaServiciosSection source="guia_servicios" />;
      case 'contacto_ugt':
        return <ContactoUgtSection />;
      case 'contacto_acciona':
        return <ContactoAccionaSection />;
      default:
        return (
          <div className="space-y-4 pb-16">
            {/* Top Central Section with UGT */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-sm border border-slate-200 text-center relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-36 h-36 bg-red-50 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-red-50 rounded-full blur-2xl pointer-events-none" />

              <div className="relative flex flex-col items-center">
                {/* Big Bold Red UGT Letters */}
                <div className="my-1">
                  <span className="text-6xl sm:text-7xl font-black text-[#D3122A] tracking-tighter select-none drop-shadow-xs">
                    UGT
                  </span>
                </div>

                <div className="inline-flex items-center px-3 py-1 bg-red-50 rounded-full text-xs font-bold text-[#D3122A] mb-1.5 mt-1">
                  <span>Sección Sindical</span>
                </div>

                <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-tight">
                  Limpieza Viaria y RSU
                </h2>
                <p className="text-xs text-slate-500 max-w-sm mt-1">
                  del Ayuntamiento de Vitoria-Gasteiz
                </p>

                {/* Quick Action Badges */}
                <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                  <a
                    href="tel:648928661"
                    className="px-3.5 py-1.5 bg-[#D3122A] hover:bg-[#b50e23] text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Llamar</span>
                  </a>

                  <a
                    href="https://wa.me/34648928661"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Mandatory Highlighted Notice: WhatsApp Number Registration */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-4 sm:p-5 shadow-md">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-wider bg-white text-[#D3122A] px-2 py-0.5 rounded-full inline-block">
                    Aviso Importante
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-white leading-snug">
                    «Recuerda que tienes que tener memorizado en tu teléfono el número de la Sección Sindical LV-RSU para recibir las comunicaciones por whatsapp.»
                  </p>
                  <p className="text-[11px] text-white/90">
                    Número oficial: <strong>648 928 661</strong>
                  </p>
                </div>
              </div>
              <div className="mt-3 pt-2.5 border-t border-white/20 flex justify-end">
                <button
                  onClick={() => setCurrentScreen('contacto_ugt')}
                  className="text-xs font-bold text-white hover:underline flex items-center gap-1"
                >
                  <span>Ver detalles de contacto y guardar agenda</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Main Section Buttons - Single vertical column (one per row) */}
            <div className="flex flex-col gap-3">
              {mainButtons.map((btn) => {
                const IconComponent = btn.icon;

                if (btn.externalUrl) {
                  return (
                    <a
                      key={btn.id}
                      href={btn.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full p-4 bg-white hover:bg-red-50/50 active:bg-red-100/70 active:scale-[0.99] border border-slate-200 hover:border-[#D3122A] rounded-2xl shadow-xs transition-all text-left flex items-center gap-3.5 group cursor-pointer touch-manipulation"
                    >
                      <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-[#D3122A] group-hover:bg-[#D3122A] group-hover:text-white transition-colors shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-slate-900 group-hover:text-[#D3122A] text-base sm:text-lg leading-snug">
                        {btn.title}
                      </span>
                    </a>
                  );
                }

                return (
                  <button
                    key={btn.id}
                    onClick={() => setCurrentScreen(btn.id)}
                    className="w-full p-4 bg-white hover:bg-red-50/50 active:bg-red-100/70 active:scale-[0.99] border border-slate-200 hover:border-[#D3122A] rounded-2xl shadow-xs transition-all text-left flex items-center gap-3.5 group cursor-pointer touch-manipulation"
                  >
                    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-[#D3122A] group-hover:bg-[#D3122A] group-hover:text-white transition-colors shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-slate-900 group-hover:text-[#D3122A] text-base sm:text-lg leading-snug">
                      {btn.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Sugerencias y problemas con la aplicación */}
            <div className="pt-1">
              <a
                href="mailto:applvrsuvitoriagasteiz@gmail.com?subject=Sugerencia%20o%20problema%20con%20la%20aplicaci%C3%B3n"
                className="w-full p-4 bg-white hover:bg-red-50/40 active:bg-red-100/60 border border-slate-200 hover:border-slate-300 rounded-2xl shadow-xs transition-all flex items-center justify-between gap-3 text-left group block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-red-50 text-slate-700 group-hover:text-[#D3122A] flex items-center justify-center shrink-0 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#D3122A] transition-colors leading-tight">
                      Sugerencias y problemas con la aplicación
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      applvrsuvitoriagasteiz@gmail.com
                    </p>
                  </div>
                </div>
                <div className="text-slate-400 group-hover:text-[#D3122A] transition-colors shrink-0">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </a>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-200/80 flex flex-col items-center justify-start sm:py-6 sm:px-4 font-sans text-slate-900">
      {/* Container Mode: Phone Frame or Fullscreen */}
      <div
        className={`w-full transition-all duration-300 ${
          isDeviceMode
            ? 'max-w-[440px] sm:rounded-[42px] sm:shadow-2xl sm:border-[8px] sm:border-slate-800 sm:ring-1 sm:ring-black/10'
            : 'max-w-4xl sm:rounded-3xl sm:shadow-xl sm:border border-slate-300'
        } bg-slate-100 flex flex-col min-h-screen sm:min-h-[860px] overflow-hidden relative`}
      >
        {/* Android Punch Hole Camera (only in device mode on desktop) */}
        {isDeviceMode && (
          <div className="hidden sm:block absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-900 rounded-full z-50 pointer-events-none ring-2 ring-slate-800" />
        )}

        {/* Android Status Bar */}
        <div className="bg-[#D3122A] text-white">
          <AndroidStatusBar darkText={false} />
        </div>

        {/* Top App Bar Header */}
        <Header
          currentScreen={currentScreen}
          screenTitle={getScreenTitle(currentScreen)}
          onNavigateBack={() => setCurrentScreen('home')}
          isDeviceMode={isDeviceMode}
          onToggleDeviceMode={() => setIsDeviceMode(!isDeviceMode)}
        />

        {/* Scrollable Main Content Area */}
        <main className="flex-1 p-3.5 sm:p-5 overflow-y-auto">
          {renderScreen()}
        </main>

        {/* Android Gesture Navigation Bar Handle */}
        <AndroidNavBar />
      </div>
    </div>
  );
}
