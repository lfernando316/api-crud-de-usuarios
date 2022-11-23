const userControllers = require("./crud.controllers");

const getAllUsers = (req, res) => {
  const data = userControllers.allUsers();
  res.status(200).json(data);
};

const getUserById = (req, res) => {
  const id = req.params.id;
  const data = userControllers.findUserById;
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: "Invalid id" });
  }
};

const postNewUser = (req, res) => {
  const { first_name, last_name, email, password, birthday } = req.body;
  if (first_name) {
    const data = userControllers.createNewUser({
      first_name,
      last_name,
      email,
      password,
      birthday,
    });
    res.status(201).json(data);
  } else {
    res.status(400).json({
      message: "invalid data",
      fields: {
        first_name: "string",
        last_name: "string",
        email: "string",
        password: "string",
        birthday: "2022",
      },
    });
  }
};

module.exports = {
  getAllUsers,
  postNewUser,
  getUserById,
};
