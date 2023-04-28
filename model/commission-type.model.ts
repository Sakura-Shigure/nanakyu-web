export interface CommissionTypeModel {
  name: string;
  link: string;
  short_description: string[]; // max_length = 5
  price: number;
  price_description: string[];
  steps: Steps[];
  notice: string[];
}

interface Steps {
  name: string;
  description: string[];
}
