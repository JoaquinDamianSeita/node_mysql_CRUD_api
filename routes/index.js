const router = require("express").Router();

const middlewares = require("../middlewares");
const apiOperationRouter = require("./api/operation");
const apiUserRouter = require("./api/user");

router.use("/operation",middlewares.checkToken,apiOperationRouter);
router.use("/user", apiUserRouter);


module.exports = router;