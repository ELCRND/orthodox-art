import { Db, MongoClient, ObjectId } from "mongodb";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const clientPromise = MongoClient.connect(
  process.env.NEXT_PUBLIC_DB_URI as string,
  {
    maxPoolSize: 5,
  }
);

export const getDbAndReqBody = async (
  clientPromise: Promise<MongoClient>,
  req: Request | null
) => {
  const db = (await clientPromise).db(process.env.NEXT_PUBLIC_DB_NAME);

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

export const getSomeProducts = async (
  db: Db,
  start: number,
  end: number,
  filters: { stock: boolean; type?: string; material?: string }
) => {
  const products = await db
    .collection("products")
    .find(filters)
    .skip(start)
    .limit(end - start + 1)
    .toArray();

  return products;
};

export const generateTokens = (email: string, role: string) => {
  const accessToken = jwt.sign(
    {
      email,
    },
    process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY as string,
    {
      expiresIn: "10m",
    }
  );

  const refreshToken = jwt.sign(
    {
      email,
    },
    process.env.NEXT_PUBLIC_REFRESH_TOKEN_KEY as string,
    { expiresIn: "30d" }
  );

  return { accessToken, refreshToken };
};

export const findUserByEmail = async (db: Db, email: string) =>
  db.collection("users").findOne({ email });

export const createUserAndGenerateTokens = async (
  db: Db,
  reqBody: { email: string; password: string }
) => {
  const salt = bcrypt.genSaltSync(7);
  const hash = bcrypt.hashSync(reqBody.password, salt);

  await db.collection("users").insertOne({
    email: reqBody.email,
    password: hash,
  });

  return generateTokens(reqBody.email, "user");
};

export const getCollectionsBasket = async (db: Db, email: string) => {
  const collectionBasket = await db.collection("basket").findOne({ email });
  return collectionBasket;
};

export const createCollectionBasket = async (
  db: Db,
  email: string,
  initial = []
) => {
  const basket = await db.collection("basket").insertOne({
    email,
    products: initial,
  });
  return basket;
};
