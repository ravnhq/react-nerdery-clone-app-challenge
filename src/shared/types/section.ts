import { SectionItem } from './section-item';

export interface Section {
  id: string;
  title: string;
  uri?: string;
  items: SectionItem[];
  totalItems?: number;
}
