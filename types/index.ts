export interface IProduct {
  _id: string;
  type: string;
  name: string;
  price: number;
  stock: boolean;
  isNew: boolean;
  material: "gold" | "silver";
  image: string;
  size: string;
}
