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
        const createSize=()=>faker.number.int({ min: 20, max: 55 })

        return {
          type: "crosses",
          name: faker.lorem.sentence(5),
          price: faker.number.int({
            min: 120_000,
            max: 550_000,
            multipleOf: 10_000,
          }),
          stock: faker.datatype.boolean(),
          isNew: faker.datatype.boolean(),
          material,
          size: faker.helpers.multiple(createSize, { count: 4 }),
          image: `crosses-${idx + 1}.png`,
        };
      })
    );
  },

  async down(db) {
    return db.collection("products").deleteMany();
  },
};
