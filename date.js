const today = new Date();
const date = new Date('2062-07-28')
console.log(date.getMonth());
console.log(date.getDay());

const specificDate = new Date(2080, 6, 28)
console.log(specificDate);
specificDate.setMonth(10);
console.log(specificDate.toLocaleString('en-GB'));

