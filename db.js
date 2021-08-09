const mongoose = require('mongoose');

const user = 'admin',
  password = 'yosefhay',
  connectionString = `mongodb+srv://${user}:${password}@cluster0.s0kcf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

exports.connect = async function connect() {
  try {
    await mongoose.connect(
      connectionString,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      },
      (err) => {
        if (err) throw err;
      }
    );
    //  sucesess
    console.log('connected');
  } catch (error) {
    console.error('not connected', error.message);
  }
};
