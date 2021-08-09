window.onload = () => {
  onSubmit();
};
function onSubmit() {
  document.querySelector('form').onsubmit = (event) => {
    event.preventDefault();
    const values = Object.values(event.target).reduce(
      (acc, input) =>
        !input.name
          ? acc
          : {
              ...acc,
              [input.name]: input.type == 'checkbox' ? input.checked : input.value,
            },
      {}
    );
    console.log(values);
    login(values.mail, values.password);
  };
}
async function login(mail, password) {
  const result = await axios.post('/login', { mail, password });
  console.log(result);
  const user = result.data;
  console.log('get');
  localStorage.token = user.token;
  console.log(user);

  document.querySelector('#nameRes').innerHTML = `${user.first_name}`;
}
