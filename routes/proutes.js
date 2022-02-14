const prouter = require("../controller/pcontroller");

const router = require("express").Router();

router.post("/add", prouter.add);
router.get("/allpro", prouter.allpro);
router.get("/:id", prouter.onepro);
router.put("/:id", prouter.update);
router.delete("/:id", prouter.del);

module.exports = router;
