const user = require('./controllers/users');

module.exports = function Router(app) {
  // // get all the users
  // app.get('/users', async function (req, res) {
  //   try {
  //     const token = req.headers.authorization;
  //     const list = await user.read({}, token);
  //     // const list = await user.read();
  //     res.send(list);
  //   } catch (error) {
  //     res.status('400').send(error.message);
  //   }
  // });
  // get all the users
  app.get('/users', async function (req, res) {
    try {
      const list = await user.read();
      res.send(list);
    } catch (error) {
      res.status('400').send(error.message);
    }
  });

  //   get user by id
  app.get('/users/:id', async function (req, res) {
    try {
      const resUser = await user.readOne({ _id: req.params.id });
      res.send(resUser);
    } catch (error) {
      res.status('400').send(error.message);
    }
  });

  //   register new user
  app.post('/register', async function (req, res) {
    try {
      const regUser = await user.register(req.body);
      res.send(regUser);
    } catch (error) {
      res.status('400').send(error.message);
    }
  });

  // login
  app.post('/login', async function (req, res) {
    try {
      console.log(req.body);
      const { mail, password } = req.body;
      const loginUser = await user.login(mail, password);
      res.send(loginUser);
    } catch (error) {
      res.status(400).send({
        error: error.message || error,
      });
    }
  });

  //   update
  app.put('/update', async function (req, res) {
    try {
      // const { id, newData } = req.body;
      // const updateUser = await user.update(req.body);
      const { id, newData } = req.body;

      const updateUser = await user.update(id, newData);
      res.send(updateUser);
    } catch (error) {
      res.status(400).send({
        error: error.message || error,
      });
    }
  });
};
