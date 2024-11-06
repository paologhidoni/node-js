import express from "express";
import path from "path";
const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../../src", "views", "add-product.html"));
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

export default router;
