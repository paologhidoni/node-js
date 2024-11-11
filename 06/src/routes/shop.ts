import express from "express";
import path from "path";
const router = express.Router();
import { products } from "./admin";

router.get("/", (req, res, next) => {
  console.log(products, "PRODUCTS");
  // res.sendFile(path.join(__dirname, "../../src", "views", "shop.html"));

  /* pug
  The first arguments is which template will be rendered,
  the second is the data we are passing to that template */
  res.render("shop", { docTitle: "Shop", prods: products });
});

export default router;
