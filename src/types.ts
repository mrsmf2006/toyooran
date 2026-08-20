export type PageSection = 'home' | 'projects' | 'products' | 'services' | 'knowledge' | 'about' | 'contact';

export type ProductCategory = 
  | 'feeding' // تجهیزات سیستم دانخوری
  | 'drinking' // تجهیزات سیستم آبخوری
  | 'ventilation' // تجهیزات تهویه و گرمایش
  | 'machinery' // ماشین‌آلات خط تولید خوراک و مکمل
  | 'structure' // ساخت و تجهیز سوله و سالن
  | 'feed_pharma'; // خوراک، مکمل و دارو

export interface ProjectCaseStudy {
  problem: string;
  clientNeed: string;
  solution: string;
  processSteps: { title: string; desc: string }[];
  equipmentList: string[];
  results: { label: string; value: string; detail: string }[];
}

export interface Project {
  id: string;
  title: string;
  type: 'broiler' | 'layer' | 'breeder' | 'feed_mill' | 'agriculture';
  typeTitle: string;
  capacity: string;
  location: string;
  year: string;
  image: string;
  servicesProvided: string[];
  equipmentSummary: string[];
  keyOutcome: string;
  caseStudy?: ProjectCaseStudy;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  code: string;
  name: string;
  nameEn?: string;
  category: ProductCategory;
  categoryTitle: string;
  isIndustrialMachine?: boolean;
  shortDescription: string;
  fullDescription: string;
  image: string;
  gallery?: string[];
  advantages: string[];
  applications: string[];
  specs: ProductSpec[];
  models?: string[];
  catalogPdfName?: string;
  relatedProjectIds?: string[];
  relatedArticleIds?: string[];
  faqs?: { q: string; a: string }[];
}

export interface ServiceWorkflowStep {
  stepNumber: number;
  title: string;
  description: string;
  deliverable: string;
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  iconName: string;
  problemSolved: string;
  whatWeProvide: string[];
  workflow: ServiceWorkflowStep[];
  suitableFor: string[];
  relatedEquipmentCategories: string[];
  sampleProjectIds: string[];
  faqs: { q: string; a: string }[];
}

export interface Article {
  id: string;
  title: string;
  category: 'article' | 'technical-guide' | 'product-guide' | 'faq';
  categoryLabel: string;
  readTime: string;
  date: string;
  summary: string;
  content: string[];
  relatedProductIds: string[];
  relatedServiceId?: string;
}

export interface QuoteFormData {
  projectType: string;
  targetCategory: ProductCategory | 'multiple';
  selectedEquipment: string[];
  capacity: string;
  deliveryLocation: string;
  companyName: string;
  fullName: string;
  phoneNumber: string;
  email?: string;
  additionalNotes: string;
  hasAttachment?: boolean;
}

export interface ConsultationFormData {
  fullName: string;
  phoneNumber: string;
  requestType: 'project-design' | 'equipment-selection' | 'efficiency-audit' | 'after-sales' | 'technical-inquiry';
  projectType: string;
  projectCapacity: string;
  location: string;
  message: string;
}
