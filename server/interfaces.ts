export interface Review {
  parents: Parent[];
  id: string;
  traveledWith: string;
  entryDate: number;
  travelDate: number;
  ratings: Ratings;
  titles: Texts;
  texts: Texts;
  user: string;
  locale: string;
}

export interface Parent {
  id: string;
}

export interface Ratings {
  general: General;
  aspects: { [key: string]: number };
}

export interface General {
  general: number;
}

export interface Texts {
  [key: string]: string;
}
