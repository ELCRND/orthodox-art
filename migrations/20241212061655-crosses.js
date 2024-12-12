const { faker } = require("@faker-js/faker");

const getRandomVulue = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const crossTypes = ["gold", "silver"];

module.exports = {
  async up(db) {
    return db.collection("products").insertMany(
      [...Array(12)].map((_, idx) => {
        const material = getRandomVulue(crossTypes);

        return {
          type: "cross",
          name: faker.lorem.sentence(5),
          price: +faker.string.numeric(6),
          stock: faker.datatype.boolean(),
          isNew: faker.datatype.boolean(),
          material,
          size: faker.number.int({ min: 20, max: 55 }),
          image: `cross-${idx + 1}.png`,
        };
      })
    );
  },

  async down(db) {
    return db.collection("products").updateMany([]);
  },
};
