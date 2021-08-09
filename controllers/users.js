const UserModel = require('../models/users');
const bcryptjs = require('bcryptjs');
const { createToken, verifyToken } = require('../jwt');

//register=======================================================
async function register(body) {
  const temp = {
    first_name: body.first_name,
    last_name: body.last_name,
    mail: body.mail,
    password: body.password,
    phone: body.phone,
    lastSeen: new Date(),
    token: '???',
  };
  temp.password = bcryptjs.hashSync(temp.password, 8);

  return await UserModel.create(temp);
}

exports.register = register;

//login=======================================================
async function login(_mail, _password) {
  console.log(_mail, _password);
  const user = await readOne({ mail: _mail }, '+password');
  if (!bcryptjs.compareSync(_password, user.password)) throw 'the password or the user name are not correct';
  console.log('kkkkk');

  user.token = await createToken(user._id);
  user.lastSeen = await Date.now();
  console.log(user);

  const r = await update(user._id, user);
  // const r2 = await readOne({ _id: user._id });

  return user;
}

exports.login = login;

// read=========================================================
async function read(filter, token) {
  // const user = readOne({ token });
  // console.log(user);
  // if (user && verifyToken(user._id, token)) {
  return await UserModel.find(filter);
  // } else throw 'not connected';
}
exports.read = read;

// // read=========================================================
// async function read() {
//   return await UserModel.find();
// }
// exports.read = read;

// read one =========================================================
async function readOne(filter, projection) {
  const resultFindOne = await UserModel.findOne(filter, projection);
  if (!resultFindOne) throw 'we didnt find any user like this';

  return resultFindOne;
}
exports.readOne = readOne;

// update=========================================================
async function update(_id, _newData) {
  if (!_id) throw 'you didnt put any id'; //validation check
  if (!_newData) throw 'you didnt put any new data';

  // const result = await UserModel.findByIdAndUpdate(_id, _newData, { new: true });
  // return result;
  if (_newData.password) _newData.password = bcryptjs.hashSync(_newData.password, 8);
  const resultUpdate = await UserModel.findByIdAndUpdate(_id, _newData, { new: true });
  console.log(readOne({ _id: resultUpdate._id }));
  return readOne({ _id: resultUpdate._id }); //return
}

// // update=========================================================
// async function update(body) {
//   console.log(body.newData);
//   if (body.newData.password) {
//     body.newData.password = bcryptjs.hashSync(body.newData.password, 8);
//   }
//   return await UserModel.findByIdAndUpdate(body.id, body.newData, { new: true });
// }
exports.update = update;
