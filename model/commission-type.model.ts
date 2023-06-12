import { ReactElement } from "react";

export interface CommissionTypeModel {
  name: string;
  link: string;
  is_stop?: boolean;
  short_description: string[]; // max_length = 5
  price: number;
  price_description: string[];
  steps: {
    name: string;
    description: string[];
  }[];
  notice: string[];
  layout?: any;
  images: {
    samples: any; // depends on UI
  };
}
