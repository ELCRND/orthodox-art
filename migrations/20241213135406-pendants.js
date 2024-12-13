const { faker } = require("@faker-js/faker");

const getRandomVulue = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const pendantsTypes = ["gold", "silver"];

module.exports = {
  async up(db) {
    return db.collection("products").insertMany(
      [...Array(9)].map((_, idx) => {
        const material = getRandomVulue(pendantsTypes);

        return {
          type: "pendants",
          name: faker.lorem.sentence(5),
          price: faker.number.int({
            min: 120_000,
            max: 550_000,
            multipleOf: 10,
          }),
          stock: faker.datatype.boolean({ probability: 0.7 }),
          isNew: faker.datatype.boolean(),
          material,
          size: faker.number.int({ min: 20, max: 55 }),
          image: `pendants-${idx + 1}.png`,
        };
      })
    );
  },

  async down(db) {
    return db.collection("products").deleteMany();
  },
};
