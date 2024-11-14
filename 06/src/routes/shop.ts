import express from "express";
const router = express.Router();
import { products } from "./admin";

router.get("/", (req, res, next) => {
  console.log(products, "PRODUCTS");
  // res.sendFile(path.join(__dirname, "../../src", "views", "shop.html"));

  /* render content dynamically using dynamic templating engines
  The first arguments is which template will be rendered,
  the second is the data we are passing to that template, the other
  ones are variables we can pass to the templates, with whichever value we like */
  res.render("shop", {
    pageTitle: "Shop",
    prods: products,
    path: "shop",
    activeShop: true,
    productCSS: true,
    hasProducts: products.length > 0, // with handlebars we cannot run logic in the template, therefore I have to pass a boolean value here
  });
});

export default router;
