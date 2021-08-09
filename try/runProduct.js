const { connect } = require('./db');
const { create, read, update, del } = require('./controllers/product');

// create
connect().then(async () => {
  const arr = [
    {
      id: 'hhu17',
      name: 'bread',
      category: 'food',
      quantity: 45,
      kosher: true,
      company: 'angel',
    },
    {
      id: 'hru87',
      name: 'man',
      category: 'food',
      quantity: 5,
      kosher: true,
      company: 'abadi',
    },
    {
      id: 'hhtt7',
      name: 'ozen haman',
      category: 'food',
      quantity: 15,
      kosher: true,
      company: 'anon',
    },
  ];

  arr.forEach((item) => create(item));
});

// read
// connect().then(async () => {
//   const res = await read();
//   console.log(res);
// });

// update
// connect().then(async () => {
//   const res = await update('610bc522f0919c3f6474ff6c', { name: 'koteg' });
//   console.log(res);
// });

// del
// connect().then(async () => {
//   await del('610bc522f0919c3f6474ff6c');
// });
