const jwt = require('jsonwebtoken');
const secret = 'jhjhaj'; //the key / process.env.SECRET

exports.createToken = (id) => {
  const token = jwt.sign({ id }, secret, { expiresIn: '10d' });
  //   console.log(token);
  debugger;
  return token;
};

exports.verifyToken = (id, token) => {
  const tokenData = jwt.verify(token, secret) || {};
  debugger;
  if (id != tokenData || Data.now() > tokenData.exp * 1000) {
    throw { error: 'token unthorized' };
  }

  return true;
};
