const router = require("express").Router();

const { Operation } = require("../../db");


router.get("/", async (req,res) => {
    const operations = await Operation.findAll();
    res.json(operations);
})

router.post("/", async (req,res) => {
    const operation = await Operation.create(req.body);
    res.json(operation);
})

router.put("/:operationID", async (req, res) => {
    await Operation.update(req.body, {
        where: { id: req.params.operationID }
    });
    res.json({ success: "Se ha modificado con exito!" });
});

router.delete("/:operationID", async (req,res) => {
    await Operation.destroy({
        where: { id: req.params.operationID }
    });
    res.json({ success: "Se ha borrado con exito!" })
});

module.exports = router;

