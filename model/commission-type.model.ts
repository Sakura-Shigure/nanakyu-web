export interface CommissionTypeModel {
  id: string;
  name: string;
  short_description: string[]; // max_length = 5
  price: number;
}
