export interface Product {
  id: number,
  name: string,
  description: string,
  price: number

}

export const products: Product[] = [
  {
    id: 10,
    name: "iphone",
    description: "The best ever phone available in the market.",
    price: 750
  },
  {
    id: 11,
    name: "Samsung A6",
    description: "The best ever Android available in the market.",
    price: 600
  }
];

