console.log(123);
module.exports = {
  async up(db) {
    const products = await db
      .collection("products")
      .find()
      .toArray((_, data) => data);
    console.log(products);
    return db.collection("photo").insertMany(
      products.map((product) => {
        return {
          productId: product._id,
          gallery: [
            `${product.image.split(".")[0]}-extra-${1}.png`,
            `${product.image.split(".")[0]}-extra-${2}.png`,
            `${product.image.split(".")[0]}-extra-${3}.mp4`,
            `${product.image.split(".")[0]}-extra-${4}.png`,
            `${product.image.split(".")[0]}-extra-${5}.png`,
          ],
        };
      })
    );
  },

  async down(db) {
    return db.collection("specifications").updateMany([]);
  },
};
