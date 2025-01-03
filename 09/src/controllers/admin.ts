import { Request, Response, NextFunction } from "express";
import Product from "../models/product";

export const getAddProduct = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true, // to add the form styles with handlebars
  });
};

export const postAddProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const product = new Product(
    req.body.title,
    req.body.imageUrl,
    req.body.description,
    req.body.price,
    Math.random().toString()
  );
  console.log(product, "PRODUCT *********");
  await product.save();
  res.redirect("/admin/products");
};

export const getEditProduct = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.render("admin/edit-product", {
    pageTitle: "Edit Product",
    path: "/admin/edit-product",
  });
};

export const getAdminProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = await Product.fetchAll();
  /* render content dynamically using dynamic templating engines
      The first arguments is which template will be rendered,
      the second is the data we are passing to that template, the other
      ones are variables we can pass to the templates, with whichever value we like */
  res.render("admin/products", {
    pageTitle: "Products - Admin",
    prods: products,
    path: "/admin/products",
  });
};
