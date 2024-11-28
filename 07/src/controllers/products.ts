import { Request, Response, NextFunction } from "express";
import Product from "../models/product";

export const getAddProduct = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    activeAddProduct: true, // to add the active class to the link with handlebars
    formsCSS: true, // to add the form styles with handlebars
    productCSS: true, // to add the product styles with handlebars
  });
};

export const postAddProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const product = new Product(req.body.title);
  await product.save();
  res.redirect("/");
};

export const getProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = await Product.fetchAll();
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
};
