const { faker } = require("@faker-js/faker");

module.exports = {
  async up(db) {
    const products = await db
      .collection("products")
      .find()
      .toArray((_, data) => data);
    return db.collection("specifications").insertMany(
      products.map((product) => {
        return {
          productId: product._id,
          description: faker.lorem.sentence(25),
          quaranties: faker.lorem.sentence(15),
          care: faker.lorem.sentence(20),
        };
      })
    );
  },

  async down(db) {
    return db.collection("specifications").updateMany([]);
  },
};
