const faker = require('faker');
const fs = require('fs');
const path = require('path');

const generateReviews = (num) => {
  const reviews = [];
  for (let i = 0; i <= num; i += 1) {
    reviews.push({
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      date: faker.date.between('2012-01-01', '2015-12-31'),
      text: faker.lorem.paragraph(),
      profilePic: 'https://placeimg.com/72/72/people',
      star: faker.random.boolean(),
      numOfStars: faker.random.number({ min: 1, max: 4 }),
    });
  }
  return reviews;
};

const createRestaurant = (id) => {
  const restaurant = {
    _id: id,
    reviews: generateReviews(faker.random.number(5)),
  };
  return restaurant;
};

let count = 1;
const maxCount = 100;
const restaurants = [];
while (count <= maxCount) {
  const restaurant = createRestaurant(count);
  restaurants.push(restaurant);
  count += 1;
}

// console.log(restaurants.length, 'restaurants created');
const json = JSON.stringify(restaurants, null, 2);
fs.writeFileSync(path.join(__dirname, 'zagat-data.json'), json, 'utf8', () => {
  console.log('Data generation done');
});
