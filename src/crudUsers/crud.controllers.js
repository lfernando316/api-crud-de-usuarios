const users = [];
let id = 1;

const allUsers = () => {
  return users;
};

const createNewUser = (obj) => {
  const newUser = {
    id: id++,
    first_name: obj.first_name,
    last_name: obj.last_name,
    email: obj.email,
    password: obj.password,
    birthday: obj.birthday,
  };
  users.push(newUser);
  return newUser;
};

const findUserById = (id) => {
  const filteruser = users.find((user) => user.id == id);
  return data;
};

module.exports = {
  allUsers,
  createNewUser,
  findUserById,
};
