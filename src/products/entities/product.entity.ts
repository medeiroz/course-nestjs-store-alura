export class Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  description: string;
  category: string;
  characteristics: CharacteristicProduct[];
  images: ImageProduct[];
  created_by: string;
  created_at: Date;
  updated_at: Date;
}

export interface CharacteristicProduct {
  name: string;
  description: string;
}

export interface ImageProduct {
  url: string;
  description: string;
}
