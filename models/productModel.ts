import mongoose, { Model } from "mongoose";

export interface IProduct {
  type: string;
  name: string;
  price: number;
  stock: boolean;
  isNew: boolean;
  material: "gold" | "silver";
  image: string;
  size: string;
}

export interface IProductDocument extends IProduct {
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new mongoose.Schema<IProductDocument>(
  {
    type: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Boolean,
      required: true,
    },
    isNew: {
      type: Boolean,
      required: true,
    },
    material: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
  },
  {
    // Automatically add 'createdAt' and 'updatedAt' fields to the document
    timestamps: true,
  }
);

const Product: Model<IProductDocument> =
  mongoose.models?.Product || mongoose.model("Product", productSchema);

export default Product;
