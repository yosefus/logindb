const { connect } = require('./db');
const { create, read, update, del } = require('./controllers/users');

// create===================================================================

// connect().then(async () => {
//   const danielpv = {
//     id: 'kko',
//     name: 'danielpv',
//     mail: 'uio@gmail.com',
//     age: 13,
//     isMarried: false,
//     notes: ['String', 'jjj'],
//     addres: {
//       city: 'jer',
//       street: 'okk',
//       streetNum: 12,
//     },
//   };

//   // await create(moti);

//   const res = await create(danielpv);
//   console.log(res);
// });

// read filter ========================================================================
// connect().then(async () => {
//   const res = await read({ id: '113' });
//   console.log(res);
// });

// read  ========================================================================
// connect().then(async () => {
//   const res = await read();
//   console.log(res);
// });

// connect().then(async () => {
//   const res = await update('610baa99a95e803b64b48179', { age: 28 });
//   const res = await update('610baa99a95e803b64b48179', { address.city: 28 });
//   console.log(res);
// });

connect().then(async () => {
  const res = await del('610ba1a771c6e91fac9bb996');
  console.log(res);
});
