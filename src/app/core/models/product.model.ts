export interface Product {
  id: string;
  series: 'pro' | 'slim';
  flavor: string;
  volume: string;
  price: number;
  imageSlug: string;
}

export interface OptionalProduct {
  id: string;
  title: string;
  unit: string;
  price: number;
}
