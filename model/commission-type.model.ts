export interface CommissionTypeModel {
  name: string;
  link: string;
  short_description: string[]; // max_length = 5
  price: number;
  price_description: string[];
  steps: {
    name: string;
    description: string[];
  }[];
  notice: string[];
  layout?: JSX.Element;
  images: {
    thumbnail: string;
    samples: any; // depends on UI
  };
}
