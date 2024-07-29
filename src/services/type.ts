export interface Bendungan {
  sections: Section[];
  paket: Paket[];
  timeline: Timeline;
}

export interface Section {
  title: string;
  items: Item[];
}

export interface Item {
  label: string;
  value: string;
}

export interface Paket {
  id: any;
  kontrak: string;
  ruang_lingkup: string;
}

export interface Timeline {
  start: string;
  end: string;
  milestones: Milestone[];
}

export interface Milestone {
  year: any;
  color: string;
}

//IRIGASI

export interface SectionIrigasi {
  title: string;
  items: { label: string; value: string }[];
}

export interface PaketItem {
  label: string;
  value: string;
}

export interface PaketIrigasi {
  label: string;
  details: PaketItem[];
}

export interface Phase {
  title: string;
  paket: PaketIrigasi[];
}

export interface Irigasi {
  sections: SectionIrigasi[];
  phases: Phase[];
}
