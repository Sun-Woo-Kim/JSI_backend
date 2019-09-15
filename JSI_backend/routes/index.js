import { Router } from "express";
var router = Router();

/* GET home page. */
router.get("/", function(req, res) {
  res.render("index", { title: "JSI Backend", message: "Hello!!" });
});

// export default router;

module.exports = router;
