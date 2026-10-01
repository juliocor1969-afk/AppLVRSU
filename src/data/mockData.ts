import {
  ConvenioArticle,
  WorkShiftGroup,
  NewsItem,
  EscuelaGroup,
  UnionService,
  TrainingPlatform,
  Delegate,
  UnionFeeTier,
  LegalDocument,
} from '../types';

export const CONVENIO_ARTICLES: ConvenioArticle[] = [
  {
    id: 'art-1',
    articleNumber: 1,
    title: 'Ámbito de Aplicación y Funcional',
    chapter: 'Capítulo I - Disposiciones Generales',
    content:
      'El presente Convenio Colectivo regula las relaciones laborales entre la empresa adjudicataria del servicio público de Limpieza Viaria y Recogida de Residuos Sólidos Urbanos (RSU) del Excmo. Ayuntamiento de Vitoria-Gasteiz y la totalidad de su plantilla de trabajadores y trabajadoras, con exclusión de las personas a las que hace referencia el artículo 1.3 del Estatuto de los Trabajadores.',
    keywords: ['ámbito', 'adjudicataria', 'limpieza', 'rsu', 'vitoria-gasteiz', 'plantilla', 'aplicación'],
  },
  {
    id: 'art-6',
    articleNumber: 6,
    title: 'Jornada Laboral y Horarios',
    chapter: 'Capítulo II - Tiempo de Trabajo',
    content:
      'La jornada laboral anual máxima será de 1.592 horas de trabajo efectivo, equivalentes a un promedio de 35 horas semanales. La jornada diaria ordinaria será continuada de 7 horas en turnos de mañana, tarde y noche, computándose como tiempo efectivo de trabajo el descanso de 20 minutos (bocadillo). Para el personal a tiempo parcial, la jornada se adaptará a los coeficientes fijados en su respectivo contrato y calendario anual.',
    keywords: ['jornada', '1592 horas', '35 horas', 'bocadillo', 'turnos', 'mañana', 'tarde', 'noche', 'tiempo parcial'],
  },
  {
    id: 'art-11',
    articleNumber: 11,
    title: 'Vacaciones Anuales y Periodos Estivales',
    chapter: 'Capítulo II - Tiempo de Trabajo',
    content:
      'El personal disfrutará de 30 días naturales de vacaciones retribuidas o la parte proporcional que corresponda. Los periodos de disfrute se articularán en turnos rotativos en los meses de verano (junio, julio, agosto y septiembre) según los calendarios aprobados con la representación sindical. Durante el disfrute de las vacaciones se percibirá la retribución ordinaria íntegra, incluyendo promedio de pluses de toxicidad, nocturnidad y turnicidad.',
    keywords: ['vacaciones', '30 días', 'verano', 'julio', 'agosto', 'septiembre', 'rotativo', 'retribución', 'pluses'],
  },
  {
    id: 'art-15',
    articleNumber: 15,
    title: 'Permisos Retribuidos y Licencias',
    chapter: 'Capítulo III - Conciliación y Permisos',
    content:
      'Las personas trabajadoras tendrán derecho a licencias retribuidas en los siguientes supuestos: Matrimonio o pareja de hecho (15 días naturales); Nacimiento, adopción o acogimiento (según legislación vigente); Fallecimiento, accidente o enfermedad grave de parientes hasta 2º grado (3 a 5 días laborables según desplazamiento); Traslado de domicilio habitual (2 días); Deber inexcusable de carácter público y sindical (el tiempo indispensable); Asistencia a consultas médicas de la Seguridad Social o especialistas (tiempo necesario con justificante).',
    keywords: ['permisos', 'licencias', 'matrimonio', 'enfermedad grave', 'fallecimiento', 'médico', '2º grado', 'justificante'],
  },
  {
    id: 'art-22',
    articleNumber: 22,
    title: 'Estructura Retributiva y Pluses Específicos',
    chapter: 'Capítulo IV - Régimen Económico',
    content:
      'La retribución estará compuesta por el Salario Base según categoría profesional, Antigüedad (trienios), Plus de Toxicidad, Penosidad y Peligrosidad (20% del salario base para personal de recogida y peonaje viario), Plus de Nocturnidad (para servicios comprendidos entre las 22:00 y las 06:00 horas, con recargo del 25%), Plus de Turnicidad y Pagas Extraordinarias de Julio, Navidad y Beneficios abonadas íntegramente.',
    keywords: ['salario', 'toxicidad', 'penosidad', 'peligrosidad', 'nocturnidad', 'trienios', 'pagas extras', 'retribución'],
  },
  {
    id: 'art-28',
    articleNumber: 28,
    title: 'Complemento por Incapacidad Temporal (IT)',
    chapter: 'Capítulo IV - Régimen Económico',
    content:
      'En caso de Incapacidad Temporal derivada de Accidente de Trabajo o Enfermedad Profesional, la empresa abonará un complemento hasta el 100% de la base reguladora mensual desde el primer día de la baja. En los supuestos de contingencias comunes (enfermedad común o accidente no laboral) con hospitalización o intervención quirúrgica, se garantizará igualmente el 100% desde el primer día; en el resto de contingencias comunes se complementará hasta el 100% a partir del 4º día de baja.',
    keywords: ['baja', 'incapacidad temporal', 'accidente', 'enfermedad profesional', '100%', 'complemento it', 'hospitalización'],
  },
  {
    id: 'art-34',
    articleNumber: 34,
    title: 'Seguridad, Salud Laboral y Vestuario (EPIs)',
    chapter: 'Capítulo V - Salud Laboral',
    content:
      'La empresa proporcionará con carácter semestral la ropa de trabajo adecuada a cada estación climatológica (equipos de invierno y verano homologados de alta visibilidad clase 3). Asimismo facilitará los Equipos de Protección Individual (calzado de seguridad antideslizante con puntera reforzada, guantes anticorte y anti-pinchazos, protección auditiva y ocular). En episodios de alertas meteorológicas por altas temperaturas (olas de calor), se aplicará de forma automática el Protocolo Específico de Estrés Térmico pactado con UGT, adaptando ritmos e hidratación.',
    keywords: ['seguridad', 'salud', 'epis', 'ropa de trabajo', 'calzado', 'guantes', 'alta visibilidad', 'ola de calor', 'estrés térmico'],
  },
  {
    id: 'art-41',
    articleNumber: 41,
    title: 'Garantías Sindicales y Derechos del Comité',
    chapter: 'Capítulo VI - Representación de los trabajadores/trabajadoras',
    content:
      'Los miembros del Comité de Empresa y Delegados/delegadas de la Sección Sindical de UGT dispondrán del crédito horario retribuido establecido legalmente, acumulable de forma mensual entre sus representantes para optimizar la defensa de los trabajadores/trabajadoras. Se garantizará el acceso a tablones sindicales físicos y digitales, derecho de asamblea en los centros de trabajo (lonjas) y participación activa en el Comité de Seguridad y Salud.',
    keywords: ['sindical', 'comité', 'ugt', 'crédito horario', 'asamblea', 'lonjas', 'derechos', 'delegados/delegadas'],
  },
];

export const WORK_SHIFT_GROUPS: WorkShiftGroup[] = [
  // Tiempo Completo (4)
  {
    id: 'tc-diurno-1-julio',
    category: 'tiempo_completo',
    name: 'Primer turno diurno',
    subgroup: 'Semana Santa - Julio - Primera reducción',
    turnoLabel: 'PRIMER TURNO DIURNO: SEMANA SANTA - JULIO - PRIMERA REDUCCIÓN',
    shiftType: 'diurno',
    vacationMonth: 'Julio',
    puenteName: 'Semana Santa',
    pdfName: 'tc_diurno_1_julio.pdf',
    vacationDaysText: '30 de junio al 24 de julio',
    puenteDaysText: 'Semana Santa (6 al 10 de abril)',
    reductionDaysText: '17, 18, 21, 22, 23, 24, 28 y 29 de diciembre',
    keyDates: [
      { period: 'Vacaciones', detail: '30 de junio al 24 de julio' },
      { period: 'Puente', detail: 'Semana Santa (6 al 10 de abril)' },
      { period: 'Primera reducción de jornada', detail: '17, 18, 21, 22, 23, 24, 28 y 29 de diciembre' },
    ],
  },
  {
    id: 'tc-diurno-2-agosto',
    category: 'tiempo_completo',
    name: 'Segundo turno diurno',
    subgroup: 'San Prudencio - Agosto - Segunda reducción',
    turnoLabel: 'SEGUNDO TURNO DIURNO: SAN PRUDENCIO - AGOSTO - SEGUNDA REDUCCIÓN',
    shiftType: 'diurno',
    vacationMonth: 'Agosto',
    puenteName: 'San Prudencio',
    pdfName: 'tc_diurno_2_agosto.pdf',
    vacationDaysText: 'Agosto (1 al 26 de agosto)',
    puenteDaysText: 'San Prudencio (27 al 30 de abril)',
    reductionDaysText: '30, 31 dic y 4, 5, 7, 8, 11, 12 ene',
    keyDates: [
      { period: 'Vacaciones', detail: 'Agosto (1 al 26 de agosto)' },
      { period: 'Puente', detail: 'San Prudencio (27 al 30 de abril)' },
      { period: 'Segunda reducción de jornada', detail: '30 y 31 de diciembre; 4, 5, 7, 8, 11 y 12 de enero' },
    ],
  },
  {
    id: 'n-tc-1-julio',
    category: 'tiempo_completo',
    name: 'Primer turno nocturno',
    subgroup: 'Semana Santa - Julio - Primera reducción',
    turnoLabel: 'PRIMER TURNO NOCTURNO: SEMANA SANTA - JULIO - PRIMERA REDUCCIÓN',
    shiftType: 'nocturno',
    vacationMonth: 'Julio',
    puenteName: 'Semana Santa',
    pdfName: 'n_tc_1_julio.pdf',
    vacationDaysText: '29 y 30 jun, y 1 al 30 de julio',
    puenteDaysText: 'Semana Santa (6 al 9 de abril)',
    reductionDaysText: '16, 17, 20, 21, 22, 23, 27 y 28 de diciembre',
    keyDates: [
      { period: 'Vacaciones', detail: '29 y 30 de junio, y 1 al 30 de julio' },
      { period: 'Puente', detail: 'Semana Santa (6 al 9 de abril)' },
      { period: 'Primera reducción de jornada', detail: '16, 17, 20, 21, 22, 23, 27 y 28 de diciembre' },
    ],
  },
  {
    id: 'n-tc-2-agosto',
    category: 'tiempo_completo',
    name: 'Segundo turno nocturno',
    subgroup: 'San Prudencio - Agosto - Segunda reducción',
    turnoLabel: 'SEGUNDO TURNO NOCTURNO: SAN PRUDENCIO - AGOSTO - SEGUNDA REDUCCIÓN',
    shiftType: 'nocturno',
    vacationMonth: 'Agosto',
    puenteName: 'San Prudencio',
    pdfName: 'n_tc_2_agosto.pdf',
    vacationDaysText: '31 jul, 2 al 31 ago, 1 al 3 sep',
    puenteDaysText: 'San Prudencio (26, 28 y 29 de abril, 3 de mayo)',
    reductionDaysText: '29, 30 dic y 3, 4, 6, 7, 10, 11 ene',
    keyDates: [
      { period: 'Vacaciones', detail: '31 de julio, 2 al 31 de agosto, 1 al 3 de septiembre' },
      { period: 'Puente', detail: 'San Prudencio (26, 28 y 29 de abril, 3 de mayo)' },
      { period: 'Segunda reducción de jornada', detail: '29, 30 de diciembre; 3, 4, 6, 7, 10 y 11 de enero' },
    ],
  },

  // Tiempo Parcial (4)
  {
    id: 'tp-1-junio-pilar',
    category: 'tiempo_parcial',
    name: 'Primer turno',
    subgroup: 'El Pilar - Junio',
    turnoLabel: 'PRIMER TURNO: EL PILAR - JUNIO',
    vacationMonth: 'Junio',
    puenteName: 'El Pilar',
    pdfName: 'tp_1_junio_pilar.pdf',
    vacationDaysText: '23 de mayo al 26 de junio',
    puenteDaysText: 'El Pilar (10 al 16 de octubre)',
    keyDates: [
      { period: 'Vacaciones', detail: '23 de mayo al 26 de junio' },
      { period: 'Puente', detail: 'El Pilar (10 al 16 de octubre)' },
    ],
  },
  {
    id: 'tp-2-julio-constitucion',
    category: 'tiempo_parcial',
    name: 'Segundo turno',
    subgroup: 'La constitución - Julio',
    turnoLabel: 'SEGUNDO TURNO: LA CONSTITUCIÓN - JULIO',
    vacationMonth: 'Julio',
    puenteName: 'La Constitución',
    pdfName: 'tp_2_julio_constitucion.pdf',
    vacationDaysText: '27 de junio al 31 de julio',
    puenteDaysText: 'La Constitución (4 al 10 de diciembre)',
    keyDates: [
      { period: 'Vacaciones', detail: '27 de junio al 31 de julio' },
      { period: 'Puente', detail: 'La Constitución (4 al 10 de diciembre)' },
    ],
  },
  {
    id: 'tp-3-agosto-carnavales',
    category: 'tiempo_parcial',
    name: 'Tercer turno',
    subgroup: 'Carnavales - Agosto',
    turnoLabel: 'TERCER TURNO: CARNAVALES - AGOSTO',
    vacationMonth: 'Agosto',
    puenteName: 'Carnavales',
    pdfName: 'tp_3_agosto_carnavales.pdf',
    vacationDaysText: '1 de agosto al 4 de septiembre',
    puenteDaysText: 'Carnavales (12 al 18 de febrero)',
    keyDates: [
      { period: 'Vacaciones', detail: '1 de agosto al 4 de septiembre' },
      { period: 'Puente', detail: 'Carnavales (12 al 18 de febrero)' },
    ],
  },
  {
    id: 'tp-4-septiembre-semana-santa',
    category: 'tiempo_parcial',
    name: 'Cuarto turno',
    subgroup: 'Semana Santa - Septiembre',
    turnoLabel: 'CUARTO TURNO: SEMANA SANTA - SEPTIEMBRE',
    vacationMonth: 'Septiembre',
    puenteName: 'Semana Santa',
    pdfName: 'tp_4_septiembre_semana_santa.pdf',
    vacationDaysText: '5 de septiembre al 9 de octubre',
    puenteDaysText: 'Semana Santa (31 de marzo, 1, 4 y 5 de abril)',
    keyDates: [
      { period: 'Vacaciones', detail: '5 de septiembre al 9 de octubre' },
      { period: 'Puente', detail: 'Semana Santa (31 de marzo, 1, 4 y 5 de abril)' },
    ],
  },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'noticia-1',
    title: 'Actualización Salarial 2026 y Revisión de Tablas de Pluses',
    date: '20 de Enero de 2026',
    category: 'Negociación',
    summary:
      'La Sección Sindical de UGT firma con la empresa la consolidación del incremento según IPC pactado en convenio, afectando a salario base, nocturnidad y plus tóxico.',
    fullContent:
      'Tras las intensas reuniones mantenidas entre la Sección Sindical de UGT y la dirección de la empresa adjudicataria, se ha formalizado la aplicación de la revisión salarial prevista en el Convenio Colectivo. El aumento se verá reflejado en la nómina de febrero con carácter retroactivo desde el 1 de enero de 2026. Se actualizarán las cuantías de salario base, plus tóxico-penoso-peligroso, nocturnidad y pluses de festivos y domingos trabajados. Para cualquier discrepancia en el recibo de salario, los delegados/delegadas están a vuestra disposición.',
    isImportant: true,
  },
  {
    id: 'noticia-2',
    title: 'Aprobación del Cuadrante Oficial de Calendarios y Turnos de Verano 2026',
    date: '15 de Diciembre de 2025',
    category: 'Convenio',
    summary:
      'Se publican los cuadrantes oficiales de vacaciones para Tiempo Completo (Diurno y Nocturno) y Tiempo Parcial (Junio a Septiembre).',
    fullContent:
      'La comisión paritaria del Comité de Empresa y UGT ha cerrado el acuerdo de los calendarios laborales 2026. Se garantiza el cumplimiento escrupuloso de las 1.592 horas anuales, los descansos mínimos ininterrumpidos y la rotación justa de los grupos de verano en julio y agosto. Podéis consultar los PDF detallados de cada grupo en la sección de Calendarios de esta aplicación.',
  },
  {
    id: 'noticia-3',
    title: 'Protocolo de Prevención ante Olas de Calor y Estrés Térmico',
    date: '10 de Noviembre de 2025',
    category: 'Seguridad',
    summary:
      'Refuerzo de medidas preventivas para el peonaje viario en Vitoria-Gasteiz: paradas de hidratación, zonas de sombra y adaptación horaria en avisos naranja/rojo.',
    fullContent:
      'Desde el Comité de Seguridad y Salud, los delegados/delegadas de prevención de UGT hemos exigido la optimización de los protocolos de estrés térmico. Queda estipulado que ante alertas amarillas o superiores emitidas por Euskalmet, los servicios a pie contarán con pausas obligatorias, suministro continuo de agua fresca isotónica y reprogramación de las tareas de mayor esfuerzo físico a las horas más frescas.',
  },
  {
    id: 'noticia-4',
    title: 'Convocatoria de Escuelas Sindicales UGT para el Ejercicio 2026',
    date: '28 de Octubre de 2025',
    category: 'Informativo',
    summary:
      'Publicadas las fechas de las Escuelas Sindicales para los grupos de Viernes, Sábados y Lunes. Formación gratuita y con permiso retribuido.',
    fullContent:
      'Animamos a todas las compañeras y compañeros afiliados/afiliadas a participar en los ciclos de Escuelas Sindicales 2026. Se abordarán temas cruciales como el análisis de nóminas, salud y riesgos laborales, convenios colectivos y habilidades de representación. Consultad los calendarios de fechas en el apartado correspondiente de la app para coordinar los permisos correspondientes con vuestro delegado/delegada.',
  },
  {
    id: 'noticia-5',
    title: 'Apertura de la Convocatoria de Acreditación de Competencias Profesionales',
    date: '12 de Octubre de 2025',
    category: 'Informativo',
    summary:
      'Lanbide abre el proceso de acreditación de la experiencia laboral en Limpieza en Espacios Abiertos y Gestión de Residuos.',
    fullContent:
      'El sindicato UGT pone a disposición de todos los trabajadores/trabajadoras un servicio de acompañamiento y asesoramiento personalizado para certificar vuestra experiencia laboral y conseguir el Certificado de Profesionalidad oficial. Pasaos por el local sindical de UGT en Vitoria para recopilar la documentación y formalizar la solicitud.',
  },
];

export const ESCUELAS_SINDICALES: EscuelaGroup[] = [
  {
    id: 'grupo-viernes',
    name: 'Grupo Viernes',
    dayOfWeek: 'Viernes',
    dates: ['23 de enero', '13 de marzo', '8 de mayo', '23 de octubre', '20 de noviembre'],
    location: 'Sede UGT Vitoria-Gasteiz (Calle San Antonio, 45 - Salón de actos)',
    schedule: '10:00 a 13:30',
    description: '',
  },
  {
    id: 'grupo-sabados',
    name: 'Grupo Sábados',
    dayOfWeek: 'Sábados',
    dates: ['24 de enero', '14 de marzo', '9 de mayo', '24 de octubre', '21 de noviembre'],
    location: 'Sede UGT Vitoria-Gasteiz (Calle San Antonio, 45 - Salón de actos)',
    schedule: '10:00 a 13:30',
    description: 'Orientado a trabajadores/trabajadoras con turnos de lunes a viernes o descanso en sábado.',
  },
  {
    id: 'grupo-lunes',
    name: 'Grupo Lunes',
    dayOfWeek: 'Lunes',
    dates: ['26 de enero', '16 de marzo', '11 de mayo', '26 de octubre', '23 de noviembre'],
    location: 'Sede UGT Vitoria-Gasteiz (Calle San Antonio, 45 - Salón de actos)',
    schedule: '10:00 a 13:30',
    description: 'Orientado a trabajadores/trabajadoras con libranza en lunes o turno nocturno con descanso compensatorio.',
  },
];

export const UNION_SERVICES: UnionService[] = [
  {
    title: 'Asesoría Jurídica Laboral',
    description: 'Defensa jurídica integral gratuita o bonificada para afiliados/afiliadas en despidos, sanciones, reclamaciones de cantidad y derechos laborales.',
    iconName: 'Scale',
  },
  {
    title: 'Revisión y Cálculo de Nóminas',
    description: 'Auditoría detallada de conceptos salariales: horas nocturnas, plus de toxicidad/peligrosidad, complementos de festivos y cálculo de atrasos.',
    iconName: 'Calculator',
  },
  {
    title: 'Salud Laboral y Prevención de Riesgos',
    description: 'Intervención ante riesgos ergonómicos, accidentes laborales, dotación de EPIs de alta visibilidad y representación activa en el CSS.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Gestión de Incapacidad Temporal y Mutua',
    description: 'Asesoramiento y tramitación ante altas médicas indebidas de la Mutua MC-MUTUAL, contingencias profesionales e indemnizaciones.',
    iconName: 'HeartPulse',
  },
  {
    title: 'Acompañamiento en Conciliación',
    description: 'Gestión de reducciones de jornada, adaptación horaria por cuidado de hijos/mayores y permisos retribuidos según convenio.',
    iconName: 'Users',
  },
  {
    title: 'Bolsa de Empleo y Promoción',
    description: 'Información y seguimiento de promociones internas, concursos de vacantes para puestos fijos y cobertura de turnos.',
    iconName: 'Briefcase',
  },
];

export const TRAINING_PLATFORMS: TrainingPlatform[] = [
  {
    name: 'Formación de UGT Euskadi',
    description: 'Cursos subvencionados para personas trabajadoras en activo y desempleadas en el ámbito de Euskadi.',
    url: 'https://ugteuskadi.net/formacion-cursos/',
    provider: 'UGT Euskadi',
  },
  {
    name: 'Formación Estatal UGT',
    description: 'Plataforma estatal con catálogo formativo en competencias digitales, prevención, idiomas y cualificación técnica.',
    url: 'https://formacionugt.org/',
    provider: 'UGT Confederal',
  },
  {
    name: 'Fundación Juan de los Toyos',
    description: 'Cursos específicos, formación continua sectorial, seminarios históricos y capacitación laboral.',
    url: 'https://juandelostoyos.com/cursos_nuevo.php',
    provider: 'Fundación Juan de los Toyos',
  },
  {
    name: 'Federación de Servicios Públicos',
    description: 'Formación especializada en servicios esenciales, gestión de residuos urbanos, limpieza viaria y empleo público.',
    url: 'https://euskadi.ugt-sp.es/formacion/',
    provider: 'UGT-SP Euskadi',
  },
];

export const DELEGATES: Delegate[] = [
  {
    name: 'Severino Ubierna',
    role: 'Presidente del Comité de Empresa',
    shift: 'Turno Diurno / Mañana',
    area: 'Comité de Empresa - UGT',
    phone: '648928661',
    email: 'ugt.limpieza.vitoria@gmail.com',
    notes: 'Coordinación general de relaciones laborales, asambleas y negociación con empresa y Ayuntamiento.',
  },
  {
    name: 'Yolanda Iturriaga',
    role: 'Secretaria del Comité de Empresa',
    shift: 'Turno Diurno / Mañana',
    area: 'Comité de Empresa - UGT',
    phone: '648928661',
    email: 'ugt.limpieza.vitoria@gmail.com',
    notes: 'Gestión de actas, convocatorias del Comité, licencias y asesoramiento en igualdad y conciliación.',
  },
  {
    name: 'José Luis Montón',
    role: 'Delegado sindical - Noche',
    shift: 'Turno de Noche',
    area: 'Recogida RSU / Nocturna',
    phone: '648928661',
    notes: 'Referente directo para los equipos del turno de noche, parque móvil y problemática de recogida.',
  },
  {
    name: 'Julio Corral',
    role: 'Delegado sindical - Tarde',
    shift: 'Turno de Tarde',
    area: 'Limpieza Viaria / Tarde',
    phone: '648928661',
    notes: 'Atención a compañeras y compañeros del turno de tarde, maquinaria y lonjas asignadas.',
  },
  {
    name: 'Tomás Cid',
    role: 'Delegado sindical - Mañanas y lonjas',
    shift: 'Turno de Mañana - Lonjas',
    area: 'Lonjas y Puntos de Encuentro',
    phone: '648928661',
    notes: 'Coordinación de instalaciones de lonjas, vestuarios, condiciones térmicas y peonaje viario.',
  },
  {
    name: 'Jorge García',
    role: 'Delegado sindical - Tiempo parcial',
    shift: 'Tiempo Parcial',
    area: 'Personal Fines de Semana / Refuerzo',
    phone: '648928661',
    notes: 'Defensa de los derechos específicos del personal a tiempo parcial, coeficientes y calendarios.',
  },
  {
    name: 'Saioa Vindel',
    role: 'Delegada sindical - Estructura',
    shift: 'Estructura',
    area: 'Estructura y Oficinas Centrales',
    phone: '648928661',
    notes: 'Enlace con personal técnico, administración, mandos intermedios y taller mecánico.',
  },
  {
    name: 'José Manuel García',
    role: 'Delegado sindical - Tarde',
    shift: 'Turno de Tarde',
    area: 'Limpieza Viaria / Tarde',
    phone: '648928661',
    notes: 'Delegado de apoyo en el turno vespertino, seguridad vial y equipos de trabajo.',
  },
];

export const UNION_FEES: UnionFeeTier[] = [
  {
    type: 'Cuota Básica',
    amount: 16.5,
    frequency: '€ / mes',
    condition: 'General',
    details: 'Para trabajadores y trabajadoras en activo a jornada completa o con ingresos estándar.',
  },
  {
    type: 'Cuota Reducida',
    amount: 11.35,
    frequency: '€ / mes',
    condition: 'Ingresos ≤ 14.000 €/año',
    details: 'Para personas con ingresos anuales íntegros iguales o inferiores a 14.000 € (tiempo parcial, jornadas reducidas).',
  },
  {
    type: 'Cuotas Especiales (Tipo D)',
    amount: 4.75,
    frequency: '€ / mes',
    condition: 'Jubilados y Parados',
    details: 'Para jubilados/as, pensionistas y personas en situación de desempleo sin prestación o con ingresos inferiores a 1,5 veces el SMI.',
  },
];

export const LEGAL_DOCUMENTS: LegalDocument[] = [
  {
    id: 'doc-convenio',
    title: 'Convenio Colectivo Limpieza Viaria y RSU Vitoria-Gasteiz',
    category: 'Convenio Colectivo',
    fileSize: '2.4 MB',
    date: 'Vigente 2024-2027',
    description: 'Texto articulado íntegro publicado en el BOTHA con tablas salariales y anexos de pluses.',
  },
  {
    id: 'doc-estatuto',
    title: 'Estatuto de los Trabajadores (Real Decreto Legislativo 2/2015)',
    category: 'Legislación Estatal',
    fileSize: '1.8 MB',
    date: 'Actualizado 2026',
    description: 'Marco legislativo general regulador de las relaciones laborales individuales y colectivas.',
  },
  {
    id: 'doc-lprl',
    title: 'Ley 31/1995 de Prevención de Riesgos Laborales',
    category: 'Salud Laboral',
    fileSize: '1.2 MB',
    date: 'BOE Consolidado',
    description: 'Normativa fundamental de seguridad, salud en el trabajo y derechos de los delegados/delegadas de prevención.',
  },
  {
    id: 'doc-acreditacion',
    title: 'Guía del Procedimiento de Acreditación de Competencias (Lanbide / SEPE)',
    category: 'Acreditación y Cualificaciones',
    fileSize: '850 KB',
    date: 'Convocatoria 2026',
    description: 'Pasos, requisitos y formularios para obtener el Certificado de Profesionalidad por experiencia demostrable.',
  },
  {
    id: 'doc-protocolo-acoso',
    title: 'Protocolo de Prevención e Intervención contra el Acoso Laboral y Sexual',
    category: 'Igualdad y Protocolos',
    fileSize: '620 KB',
    date: 'Acuerdo Comité',
    description: 'Procedimiento confidencial y canal de denuncia de conductas contrarias a la dignidad de las personas trabajadoras.',
  },
  {
    id: 'doc-permisos',
    title: 'Modelo Oficial de Solicitud de Permisos y Licencias Retribuidas',
    category: 'Formularios Sindicales',
    fileSize: '310 KB',
    date: 'Plantilla UGT',
    description: 'Documento descargable para registrar solicitudes de permisos retribuidos ante el departamento de RRHH.',
  },
];
