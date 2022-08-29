// JavaScript Object Notation
// JSON
const user = { id: 10, name: 'Leo Messi', job: 'footballer' };
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    name: 'Gadget Store',
    address: 'Dhaka',
    profit: 150000,
    products: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'XYZ',
        profession: 'Seller'
    },
    isExpensive: false
};
const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted.owner);