const { connect } = require('./db');
const { create, read, readOne, update, register, login } = require('./controllers/users');
const { find } = require('./models/users');

// create===================================================================
connect().then(async () => {
  const temp = {
    first_name: 'danidel',
    last_name: 'rashdid',
    mail: 'tempTheKding@gmail.com',
    password: 'abcdd1234',
    phone: '05044398874',
    lastSeen: new Date(),
    token: '??d?',
  };

  const res = await create(temp);
  console.log(res);
});

// // read  ========================================================================
// connect().then(async () => {
//   const res = await read();
//   console.log(res);
// });

// // read one ========================================================================
// connect().then(async () => {
//   const res = await readOne({ id: '1234' });
//   console.log(res);
// });

// // // update========================================================================
// connect().then(async () => {
//   const res = await update('610f7d941982e80b081b4a77', { last_name: 'rashidovski' });
//   console.log(res);
// });

// // // login========================================================================
// connect().then(async () => {
//   const res = await login({ mail: 'danieltheking@gmail.com' }, { password: 'abcd1234' });
//   console.log(res);
// });

// // register===================================================================
// connect().then(async () => {
//   const temp = {
//     id: '12s4',
//     first_name: 'dandiel',
//     last_name: 'rashgid',
//     mail: 'danielThgeKing@gmail.com',
//     password: 'abcdd1234',
//     phone: '05044984874',
//     lastSeen: new Date(),
//     token: '???',
//   };

//   const res = await register(temp);
//   console.log(res);
// });
