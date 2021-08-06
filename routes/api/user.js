const router = require("express").Router();
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const { User } = require("../../db");
const moment = require("moment");
const jwt = require("jwt-simple");

router.post(
  "/register",
  [
    check("username", "El nombre de usuario es obligatorio").not().isEmpty(),
    check("password", "El password es obligatorio").not().isEmpty(),
    check("email", "El email debe ser correcto").isEmail(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errores: errors.array() });
    }

    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create(req.body);
    res.send(user);
  }
);

router.post("/login", async (req, res) => {
  const user = await User.findOne({ where: { email: req.body.email } });
  if (user) {

    const iguales = bcrypt.compareSync(req.body.password, user.password);
    if (iguales) {
        res.json({ success: createToken(user) });
    } else {
      res.json({ error: "Error en usuario y/o contraseña" });
    }
  } else {
    res.json({ error: "Error en usuario y/o contraseña" });
  }
});

const createToken = user => {
    const payload = { 
        usuarioId: user.usuarioId,
        createdAt: moment().unix(),
        expiredAt: moment().add(5, "minutes").unix()
    }
    return jwt.encode(payload, process.env.SECRET_JWT);
}

module.exports = router;
