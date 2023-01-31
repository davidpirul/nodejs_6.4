const express = require("express");
const router = express.Router();
const control = require("../controllers/queryControl");

router.use(express.static("public"));

router.get("/", control.index);
router.get("/posts", control.get);
router.post("/posts", control.post);
router.put("/posts/like/:id", control.put);
router.delete("/posts/:id", control.delete);


module.exports = router;
