/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface OperatingCountry {
  name: string;
  code: string;
  coordinates: { x: number; y: number }; // Percentage coordinate on map container
  capital: string;
  importance: string;
}

export interface Statistic {
  label: string;
  value: number;
  suffix: string;
  description: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  category: string;
  title: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
}

export interface ContactFormData {
  nome: string;
  empresa: string;
  telefone: string;
  email: string;
  mensagem: string;
}

export interface QuoteRequestFormData extends ContactFormData {
  serviceRequired: string;
  urgency: string;
  origins: string;
  destinations: string;
}
