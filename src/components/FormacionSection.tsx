import React from 'react';
import { GraduationCap, ArrowUpRight, AlertCircle, FileText, Globe } from 'lucide-react';

export const FormacionSection: React.FC = () => {
  return (
    <div className="space-y-4 pb-12">
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
          <div>
            <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wide">
              AULA VIRTUAL
            </h3>
            <p className="text-xs text-slate-600 mt-0.5">
              Plataforma virtual para la preparación de cursos OPE
            </p>
          </div>
          <a
            href="https://euskadi.ugt-sp.es/desde-ugt-ponemos-a-disposicion-de-nuestras-afiliadas-y-afilados-el-aula-virtual-para-preparacion-de-cursos-de-ope/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#D3122A] hover:bg-red-700 text-white text-xs font-bold rounded-xl transition-colors shrink-0 shadow-xs cursor-pointer"
          >
            <span>Ver web</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Cursos y Temarios OPE Card */}
      <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200 space-y-3">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wide">
              CURSOS Y TEMARIOS OPE
            </h3>
            <p className="text-xs text-slate-600 mt-0.5">
              Catálogo oficial de convocatorias, cursos y temarios
            </p>
          </div>
          <a
            href="https://euskadi.ugt-sp.es/categoria/formacion/cursos-y-temarios-ope/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#D3122A] hover:bg-red-700 text-white text-xs font-bold rounded-xl transition-colors shrink-0 shadow-xs cursor-pointer"
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

      {/* Enlaces complementarios de formación */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-xs border border-slate-200 space-y-3">
        <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide px-1">
          Otros portales de formación
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <a
            href="https://formacionugt.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-50 hover:bg-red-50/50 border border-slate-200 hover:border-[#D3122A] rounded-xl flex items-center justify-between text-xs font-bold text-slate-900 hover:text-[#D3122A] transition-colors"
          >
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#D3122A] shrink-0" />
              <span>Formación de UGT (Estatal)</span>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          </a>

          <a
            href="https://ugteuskadi.net/formacion-cursos/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-50 hover:bg-red-50/50 border border-slate-200 hover:border-[#D3122A] rounded-xl flex items-center justify-between text-xs font-bold text-slate-900 hover:text-[#D3122A] transition-colors"
          >
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#D3122A] shrink-0" />
              <span>Formación de UGT Euskadi</span>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          </a>

          <a
            href="https://juandelostoyos.com/cursos_nuevo.php"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-50 hover:bg-red-50/50 border border-slate-200 hover:border-[#D3122A] rounded-xl flex items-center justify-between text-xs font-bold text-slate-900 hover:text-[#D3122A] transition-colors"
          >
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#D3122A] shrink-0" />
              <span>Fundación Juan de los Toyos</span>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          </a>

          <a
            href="https://www.ugt.es/sites/default/files/ok-folleto_de_cronos_certificado_profesionalidad.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-50 hover:bg-red-50/50 border border-slate-200 hover:border-[#D3122A] rounded-xl flex items-center justify-between text-xs font-bold text-slate-900 hover:text-[#D3122A] transition-colors"
          >
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#D3122A] shrink-0" />
              <span>Certificado de profesionalidad (PDF)</span>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          </a>
        </div>
      </div>

      {/* Notice regarding Certificado de profesionalidad */}
      <div className="p-4 bg-red-50/70 border border-red-200/70 rounded-2xl text-xs text-red-900 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-[#D3122A] shrink-0 mt-0.5" />
        <p className="font-semibold text-slate-900 text-xs sm:text-sm leading-relaxed">
          «Si estás interesado en obtener el Certificado de profesionalidad de Limpieza Viaria y Recogida de Residuos, ponte en contacto con tu delegado/delegada»
        </p>
      </div>
    </div>
  );
};
