import express from "express";
import path from "path";
const adminRoutes = express.Router();
const products: Record<string, any>[] = [];

// /admin/add-product => GET
adminRoutes.get("/add-product", (req, res, next) => {
  // res.sendFile(path.join(__dirname, "../../src", "views", "add-product.html"));

  // pug
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    activeAddProduct: true, // to add the active class to the link with handlebars
    formsCSS: true, // to add the form styles with handlebars
    productCSS: true, // to add the product styles with handlebars
  });
});

// /admin/add-product => POST
adminRoutes.post("/add-product", (req, res, next) => {
  console.log(req.body);
  products.push(req.body);
  res.redirect("/");
});

export { adminRoutes, products };
