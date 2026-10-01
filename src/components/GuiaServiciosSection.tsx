import React, { useState } from 'react';
import {
  ArrowUpRight,
  BookOpen,
  FileText,
  Scale,
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
  Briefcase,
  FileCheck2,
  HeartPulse,
  ShieldAlert,
  Users,
  Sparkles,
  Mail,
  Building2,
  GraduationCap,
  Palmtree,
  Shield,
} from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  subtitle?: string;
  url?: string;
  isPdf?: boolean;
  isInternal?: boolean;
}

interface Props {
  source?: 'documentos' | 'guia_servicios';
}

type InternalViewType = 'juridico' | 'salud_laboral' | 'igualdad' | 'jubilados' | 'empleo' | 'formacion' | 'tiempo_libre' | 'seguros' | null;

export const GuiaServiciosSection: React.FC<Props> = ({ source = 'guia_servicios' }) => {
  const [activeInternalView, setActiveInternalView] = useState<InternalViewType>(null);

  const services: ServiceItem[] = [
    {
      id: 'juridico',
      title: 'Servicios jurídicos',
      subtitle: 'Información y asesoría jurídica',
      isInternal: true,
    },
    {
      id: 'salud_laboral',
      title: 'Salud laboral',
      subtitle: 'Prevención de riesgos y asesoramiento',
      isInternal: true,
    },
    {
      id: 'igualdad',
      title: 'Mujer, igualdad y diversidad',
      subtitle: 'Planes de igualdad y no discriminación',
      isInternal: true,
    },
    {
      id: 'jubilados',
      title: 'Jubilados, pensionistas y juventud',
      subtitle: 'Asociación juvenil RUGE y pensionistas',
      isInternal: true,
    },
    {
      id: 'empleo',
      title: 'Empleo',
      subtitle: 'Bolsas, oposiciones, boletines y orientación',
      isInternal: true,
    },
    {
      id: 'formacion',
      title: 'Formación',
      subtitle: 'Preparación de oposiciones y aula virtual',
      isInternal: true,
    },
    {
      id: 'tiempo_libre',
      title: 'Tiempo libre',
      subtitle: 'Ligüerre de Cinca, Paradores y SerdUGT',
      isInternal: true,
    },
    {
      id: 'seguros',
      title: 'Seguros',
      subtitle: 'Seguros gratuitos y ventajas para afiliados/afiliadas',
      isInternal: true,
    },
    {
      id: 'guia_pdf',
      title: 'Guia de servicios',
      url: 'https://euskadi.ugt-sp.es/wp-content/uploads/20226guiadeserviciosfesp2026_compressed-1.pdf',
      isPdf: true,
    },
  ];

  // Detailed view for Servicios Jurídicos
  if (activeInternalView === 'juridico') {
    return (
      <div className="space-y-4 pb-12">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setActiveInternalView(null)}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#D3122A] hover:text-red-700 bg-red-50 hover:bg-red-100/80 px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a Guía de servicios</span>
          </button>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center text-[#D3122A] shrink-0">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                SERVICIOS JURÍDICOS
              </h2>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 mt-4 leading-relaxed font-medium">
            Los Servicios Jurídicos de UGT en Euskadi tienen como objetivo garantizar la adecuada defensa jurídica de las personas afiliadas a la organización en materia laboral.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200 space-y-3">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-red-50 text-[#D3122A] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
              Aseguramos tu derecho a la representación y defensa legal ante cualquier problemática que pueda surgir en cada ámbito del trabajo:
            </p>
          </div>

          <ul className="space-y-2 pt-1 pl-1">
            <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
              <span className="w-2 h-2 rounded-full bg-[#D3122A] mt-1.5 shrink-0" />
              <span>reclamaciones ante la empresa, institución o administración pública;</span>
            </li>
            <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
              <span className="w-2 h-2 rounded-full bg-[#D3122A] mt-1.5 shrink-0" />
              <span>servicios de mediación, arbitraje y conciliación;</span>
            </li>
            <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
              <span className="w-2 h-2 rounded-full bg-[#D3122A] mt-1.5 shrink-0" />
              <span>demandas y recursos ante los juzgados de lo Social;</span>
            </li>
            <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
              <span className="w-2 h-2 rounded-full bg-[#D3122A] mt-1.5 shrink-0" />
              <span>demandas y recursos ante los juzgados de lo Contencioso-Administrativo.</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200 space-y-3">
          <div className="flex items-center gap-2.5 border-b border-slate-100 pb-2.5">
            <div className="w-7 h-7 rounded-lg bg-red-50 text-[#D3122A] flex items-center justify-center shrink-0">
              <Briefcase className="w-4 h-4" />
            </div>
            <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wide">
              ASESORAMIENTO EN MATERIA LABORAL
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            Igualmente, UGT Servicios Públicos Euskadi, a través de su Asesoría, resolverá consultas laborales sobre:
          </p>

          <ul className="space-y-2 pt-1 pl-1">
            <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
              <span className="w-2 h-2 rounded-full bg-[#D3122A] mt-1.5 shrink-0" />
              <span>convenios colectivos y legislación específica aplicable;</span>
            </li>
            <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
              <span className="w-2 h-2 rounded-full bg-[#D3122A] mt-1.5 shrink-0" />
              <span>jornada laboral, vacaciones, salarios y nóminas;</span>
            </li>
            <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
              <span className="w-2 h-2 rounded-full bg-[#D3122A] mt-1.5 shrink-0" />
              <span>contratación y despidos, fin de relación laboral y finiquitos;</span>
            </li>
            <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
              <span className="w-2 h-2 rounded-full bg-[#D3122A] mt-1.5 shrink-0" />
              <span>expedientes de regulación de empleo.</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200 space-y-3">
          <div className="flex items-center gap-2.5 border-b border-slate-100 pb-2.5">
            <div className="w-7 h-7 rounded-lg bg-red-50 text-[#D3122A] flex items-center justify-center shrink-0">
              <FileCheck2 className="w-4 h-4" />
            </div>
            <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wide">
              ASESORAMIENTO EN SEGURIDAD SOCIAL
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            Las personas afiliadas a UGT Servicios Públicos de Euskadi cuentan también con asesoramiento personalizado en temas relacionados con la Seguridad Social y sus prestaciones:
          </p>

          <ul className="space-y-2 pt-1 pl-1">
            <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
              <span className="w-2 h-2 rounded-full bg-[#D3122A] mt-1.5 shrink-0" />
              <span>jubilaciones, situaciones de incapacidad, cambios de contingencia;</span>
            </li>
            <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
              <span className="w-2 h-2 rounded-full bg-[#D3122A] mt-1.5 shrink-0" />
              <span>prestaciones por desempleo y subsidios;</span>
            </li>
            <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
              <span className="w-2 h-2 rounded-full bg-[#D3122A] mt-1.5 shrink-0" />
              <span>pensiones de viudedad, orfandad y otros.</span>
            </li>
          </ul>
        </div>

        <div className="pt-2">
          <button
            onClick={() => setActiveInternalView(null)}
            className="w-full py-3.5 px-4 bg-white hover:bg-red-50 border border-slate-200 hover:border-[#D3122A] text-slate-800 hover:text-[#D3122A] font-bold text-sm rounded-2xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a la Guía de servicios</span>
          </button>
        </div>
      </div>
    );
  }

  // Detailed view for Salud Laboral
  if (activeInternalView === 'salud_laboral') {
    return (
      <div className="space-y-4 pb-12">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setActiveInternalView(null)}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#D3122A] hover:text-red-700 bg-red-50 hover:bg-red-100/80 px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a Guía de servicios</span>
          </button>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center text-[#D3122A] shrink-0">
              <HeartPulse className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                SALUD LABORAL
              </h2>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 mt-4 leading-relaxed font-medium">
            Mejorar las condiciones laborales de las personas trabajadoras es uno de los principales objetivos de UGT. Por ello, contamos con técnicos cualificados dedicados a informar, apoyar y asesorar en esta materia.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200 space-y-3">
          <div className="flex items-center gap-2.5 border-b border-slate-100 pb-2.5">
            <div className="w-7 h-7 rounded-lg bg-red-50 text-[#D3122A] flex items-center justify-center shrink-0">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wide">
              OFICINA TÉCNICA DE PRL DE UGT-EUSKADI
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            Asesoramos sobre las condiciones de trabajo, los factores de riesgo y los procedimientos para la evaluación de riesgos.
          </p>

          <ul className="space-y-2 pt-1 pl-1">
            <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
              <span className="w-2 h-2 rounded-full bg-[#D3122A] mt-1.5 shrink-0" />
              <span>reclamaciones ante la empresa o institución;</span>
            </li>
            <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
              <span className="w-2 h-2 rounded-full bg-[#D3122A] mt-1.5 shrink-0" />
              <span>reclamaciones ante la Inspección de Trabajo y Osalan;</span>
            </li>
            <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
              <span className="w-2 h-2 rounded-full bg-[#D3122A] mt-1.5 shrink-0" />
              <span>tramitación de denuncias;</span>
            </li>
            <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
              <span className="w-2 h-2 rounded-full bg-[#D3122A] mt-1.5 shrink-0" />
              <span>situaciones de especial tratamiento: contaminación por amianto, silicosis, etc.</span>
            </li>
          </ul>
        </div>

        <div className="pt-2">
          <button
            onClick={() => setActiveInternalView(null)}
            className="w-full py-3.5 px-4 bg-white hover:bg-red-50 border border-slate-200 hover:border-[#D3122A] text-slate-800 hover:text-[#D3122A] font-bold text-sm rounded-2xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a la Guía de servicios</span>
          </button>
        </div>
      </div>
    );
  }

  // Detailed view for Mujer, Igualdad y Diversidad
  if (activeInternalView === 'igualdad') {
    return (
      <div className="space-y-4 pb-12">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setActiveInternalView(null)}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#D3122A] hover:text-red-700 bg-red-50 hover:bg-red-100/80 px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a Guía de servicios</span>
          </button>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center text-[#D3122A] shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                MUJER, IGUALDAD Y DIVERSIDAD
              </h2>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200 space-y-4">
          <div className="flex items-center gap-2.5 border-b border-slate-100 pb-2.5">
            <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wide">
              EMAKUMEA MUJER
            </h3>
          </div>

          <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            <p>
              Nuestro modelo sindical se basa en la igualdad de derechos. Toda discriminación en el acceso al empleo y en su permanencia debe ser combatida. Sin embargo, en la práctica, la discriminación subsiste.
            </p>

            <p>
              Nuestro trabajo se centra en potenciar la participación de las mujeres en el ámbito laboral y sindical, desarrollando los instrumentos necesarios para corregir la discriminación, trabajando en la negociación colectiva, asesorando y sensibilizando.
            </p>

            <div className="p-3.5 bg-red-50/60 rounded-xl border border-red-100">
              <p className="font-semibold text-slate-900">
                Desde nuestro sindicato, asesoramos, formamos e informamos en la implantación de los planes de igualdad en tu empresa o administración.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-2">
          <button
            onClick={() => setActiveInternalView(null)}
            className="w-full py-3.5 px-4 bg-white hover:bg-red-50 border border-slate-200 hover:border-[#D3122A] text-slate-800 hover:text-[#D3122A] font-bold text-sm rounded-2xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a la Guía de servicios</span>
          </button>
        </div>
      </div>
    );
  }

  // Detailed view for Jubilados, Pensionistas y Juventud
  if (activeInternalView === 'jubilados') {
    return (
      <div className="space-y-4 pb-12">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setActiveInternalView(null)}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#D3122A] hover:text-red-700 bg-red-50 hover:bg-red-100/80 px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a Guía de servicios</span>
          </button>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center text-[#D3122A] shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                JUBILADOS Y PENSIONISTAS / JUVENTUD
              </h2>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200 space-y-4">
          <div className="flex items-center gap-2.5 border-b border-slate-100 pb-2.5">
            <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wide">
              RUGE GAZTEAK JUVENTUD
            </h3>
          </div>

          <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            <p>
              UGT cuenta con una asociación juvenil llamada RUGE. Esta asociación goza de plena autonomía para abordar las preocupaciones e inquietudes de la juventud, tanto en el ámbito laboral como en otros aspectos.
            </p>

            <p>
              Aunque se nos ha tachado de generación dormida, podemos asegurar que somos plenamente conscientes de que nuestra situación actual no es fortuita ni inevitable, sino que tiene responsables a quienes podemos señalar: personas, organizaciones e instituciones que han decidido implementar políticas que benefician a unos pocos y oprimen a la mayor parte de la sociedad. Sabemos que la situación puede cambiar. Te animamos a participar en RUGE y a hacernos llegar tus dudas sobre condiciones de trabajo, contratos y convenios.
            </p>
          </div>
        </div>

        <div className="pt-2">
          <button
            onClick={() => setActiveInternalView(null)}
            className="w-full py-3.5 px-4 bg-white hover:bg-red-50 border border-slate-200 hover:border-[#D3122A] text-slate-800 hover:text-[#D3122A] font-bold text-sm rounded-2xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a la Guía de servicios</span>
          </button>
        </div>
      </div>
    );
  }

  // Detailed view for Empleo
  if (activeInternalView === 'empleo') {
    return (
      <div className="space-y-4 pb-12">
        {/* Back navigation button */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setActiveInternalView(null)}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#D3122A] hover:text-red-700 bg-red-50 hover:bg-red-100/80 px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a Guía de servicios</span>
          </button>
        </div>

        {/* Title Header Card */}
        <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center text-[#D3122A] shrink-0">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                  EMPLEO
                </h2>
              </div>
            </div>

            <a
              href="https://euskadi.ugt-sp.es/categoria/empleo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#D3122A] hover:bg-red-700 text-white text-xs font-bold rounded-xl transition-colors shrink-0 shadow-xs"
            >
              <span>Ver web</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            UGT Servicios Públicos ofrece al afiliado/afiliada dentro de su página web una herramienta de empleo desde donde podrás acceder a:
          </p>
        </div>

        {/* 1. Formulario de Búsqueda y Orientación de Empleo */}
        <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200 space-y-3">
          <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-2.5">
            <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wide">
              FORMULARIO DE BÚSQUEDA Y ORIENTACIÓN DE EMPLEO
            </h3>
            <a
              href="https://euskadi.ugt-sp.es/curriculum-vitae/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 bg-red-50 hover:bg-red-100 text-[#D3122A] text-xs font-bold rounded-lg transition-colors shrink-0"
            >
              <span>Ver App web</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Donde puedes rellenar un formulario para que te podamos informar y asesorar sobre posibles ofertas de empleo que nos puedan llegar, optando a asesoramiento laboral para tu primer empleo y también en búsqueda de mejora en tu ámbito laboral.
          </p>

          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
            <Mail className="w-4 h-4 text-[#D3122A] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-700 space-y-1">
              <p>
                También puedes hacernos llegar directamente tu currículum, enviándonos el documento a la dirección email:
              </p>
              <a
                href="mailto:curriculum@ugteuskadi.org"
                className="font-bold text-[#D3122A] hover:underline inline-block break-all"
              >
                curriculum@ugteuskadi.org
              </a>
            </div>
          </div>
        </div>

        {/* 2. Boletines de Empleo */}
        <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200 space-y-3">
          <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-2.5">
            <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wide">
              BOLETINES DE EMPLEO
            </h3>
            <a
              href="https://euskadi.ugt-sp.es/se-han-publicado-nuevos-boletines-de-empleo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 bg-red-50 hover:bg-red-100 text-[#D3122A] text-xs font-bold rounded-lg transition-colors shrink-0"
            >
              <span>Ver web</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Puedes consultar las ofertas de empleo en los enlaces que tienes a continuación. Estos enlaces están divididos en varias páginas, ya que la cantidad de ofertas que últimamente surgen a diario obliga a que tengáis posibilidad de consultarlo de una manera concreta más especializada.
          </p>
        </div>

        {/* 3. Oposiciones y Bolsas de Empleo */}
        <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200 space-y-3">
          <div className="border-b border-slate-100 pb-2.5">
            <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wide">
              OPOSICIONES Y BOLSAS DE EMPLEO
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            En este apartado encontrarás toda la información sobre las convocatorias de oposiciones y bolsas de empleo de Euskadi, también encontrarás cursos y temarios que te facilitarán el acceso al empleo público.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            <a
              href="https://euskadi.ugt-sp.es/categoria/empleo/oposiciones/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-red-50/70 hover:bg-red-100/80 border border-red-200/80 rounded-xl flex items-center justify-between text-xs sm:text-sm font-bold text-[#D3122A] transition-colors"
            >
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 shrink-0" />
                <span>Ver web oposiciones</span>
              </div>
              <ArrowUpRight className="w-4 h-4 shrink-0" />
            </a>

            <a
              href="https://euskadi.ugt-sp.es/categoria/empleo/bolsas-de-empleo/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-red-50/70 hover:bg-red-100/80 border border-red-200/80 rounded-xl flex items-center justify-between text-xs sm:text-sm font-bold text-[#D3122A] transition-colors"
            >
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 shrink-0" />
                <span>Ver web bolsas empleo</span>
              </div>
              <ArrowUpRight className="w-4 h-4 shrink-0" />
            </a>
          </div>
        </div>

        {/* 4. Trabajar en lo Público */}
        <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200 space-y-3">
          <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-2.5">
            <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wide">
              TRABAJAR EN LO PÚBLICO
            </h3>
            <a
              href="https://trabajarenlopublico.ning.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 bg-red-50 hover:bg-red-100 text-[#D3122A] text-xs font-bold rounded-lg transition-colors shrink-0"
            >
              <span>Ver web</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Red social que informa y permite ordenar y canalizar toda la información sobre toda oferta de empleo que se convoque en el país.
          </p>
        </div>

        {/* 5. Organismos y Entidades de Empleo */}
        <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200 space-y-3">
          <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-2.5">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#D3122A] shrink-0" />
              <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wide">
                ORGANISMOS Y ENTIDADES DE EMPLEO
              </h3>
            </div>
            <a
              href="https://euskadi.ugt-sp.es/organismo-y-entidades-de-empleo/?doing_wp_cron=1687932875.2677679061889648437500"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 bg-red-50 hover:bg-red-100 text-[#D3122A] text-xs font-bold rounded-lg transition-colors shrink-0"
            >
              <span>Ver web</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            En nuestra página tendrás acceso a los principales organismos y entidades de empleo más relevantes de nuestro entorno, entre ellas Lanbide, ETT...
          </p>
        </div>

        {/* Bottom Back Button */}
        <div className="pt-2">
          <button
            onClick={() => setActiveInternalView(null)}
            className="w-full py-3.5 px-4 bg-white hover:bg-red-50 border border-slate-200 hover:border-[#D3122A] text-slate-800 hover:text-[#D3122A] font-bold text-sm rounded-2xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a la Guía de servicios</span>
          </button>
        </div>
      </div>
    );
  }

  // Detailed view for Formación
  if (activeInternalView === 'formacion') {
    return (
      <div className="space-y-4 pb-12">
        {/* Back navigation button */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setActiveInternalView(null)}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#D3122A] hover:text-red-700 bg-red-50 hover:bg-red-100/80 px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a Guía de servicios</span>
          </button>
        </div>

        {/* Title Header Card */}
        <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center text-[#D3122A] shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                FORMACIÓN
              </h2>
            </div>
          </div>

          <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            <p>
              UGT apuesta por la formación de las personas trabajadoras como una forma no solo de encontrar empleo, sino como un medio para progresar en la vida y en tu carrera profesional.
            </p>
            <p>
              Para ello hemos diseñado una amplia oferta formativa que cubre desde la preparación de oposiciones para acceder a un puesto público, así como la actualización de los conocimientos de nuestra afiliación y la formación continua ligada a su carrera profesional.
            </p>
          </div>
        </div>

        {/* Preparación Oposiciones Card */}
        <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200 space-y-3">
          <div className="border-b border-slate-100 pb-2.5">
            <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wide">
              PREPARACIÓN OPOSICIONES
            </h3>
          </div>

          <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p>
              Desde UGT ofertamos una amplia formación preparatoria de las Oposiciones de Empleo Público previstas en Euskadi y en el ámbito estatal.
            </p>
            <p>
              Nuestros cursos con asesoramiento personalizado y temarios son exclusivos para afiliados/afiliadas a UGT. Parte de estos cursos se impartirán en la modalidad online, en nuestra aula virtual.
            </p>
          </div>

          <div className="p-3.5 bg-red-50/70 rounded-xl border border-red-200/80">
            <p className="text-xs sm:text-sm font-semibold text-slate-900">
              Te ayudamos a preparar la OPE de Sanidad, Correos, Ayuntamientos, Diputación, Educación, IFAS, Gobierno Vasco/ Autonómica, Administración General del Estado...
            </p>
          </div>
        </div>

        {/* Aula Virtual Card */}
        <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wide">
              AULA VIRTUAL
            </h3>
            <a
              href="https://euskadi.ugt-sp.es/desde-ugt-ponemos-a-disposicion-de-nuestras-afiliadas-y-afilados-el-aula-virtual-para-preparacion-de-cursos-de-ope/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#D3122A] hover:bg-red-700 text-white text-xs font-bold rounded-xl transition-colors shrink-0 shadow-xs"
            >
              <span>Ver web</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Cursos y Temarios OPE Card */}
        <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wide">
              CURSOS Y TEMARIOS OPE
            </h3>
            <a
              href="https://euskadi.ugt-sp.es/categoria/formacion/cursos-y-temarios-ope/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#D3122A] hover:bg-red-700 text-white text-xs font-bold rounded-xl transition-colors shrink-0 shadow-xs"
            >
              <span>Ver web</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Acuerdos Colaboración Formación Card */}
        <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200 space-y-3">
          <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-2.5">
            <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wide">
              ACUERDOS COLABORACIÓN FORMACIÓN
            </h3>
            <a
              href="https://euskadi.ugt-sp.es/acuerdos-colaboracion-formacion/?doing_wp_cron=1687934190.3762950897216796875000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#D3122A] hover:bg-red-700 text-white text-xs font-bold rounded-xl transition-colors shrink-0 shadow-xs cursor-pointer"
            >
              <span>Ver web</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p>
              Desde UGT Servicios Públicos Euskadi seguimos apostando por la formación de calidad y el desarrollo profesional de nuestro colectivo. Por ello, contamos con acuerdos de formación con diferentes entidades especializadas, que nos permiten ofrecer importantes descuentos a las personas afiliadas.
            </p>
            <p className="font-semibold text-slate-900">
              Si formas parte de UGT Servicios Públicos Euskadi, podrás acceder a cursos y actividades formativas con condiciones preferentes y precios especiales. ¡Invierte en tu futuro profesional con el respaldo del sindicato!
            </p>
          </div>
        </div>

        {/* Convenios Universidades Card */}
        <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200 space-y-3">
          <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-2.5">
            <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wide">
              CONVENIOS UNIVERSIDADES
            </h3>
            <a
              href="https://euskadi.ugt-sp.es/convenio-universidades/?doing_wp_cron=1679158476.8491609096527099609375"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#D3122A] hover:bg-red-700 text-white text-xs font-bold rounded-xl transition-colors shrink-0 shadow-xs cursor-pointer"
            >
              <span>Ver web</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p>
              UGT ha firmado con una serie de Universidades y Centros de Estudios convenios de colaboración.
            </p>
            <div className="p-3 bg-red-50/70 rounded-xl border border-red-200/80">
              <p className="font-medium text-slate-900">
                Todos aquellos afiliados/afiliadas que se matriculen en alguno de sus cursos de preparación de oposiciones, grados o cursos de postgrados podrán beneficiarse de una bonificación del 10% al 30% sobre los honorarios que las mencionadas entidades tengan vigentes en el momento de la formalización de la matrícula.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Back Button */}
        <div className="pt-2">
          <button
            onClick={() => setActiveInternalView(null)}
            className="w-full py-3.5 px-4 bg-white hover:bg-red-50 border border-slate-200 hover:border-[#D3122A] text-slate-800 hover:text-[#D3122A] font-bold text-sm rounded-2xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a la Guía de servicios</span>
          </button>
        </div>
      </div>
    );
  }

  // Detailed view for Tiempo Libre
  if (activeInternalView === 'tiempo_libre') {
    return (
      <div className="space-y-4 pb-12">
        {/* Back navigation button */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setActiveInternalView(null)}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#D3122A] hover:text-red-700 bg-red-50 hover:bg-red-100/80 px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a Guía de servicios</span>
          </button>
        </div>

        {/* Title Header Card */}
        <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200 space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center text-[#D3122A] shrink-0">
              <Palmtree className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                TIEMPO LIBRE
              </h2>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            El estar afiliado/afiliada a UGT te da opción a disfrutar de descuentos especiales
          </p>
        </div>

        {/* 1. Ligüerre de Cinca Card */}
        <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200 space-y-3">
          <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-2.5">
            <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wide">
              LIGÜERRE DE CINCA
            </h3>
            <a
              href="https://www.liguerredecinca.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#D3122A] hover:bg-red-700 text-white text-xs font-bold rounded-xl transition-colors shrink-0 shadow-xs cursor-pointer"
            >
              <span>Ver web</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p>
              Ligüerre de Cinca es principalmente una bonita historia, la de un pueblo que quedó despoblado por la construcción del embalse de El Grado, y que volvió a la vida para usos turísticos, sociales y agropecuarios. Hemos recuperado el lugar en el que vivían los antiguos habitantes y su modo de vida.
            </p>
            <p>
              Aparentemente, somos un pequeñito pueblo pirenaico ubicado en un paraje natural de gran belleza, cuando se pasea por sus calles, plazas y jardines nada hace pensar que por dentro somos un resort con dos confortables hoteles y 26 apartamentos entre otras cosas.
            </p>
            <p className="font-semibold text-slate-900">
              La combinación de naturaleza, ocio y tranquilidad convierten a Ligüerre de Cinca en un destino ideal de relax y entretenimiento.
            </p>
          </div>
        </div>

        {/* 2. Paradores Card */}
        <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200 space-y-3">
          <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-2.5">
            <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wide">
              PARADORES
            </h3>
            <a
              href="https://www.parador.es/es"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#D3122A] hover:bg-red-700 text-white text-xs font-bold rounded-xl transition-colors shrink-0 shadow-xs cursor-pointer"
            >
              <span>Ver web</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            Por ser afiliado/afiliada a nuestro sindicato podrás disfrutar de descuentos en estos establecimientos.
          </p>
        </div>

        {/* 3. SerdUGT Card */}
        <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200 space-y-3">
          <div className="border-b border-slate-100 pb-2.5">
            <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wide">
              SERdUGT
            </h3>
          </div>

          <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p className="font-semibold text-slate-900">
              SerdUGT, es la plataforma de servicios de nuestros afiliados/afiliadas. Todas las ventajas a un clic por #SerDUGT.
            </p>
            <p>
              Accede estés donde estés y aprovecha toda una oferta de servicios de ocio, tiempo libre, salud... con descuentos exclusivos.
            </p>
            <p className="font-medium text-slate-800">
              Todos tus servicios en un clic.
            </p>
          </div>

          <div className="p-3.5 bg-red-50/70 rounded-xl border border-red-200/80 flex items-center justify-between gap-3">
            <span className="text-xs sm:text-sm font-bold text-slate-900">
              • Plataforma de Servicios:
            </span>
            <a
              href="https://www.ugt.es/servicios-de-nuestros-afiliados-y-afiliadas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#D3122A] hover:bg-red-700 text-white text-xs font-bold rounded-xl transition-colors shrink-0 shadow-xs cursor-pointer"
            >
              <span>Ver servicios</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom Back Button */}
        <div className="pt-2">
          <button
            onClick={() => setActiveInternalView(null)}
            className="w-full py-3.5 px-4 bg-white hover:bg-red-50 border border-slate-200 hover:border-[#D3122A] text-slate-800 hover:text-[#D3122A] font-bold text-sm rounded-2xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a la Guía de servicios</span>
          </button>
        </div>
      </div>
    );
  }

  // Detailed view for Seguros
  if (activeInternalView === 'seguros') {
    return (
      <div className="space-y-4 pb-12">
        {/* Back navigation button */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setActiveInternalView(null)}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#D3122A] hover:text-red-700 bg-red-50 hover:bg-red-100/80 px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a Guía de servicios</span>
          </button>
        </div>

        {/* Title Header Card */}
        <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center text-[#D3122A] shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                  SEGUROS
                </h2>
              </div>
            </div>

            <a
              href="https://euskadi.ugt-sp.es/seguros-afiliacion/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#D3122A] hover:bg-red-700 text-white text-xs font-bold rounded-xl transition-colors shrink-0 shadow-xs cursor-pointer"
            >
              <span>Ver web</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="p-3 bg-red-50/70 rounded-xl border border-red-200/80">
            <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wide">
              SEGUROS GRATUITOS Y MÁS VENTAJAS PARA TU TRANQUILIDAD
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            El estar afiliado/afiliada a UGT te garantiza coberturas y descuentos oficiales y otras ventajas exclusivas. Al formar parte de nuestra organización, activas de inmediato una red de protección diseñada para acompañarte en cada etapa de tu vida profesional, garantizándote una serie de coberturas legales y técnicas que te permitirán trabajar con la tranquilidad de saber que no estás solo ante las adversidades.
          </p>
        </div>

        {/* 1. Seguro de accidentes gratuito */}
        <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200 space-y-3">
          <div className="flex items-start gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-red-50 text-[#D3122A] flex items-center justify-center shrink-0 mt-0.5">
              <HeartPulse className="w-4 h-4" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                Seguro de accidentes gratuito
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                *Seguro de accidentes gratuito para afiliados/afiliadas con una antigüedad igual o superior a un año, cubre el fallecimiento por cualquier tipo de accidente, incluido el infarto, si es declarado como accidente de trabajo.
              </p>
            </div>
          </div>
        </div>

        {/* 2. Seguro de Defensa Jurídica y Suspensión de Empleo y Sueldo gratuito */}
        <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200 space-y-3">
          <div className="border-b border-slate-100 pb-2.5">
            <h3 className="text-xs sm:text-sm font-black text-slate-900 leading-snug">
              *Seguro de Defensa Jurídica y Suspensión de Empleo y Sueldo gratuito para los afiliados/afiliadas con garantías de:
            </h3>
          </div>

          <ul className="space-y-2 pt-1 pl-1">
            <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
              <span className="w-2 h-2 rounded-full bg-[#D3122A] mt-1.5 shrink-0" />
              <span>Asistencia jurídica telefónica SOLO ámbito particular</span>
            </li>
            <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
              <span className="w-2 h-2 rounded-full bg-[#D3122A] mt-1.5 shrink-0" />
              <span>Defensa de la responsabilidad penal y fianzas</span>
            </li>
            <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
              <span className="w-2 h-2 rounded-full bg-[#D3122A] mt-1.5 shrink-0" />
              <span>Reclamación de daños corporales</span>
            </li>
            <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
              <span className="w-2 h-2 rounded-full bg-[#D3122A] mt-1.5 shrink-0" />
              <span>Subsidio por suspensión temporal de empleo y sueldo</span>
            </li>
          </ul>
        </div>

        {/* 3. Descuentos */}
        <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200 space-y-3">
          <div className="border-b border-slate-100 pb-2.5">
            <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wide">
              Descuentos:
            </h3>
          </div>

          <ul className="space-y-2 pt-1 pl-1">
            <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
              <span className="w-2 h-2 rounded-full bg-[#D3122A] mt-1.5 shrink-0" />
              <span>Reclamaciones de hipotecas</span>
            </li>
            <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
              <span className="w-2 h-2 rounded-full bg-[#D3122A] mt-1.5 shrink-0" />
              <span>Peritajes médicos</span>
            </li>
            <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
              <span className="w-2 h-2 rounded-full bg-[#D3122A] mt-1.5 shrink-0" />
              <span>Peritajes psicológicos</span>
            </li>
            <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
              <span className="w-2 h-2 rounded-full bg-[#D3122A] mt-1.5 shrink-0" />
              <span>Descuentos en sesiones con psicólogos/as</span>
            </li>
          </ul>

          <div className="pt-2">
            <a
              href="https://euskadi.ugt-sp.es/seguros-afiliacion/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-red-50 hover:bg-red-100/80 border border-red-200 text-[#D3122A] font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Ver web</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Back Button */}
        <div className="pt-2">
          <button
            onClick={() => setActiveInternalView(null)}
            className="w-full py-3.5 px-4 bg-white hover:bg-red-50 border border-slate-200 hover:border-[#D3122A] text-slate-800 hover:text-[#D3122A] font-bold text-sm rounded-2xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a la Guía de servicios</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 pb-12">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-xs border border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-[#D3122A] shrink-0">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-semibold text-[#D3122A] uppercase tracking-wider">
              {source === 'documentos' ? 'Normativa y Servicios' : 'Guía de Servicios UGT'}
            </span>
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              {source === 'documentos' ? 'Disposiciones Legales' : 'Guía de Servicios'}
            </h2>
          </div>
        </div>
        <p className="text-xs text-slate-600 mt-2 leading-relaxed">
          Accede a los diferentes servicios, departamentos y documentación oficial de UGT Servicios Públicos Euskadi.
        </p>
      </div>

      {/* Disposiciones Legales PDF Direct Button if accessed or relevant */}
      {source === 'documentos' && (
        <a
          href="https://euskadi.ugt-sp.es/wp-content/uploads/Disposiciones-Legales-2026_compressed_compressed.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl shadow-sm hover:from-red-700 hover:to-red-800 transition-all flex items-center justify-between gap-3 text-left cursor-pointer"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                Disposiciones Legales 2026
              </h3>
              <p className="text-xs text-white/90">
                Documento oficial normativo completo (PDF)
              </p>
            </div>
          </div>
          <ArrowUpRight className="w-5 h-5 text-white shrink-0" />
        </a>
      )}

      {/* Options List */}
      <div className="space-y-2.5">
        {services.map((item) => {
          if (item.isInternal) {
            return (
              <button
                key={item.id}
                onClick={() => setActiveInternalView(item.id as InternalViewType)}
                className="w-full group p-4 bg-white rounded-2xl shadow-xs border border-slate-200 hover:border-[#D3122A] hover:bg-red-50/30 active:scale-[0.99] transition-all flex items-center justify-between gap-3 text-left cursor-pointer"
              >
                <div className="min-w-0 pr-2">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#D3122A] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <span className="inline-block mt-0.5 text-[10px] font-bold text-[#D3122A] uppercase tracking-wider">
                      {item.subtitle}
                    </span>
                  )}
                </div>

                <div className="w-8 h-8 rounded-xl bg-slate-50 group-hover:bg-red-100 flex items-center justify-center shrink-0 text-slate-400 group-hover:text-[#D3122A] transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </button>
            );
          }

          return (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white rounded-2xl shadow-xs border border-slate-200 hover:border-[#D3122A] hover:bg-red-50/30 active:scale-[0.99] transition-all flex items-center justify-between gap-3 text-left cursor-pointer"
            >
              <div className="min-w-0 pr-2">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#D3122A] transition-colors leading-snug">
                  {item.title}
                </h3>
                {item.isPdf && (
                  <span className="inline-block mt-0.5 text-[10px] font-bold text-[#D3122A] uppercase tracking-wider">
                    Documento PDF oficial
                  </span>
                )}
              </div>

              <div className="w-8 h-8 rounded-xl bg-slate-50 group-hover:bg-red-100 flex items-center justify-center shrink-0 text-slate-400 group-hover:text-[#D3122A] transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
