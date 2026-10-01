export type ScreenId =
  | 'home'
  | 'convenio'
  | 'calendarios'
  | 'escuelas'
  | 'formacion'
  | 'comunicados'
  | 'afiliados'
  | 'mutua'
  | 'delegados'
  | 'cuotas'
  | 'documentos'
  | 'guia_servicios'
  | 'contacto_ugt'
  | 'contacto_acciona'
  | 'fundacion_san_prudencio'
  | 'fotografias_prensa';

export interface ConvenioArticle {
  id: string;
  articleNumber: number;
  articleLabel?: string;
  title: string;
  chapter: string;
  content: string;
  keywords: string[];
}

export type WorkShiftCategory = 'tiempo_completo' | 'tiempo_parcial';

export interface WorkShiftGroup {
  id: string;
  category: WorkShiftCategory;
  name: string;
  subgroup?: string;
  turnoLabel: string;
  shiftType?: 'diurno' | 'nocturno';
  vacationMonth: string;
  puenteName: string;
  pdfName: string;
  description?: string;
  schedule?: string;
  months?: string[];
  keyDates: {
    period: string;
    detail: string;
  }[];
  vacationDaysText?: string;
  puenteDaysText?: string;
  reductionDaysText?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: 'Negociación' | 'Seguridad' | 'Asamblea' | 'Convenio' | 'Informativo';
  summary: string;
  fullContent: string;
  isImportant?: boolean;
}

export interface EscuelaGroup {
  id: string;
  name: string;
  dayOfWeek: string;
  dates: string[];
  location: string;
  schedule: string;
  description: string;
}

export interface UnionService {
  title: string;
  description: string;
  iconName: string;
}

export interface TrainingPlatform {
  name: string;
  description: string;
  url: string;
  provider: string;
}

export interface Delegate {
  name: string;
  role: string;
  shift?: string;
  area?: string;
  phone?: string;
  email?: string;
  notes?: string;
  image?: string;
}

export interface UnionFeeTier {
  type: string;
  amount: number;
  frequency: string;
  condition: string;
  details: string;
}

export interface LegalDocument {
  id: string;
  title: string;
  category: string;
  fileSize: string;
  date: string;
  description: string;
}
