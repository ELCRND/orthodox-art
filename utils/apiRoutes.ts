import { Db, MongoClient, ObjectId } from "mongodb";
const mongoose = require("mongoose");

export const clientPromise = MongoClient.connect(process.env.DB_URI as string, {
  maxPoolSize: 5,
});

export const getDbAndReqBody = async (
  clientPromise: Promise<MongoClient>,
  req: Request | null
) => {
  const db = (await clientPromise).db(process.env.DB_NAME);

  if (req) {
    const reqBody = await req.json();
    return { db, reqBody };
  }

  return { db };
};

export const getProducts = async (db: Db) => {
  const products = await db.collection("products").find().toArray();

  return products;
};

export const getProduct = async (db: Db, id: string) => {
  const product = await db
    .collection("products")
    .findOne({ _id: new ObjectId(id) });

  return product;
};

export const getAboutProduct = async (db: Db, id: string) => {
  const data = await db
    .collection("specifications")
    .findOne({ productId: new ObjectId(id) });

  return data;
};

export const getGalleryProduct = async (db: Db, id: string) => {
  const data = await db
    .collection("photo")
    .findOne({ productId: new ObjectId(id) });

  return data;
};

export const getSomeProducts = async (db: Db, start: number, end: number) => {
  const products = await db
    .collection("products")
    .find()
    .skip(start)
    .limit(end - start + 1)
    .toArray();

  return products;
};
