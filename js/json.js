// javascript object notation
// JSON
const user = { id: 11, name: 'Hero Alom', job: 'Actor' };
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
  name: 'Malek Store',
  address: 'Mirpur road',
  profit: 15000,
  owner: {
    name: 'Malek patuyari',
    job: 'actor',
  },
  products: ['laptop', 'mobile', 'pepsi'],
  isExpensive: false,
};
const shopStringified = JSON.stringify(shop);
// console.log(shop);
// console.log(shopStringified);
const converted = JSON.parse(shopStringified);
// console.log(converted.products);
