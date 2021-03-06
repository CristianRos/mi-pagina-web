const bcrypt = require("bcrypt-nodejs");
const User = require("../models/user");

function signUp(req, res) {
  const user = new User();

  const { name, lastname, email, password, confirmPassword } = req.body;
  user.name = name;
  user.lastname = lastname;
  user.email = email;
  user.role = "admin";
  user.active = false;

  if (!password || !confirmPassword) {
    res.status(404).send({ message: "Las contraseñas son obligatorias." });
  } else {
    if (password !== confirmPassword) {
      res.status(404).send({ message: "La contraseña no coincide." });
    } else {
      // res.status(200).send({ message: "El usuario ha sido creado." });

      bcrypt.hash(password, null, null, function (err, hash) {
        if (err) {
          res
            .status(500)
            .send({ message: "Error al encriptar la contraseña." });
        } else {
          user.password = hash;

          user.save((err, userStored) => {
            if (err) {
              res.status(500).send({ message: err });
            } else {
              if (!userStored) {
                res.status(404).send({ message: "Error al crear el usuario" });
              } else {
                res.status(200).send({ user: userStored });
              }
            }
          });
        }
      });
    }
  }
}

module.exports = {
  signUp,
};
