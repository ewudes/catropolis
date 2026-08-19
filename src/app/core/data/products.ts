import { OptionalProduct, Product } from '../models/product.model';

export const PRODUCTS: Product[] = [
  { id: 'chicken-small', series: 'pro', flavor: 'Курица', volume: '500 г', price: 700, imageSlug: 'chicken-small' },
  { id: 'chicken-big', series: 'pro', flavor: 'Курица', volume: '1000 г', price: 1000, imageSlug: 'chicken-big' },
  { id: 'fish-small', series: 'pro', flavor: 'Рыба', volume: '500 г', price: 700, imageSlug: 'fish-small' },
  { id: 'fish-big', series: 'pro', flavor: 'Рыба', volume: '1000 г', price: 1000, imageSlug: 'fish-big' },
  { id: 'buckwheat-small', series: 'slim', flavor: 'Гречка', volume: '500 г', price: 400, imageSlug: 'buckwheat-small' },
  { id: 'buckwheat-big', series: 'slim', flavor: 'Гречка', volume: '1000 г', price: 700, imageSlug: 'buckwheat-big' },
  { id: 'rice-small', series: 'slim', flavor: 'Рис', volume: '500 г', price: 500, imageSlug: 'rice-small' },
];

export const OPTIONAL_PRODUCTS: OptionalProduct[] = [
  { id: 'sweetener', title: 'Сахарозаменитель', unit: '1 упаковка (100 г)', price: 100 },
  { id: 'drinking-water', title: 'Питьевая вода', unit: '5 литров', price: 50 },
  { id: 'milk', title: 'Молоко', unit: '1 литр', price: 100 },
  { id: 'vitamins', title: 'Витамины', unit: '1 упаковка (39 г)', price: 300 },
];
